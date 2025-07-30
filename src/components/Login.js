import Header from "./Header"
import { useRef, useState } from "react";
import CheckValidData from "../utils/CheckValidData"
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_JPG } from "../utils/constants";

function Login() {
    const [isSignInform, setisSignInform] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const dispatch = useDispatch();                 // for adding user to the store                         
    const toggletoSignup = () => {
        setisSignInform(!isSignInform);
    }

    const handleValidateform = (e) => {
        e.preventDefault();
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const nameValue = isSignInform ? "" : name.current.value; // Only validate name for signup

        const validationMessage = CheckValidData(emailValue, passwordValue, nameValue, !isSignInform);
        setErrorMessage(validationMessage);
        // Proceed with login or signup logic here

        if (validationMessage) return;

        if (!isSignInform) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(addUser(user));
                    return updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        // Step 2: Reload user to get updated info
                        return auth.currentUser.reload().then(() => {
                            const updatedUser = auth.currentUser;
                            dispatch(addUser(updatedUser)); // Now includes displayName
                        });
                    });
                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage)
                });
        }

        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(addUser(user));
                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    errorCode = "404"
                    errorMessage = "user not found"
                    setErrorMessage (errorCode + " " + errorMessage)
                });
        }
    }

    return (
        <div className="relative min-h-screen w-full">
            <Header />
            <img
                src={BACKGROUND_JPG}
                alt="background"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <form onSubmit={handleValidateform} className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 rounded-md bg-gradient-to-b from-black to-black bg-opacity-70 z-20">
                <h2 className="font-bold text-3xl py-4 text-white">{!isSignInform ? "Sign Up" : "Sign In"}</h2>
                {!isSignInform && (
                    <>
                        <input ref={name}
                            className="bg-gray-700 py-3 px-4 w-full my-4 rounded-sm"
                            type="text"
                            placeholder="Full Name"
                        />
                    </>
                )}
                <input ref={email}
                    className="bg-gray-700 py-3 px-4 w-full my-4 rounded-sm"
                    type="text"
                    placeholder="Enter Your Email" />

                <input ref={password}
                    className="bg-gray-700 py-3 px-4 w-full my-4 rounded-sm"
                    type="password"
                    placeholder="Password" />
                {errorMessage && <p className="text-red-600 font-bold">{errorMessage}</p>}
                <button type="submit" className="py-3 bg-red-700 text-white w-full my-6 rounded-md">
                    {!isSignInform ? "Sign Up" : "Sign In"}
                </button>
                <p className="text-white py-4 cursor-pointer" onClick={toggletoSignup}>
                    {!isSignInform ? "Already Registered? Sign In" : "New to Netflix? Sign up now"}
                </p>
            </form>
        </div>
    )
}

export default Login
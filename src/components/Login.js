import Header from "./Header"
import { useState } from "react";
function Login() {
    const [isSignInform, setisSignInform] = useState(true);

    const toggletoSignup = () => {
        setisSignInform(!isSignInform);
    }
    return (
        <div className="relative min-h-screen w-full">
            <Header />
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_small.jpg"
                alt="background"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <form className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 rounded-md bg-gradient-to-b from-black to-black bg-opacity-70 z-20">
                <h2 className="font-bold text-3xl py-4 text-white">{!isSignInform ? "Sign Up" : "Sign In"}</h2>
                {!isSignInform && (
                    <input
                        className="bg-gray-700 py-3 px-4 w-full my-4 rounded-sm"
                        type="text"
                        placeholder="Full Name"
                    />
                )}
                <input
                    className="bg-gray-700 py-3 px-4 w-full my-4 rounded-sm"
                    type="text"
                    placeholder="Enter Your Email" />
                <input
                    className="bg-gray-700 py-3 px-4 w-full my-4 rounded-sm"
                    type="password"
                    placeholder="Password" />
                <button className="py-3 bg-red-700 text-white w-full my-6 rounded-md">
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
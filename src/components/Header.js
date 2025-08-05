import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { toggleGptSearch } from '../utils/GptSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  console.log('Header component rendering');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      // Optionally handle error
      alert("Sign out failed");
    }
  };
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  console.log('User state:', user);
  console.log('Show GPT Search:', showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);


  const handleGptSearch = () => {

    dispatch(toggleGptSearch());
  }

  return (
    <div className="absolute w-full flex justify-between items-center bg-gradient-to-b from-black/30 to-transparent py-4 px-6">
      <img
        className="h-12 drop-shadow-lg text-red-600"
        src="/assests/logo.png"
        alt="logo"
      />
      {user && <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded drop-shadow-lg"
          src="/assests/netflix-icon.jpg"
          alt="user icon"
        />
                                  <button
            className="cursor-pointer py-2 m-2 bg-purple-700 text-white rounded-md px-4 hover:bg-purple-800"
                 onClick={() => {
                   handleGptSearch();
                 }}
               >
          {showGptSearch ? "Home" : "GPT Search"}
        </button>
        <button
          className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors shadow-lg "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
}

export default Header

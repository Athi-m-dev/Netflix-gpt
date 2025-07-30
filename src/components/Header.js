import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser , removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const dispatch = useDispatch();
  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Redirect to login page after sign out
    } catch (error) {
      // Optionally handle error
      alert("Sign out failed");
    }
  };


  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName } = user;
        dispatch(addUser({ uid, email, password, displayName }));
        navigate("/Browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return ()=> unsubscribe();
  }, [])

  return (
    <div className="w-full flex justify-between items-center">
      <img
        className="h-12"
        src={LOGO}
        alt="logo"
      />
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12"
            src="assests/netflix-icon.jpg"
            alt="user icon"
          />
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header

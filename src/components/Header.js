import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      // Optionally handle error
      alert("Sign out failed");
    }
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid, email, displayName }));
      if (location.pathname === "/" || location.pathname === "/login") {
        navigate("/Browse");
      }
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <div className="absolute w-full flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent py-4 px-6">
      <img
        className="h-12 drop-shadow-lg text-red-600"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {location.pathname !== "/" && (
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded drop-shadow-lg"
            src="assests/netflix-icon.jpg"
            alt="user icon"
          />
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors shadow-lg"
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

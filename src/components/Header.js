import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {Logo} from '../utils/constant'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSingout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate("/browser");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
    });
    // this will be called unsubscribe when component unmount
    return ()=> unsubscribe();
  }, []);

  return (
    <div
      className="flex w-full justify-between items-center
    absolute px-8 py-2 bg-gradient-to-b from-black z-10"
    >
      <img
        className="w-44"
        src={Logo}
        alt="Logo"
      />
      {user && (
        <div className="flex">
          {/* <img alt="logout-logo" src={user?.photoURL} className="h-10" /> */}
          <button
            onClick={handleSingout}
            className="bg-red-500 font-bold text-white p-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

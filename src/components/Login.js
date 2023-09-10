import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = ()=> {
        setIsSignInForm(!isSignInForm)  
    }
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="backgroundImg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-bold text-3xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        { !isSignInForm &&
             <input
             type="text"
             placeholder="Full Name"
             className="w-full p-4 my-4 bg-gray-700"
           />
        }
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700"
        />
        <button type="button" className="p-4 my-6 rounded-lg bg-red-700 w-full">
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a user, Please Sign In'}</p>
      </form>
    </div>
  );
};

export default Login;

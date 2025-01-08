import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
        />
      </div>
      <form className="absolute  w-3/12 p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="px-2">{isSignInForm ? "Sign Up" : "Sign In"}</h1>
        {isSignInForm && (
          <input
            className="p-3 my-2 w-full bg-gray-700"
            type="text"
            placeholder="Enter Name"
          />
        )}
        <input
          className="p-3 my-2 w-full bg-gray-700"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="p-3 my-2 w-full bg-gray-700"
          type="password"
          placeholder="Enter Password"
        />
        <button className="p-3 my-4 bg-red-600 w-full">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="my-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already registered? Sign In Now."
            : "New to Netflix? Sign Up Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

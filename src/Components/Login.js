import React, { useState, useRef, use } from "react";
import Header from "./Header";
import { checkValidata } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const Name = useRef(null);

  const togglefunc = () => {
    setisSignIn(!isSignIn);
  };

  const handleValidate = () => {
    const message = checkValidata(
      email.current.value,
      password.current.value,
      isSignIn ? "" : Name.current.value,
    );
    if (!isSignIn) {
      //SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/-C6JXERmV8Dg/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklh0XgGm-wDiK5Frhgq5mRht0HcdQ/photo.jpg?sz=46",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
              // ...
            });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code + "-" + error.message);
          // ..
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + error.message);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg"
        alt="movies"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-20">
        <Header />
      </div>

      <div className="relative z-10 min-h-screen flex justify-center items-center text-white bg-opacity-50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-3/12 p-12 bg-black/80 flex flex-col rounded-lg bg-opacity-80 "
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={Name}
              type="text"
              placeholder="Enter Full Name"
              className="p-4 my-4 w-full bg-gray-800"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Enter Email Address"
            className="p-4 my-4 w-full bg-gray-800"
          />

          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="p-4 my-4 w-full bg-gray-800"
          />
          {!isSignIn && (
            <input
              ref={password}
              type="password"
              placeholder="Confirm Password"
              className="p-4 my-4 w-full bg-gray-800"
            />
          )}
          <p className="text-red-600 font-mono text-lg p-2">{errormessage}</p>

          <button
            onClick={handleValidate}
            className="p-4 my-6 bg-red-600 text-white w-full rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className=" my-3 p-4 cursor-pointer" onClick={togglefunc}>
            {isSignIn
              ? "New to Netfilx?SignUp Now"
              : "Already Registered-Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

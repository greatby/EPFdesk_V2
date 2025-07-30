// // src/components/GoogleLogin.js
// import React, { useEffect, useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../firebase";
// import { sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const sendEmailLink = async () => {
//     const actionCodeSettings = {
//       url: window.location.origin + "/finishSignIn",
//       handleCodeInApp: true,
//     };

//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       window.localStorage.setItem("emailForSignIn", email);
//       setMessage("Check your inbox! A sign-in link has been sent.");
//     } catch (error) {
//       setMessage("Error sending link: " + error.message);
//     }
//   };

//   useEffect(() => {
//     if (signInWithEmailLink && window.location.href.includes("signIn")) {
//       const storedEmail = window.localStorage.getItem("emailForSignIn");
//       if (storedEmail) {
//         signInWithEmailLink(auth, storedEmail, window.location.href)
//           .then(() => {
//             window.localStorage.removeItem("emailForSignIn");
//             setMessage("You are signed in!");
//           })
//           .catch((error) => setMessage("Login failed: " + error.message));
//       }
//     }
//   }, []);

//   const handleProviderLogin = async (provider) => {
//     try {
//       await signInWithPopup(auth, provider);
//       toast.success("Logged in successfully!");
//       navigate("/signin");
//     } catch (error) {
//       toast.error("Login failed: " + error.message);
//     }
//   };
//   const FloatingCircles = () => (
//     <>
//       <div className="absolute w-5 h-5 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
//       <div className="absolute w-4 h-4 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
//       <div className="absolute w-6 h-6 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
//     </>
//   );
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e] flex items-center justify-center overflow-hidden relative">
//       <div className="absolute w-40 h-40 bg-pink-300 rounded-full top-10 left-10 opacity-70 blur-xl z-0" />
//       <div className="absolute w-52 h-52 bg-yellow-300 rounded-full bottom-20 right-20 opacity-60 blur-xl z-0" />
//       <div className="absolute w-32 h-32 bg-blue-300 rounded-full bottom-10 left-1/3 opacity-70 blur-xl z-0" />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="relative z-10 bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-8 w-11/12 max-w-md text-center"
//       >
//         <div className="absolute w-5 h-5 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
//         <div className="absolute w-4 h-4 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
//         <div className="absolute w-6 h-6 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back</h1>
//         <p className="text-gray-600 mb-8">
//           Sign in using your Google account to continue
//         </p>

//         <button
//           onClick={() => handleProviderLogin(googleProvider)}
//           className="w-full mb-3 flex items-center justify-center gap-3 text-lg font-medium py-3 px-4 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition"
//         >
//           <FcGoogle className="text-2xl font-semibold" />
//           Continue with Google
//         </button>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />

//         <button
//           onClick={sendEmailLink}
//           className="w-full bg-pink-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-pink-600 transition"
//         >
//           Continue with Email
//         </button>

//         {message && <p className="text-sm text-gray-700 mt-4">{message}</p>}
//       </motion.div>
//     </div>
//   );
// };

// export default Login;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import {
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase"; // adjust path
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [needsEmail, setNeedsEmail] = useState(false);
  const navigate = useNavigate();

  // Send the magic link
  const sendEmailLink = async () => {
    const actionCodeSettings = {
      url:
        process.env.NODE_ENV === "production"
          ? "https://ep-fdesk-v2.vercel.app/signin"
          : "http://localhost:5173/signin",
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("Check your inbox! A sign-in link has been sent.");
    } catch (error) {
      setMessage("Error sending link: " + error.message);
    }
  };

  // Complete sign in
  // const completeSignIn = async (emailInput) => {
  //   try {
  //     await signInWithEmailLink(auth, emailInput, window.location.href);
  //     window.localStorage.removeItem("emailForSignIn");
  //     toast.success("You are signed in!");
  //     navigate("/signin",{ replace: true });
  //   } catch (error) {
  //     setMessage("Login failed: " + error.message);
  //   }
  // };

  const completeSignIn = async (emailInput) => {
    try {
      const result = await signInWithEmailLink(
        auth,
        emailInput,
        window.location.href
      );
      console.log("Sign-in Result:", result);
      if (result?.user) {
        window.localStorage.removeItem("emailForSignIn");
        toast.success(`Welcome ${result.user.email}!`);
        navigate("/signin", { replace: true });
      } else {
        setMessage("No user returned. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Login failed: " + error.message);
    }
  };

  // Handle sign-in when user clicks email link
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let storedEmail = window.localStorage.getItem("emailForSignIn");
      if (storedEmail) {
       completeSignIn(storedEmail).then(() => navigate("/signin", { replace: true }));
      } else {
        // If no stored email, show input for user
        setNeedsEmail(true);
      }
    }
  }, []);

  const handleProviderLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in successfully!");
      navigate("/signin");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e] flex items-center justify-center overflow-hidden relative">
      {/* Background circles */}
      <div className="absolute w-40 h-40 bg-pink-300 rounded-full top-10 left-10 opacity-70 blur-xl z-0" />
      <div className="absolute w-52 h-52 bg-yellow-300 rounded-full bottom-20 right-20 opacity-60 blur-xl z-0" />
      <div className="absolute w-32 h-32 bg-blue-300 rounded-full bottom-10 left-1/3 opacity-70 blur-xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-8 w-11/12 max-w-md text-center"
      >
        <div className="absolute w-5 h-5 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
        <div className="absolute w-4 h-4 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
        <div className="absolute w-6 h-6 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back</h1>
        <p className="text-gray-600 mb-8">Sign in with Google or your Email</p>

        {/* Google Button */}
        <button
          onClick={() => handleProviderLogin(googleProvider)}
          className="w-full mb-3 flex items-center justify-center gap-3 text-lg font-medium py-3 px-4 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition"
        >
          <FcGoogle className="text-2xl font-semibold" />
          Continue with Google
        </button>

        {/* Email input for sending link */}
        {!needsEmail && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={sendEmailLink}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Continue with Email
            </button>
          </>
        )}

        {/* Email input for completing sign-in (if opened on different device) */}
        {needsEmail && (
          <div className="mt-4">
            <p className="text-gray-600 mb-3">
              Please confirm your email to finish signing in
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              onClick={() => completeSignIn(email)}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Confirm Email
            </button>
          </div>
        )}

        {message && <p className="text-sm text-gray-700 mt-4">{message}</p>}
      </motion.div>
    </div>
  );
};

export default Login;

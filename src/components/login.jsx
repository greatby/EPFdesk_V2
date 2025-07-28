// src/components/GoogleLogin.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const handleProviderLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in successfully!");
      navigate("/signin");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };
  const FloatingCircles = () => (
    <>
      <div className="absolute w-5 h-5 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
      <div className="absolute w-4 h-4 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
      <div className="absolute w-6 h-6 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
    </>
  );
  return (
    //     <div
    //       className="relative w-full h-screen bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]
    //  overflow-hidden grid md:grid-cols-2"
    //     >

    //       <FloatingCircles />
    //       <div className="absolute inset-0 pointer-events-none">
    //         {[...Array(5)].map((_, i) => (
    //           <div
    //             key={i}
    //             className={`absolute rounded-full opacity-20 animate-float${i + 1}`}
    //             style={{
    //               width: `${20 + i * 10}px`,
    //               height: `${20 + i * 10}px`,
    //               top: `${20 * i + 10}px`,
    //               left: `${15 * i + 10}px`,
    //               backgroundColor: [
    //                 "#ff6b6b",
    //                 "#4ecdc4",
    //                 "#ffe66d",
    //                 "#a8e6cf",
    //                 "#ffd3a5",
    //               ][i],
    //             }}
    //           />
    //         ))}
    //       </div>

    //       <div className="absolute w-36 h-36 top-20 left-1/2 -translate-x-1/2">
    //         <div className="absolute w-16 h-16 bg-red-300 rounded-full -top-4 -right-4 opacity-30" />
    //         <div className="absolute w-12 h-12 bg-teal-300 rounded-full -bottom-4 -left-4 opacity-30" />
    //         <div className="absolute w-24 h-24 bg-yellow-200 rounded-[35px] rotate-45 top-10 left-10 opacity-30" />
    //       </div>

    //       <div className="relative flex items-center justify-center z-0"></div>

    //       <div className="relative flex items-center justify-center z-10">
    //         <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl w-auto text-center">
    //           <h2 className="text-4xl font-semibold mb-5">
    //             Sign up with your account
    //           </h2>
    //           <button
    //             className="w-full flex items-center justify-center text-[1.3rem] font-semibold py-2 px-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
    //             onClick={() => handleProviderLogin(googleProvider)}
    //           >
    //             <FcGoogle className="mr-2" size={25} /> Continue with Google
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e] flex items-center justify-center overflow-hidden relative">
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
        <p className="text-gray-600 mb-8">
          Sign in using your Google account to continue
        </p>

        <button
          onClick={() => handleProviderLogin(googleProvider)}
          className="w-full flex items-center justify-center gap-3 text-lg font-medium py-3 px-4 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition"
        >
          <FcGoogle className="text-2xl font-semibold" />
          Continue with Google
        </button>
      </motion.div>
    </div>
  );
};

export default Login;

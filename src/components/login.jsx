// src/components/GoogleLogin.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

  return (
    // <div
    //   className="min-h-screen flex items-center justify-center px-4"
    //   style={{
    //     backgroundImage: "url('/images/bg-1.png')",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
    //     <h2 className="text-3xl font-bold text-gray-800 mb-6">
    //       Sign up with your account
    //     </h2>

    //     <div className="flex flex-col space-y-4">
    //       <button
    //         onClick={() => handleProviderLogin(googleProvider)}
    //         className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition-colors"
    //       >
    //         <FcGoogle className="w-5 h-5" />
    //         <span className="text-sm font-semibold text-gray-700">
    //           Continue with Google
    //         </span>
    //       </button>

    //       {/* <button
    //         onClick={() => handleProviderLogin(microsoftProvider)}
    //         className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition-colors"
    //       >
    //         <FaMicrosoft className="w-5 h-5 text-blue-600" />
    //         <span className="text-sm font-medium text-gray-700">
    //           Continue with Microsoft
    //         </span>
    //       </button> */}
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-full h-screen md:grid md:grid-cols-2">
      {/* Background image for tablet and below */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/images/bg-1.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-white/80 md:bg-transparent">
        <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Sign up with your account
          </h2>
          <button
            className="w-full text-lg font-semibold py-2 px-4 bg-gray-100 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-200"
            onClick={() => handleProviderLogin(googleProvider)}
          >
            <FcGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
      </div>

      {/* Optional right-side image for desktop layout */}
      <div className="hidden md:block">
        <img
          src="/images/bg-1.png"
          alt="Right side illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;

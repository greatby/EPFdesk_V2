// src/components/GoogleLogin.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();

  const handleProviderLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Logged in successfully!');
      navigate('/signin');
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{backgroundImage: "url('/images/Background_Login.png')", backgroundSize: 'cover'}}>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Sign up with your account
        </h2>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleProviderLogin(googleProvider)}
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition-colors"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-sm font-semibold text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* <button
            onClick={() => handleProviderLogin(microsoftProvider)}
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition-colors"
          >
            <FaMicrosoft className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Continue with Microsoft
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;

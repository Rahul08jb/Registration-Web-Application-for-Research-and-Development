import React from 'react';

const SignInForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 ">
      <div className="flex shadow-lg rounded-lg overflow-hidden w-4/5 md:w-2/3 lg:w-1/2">
        
        {/* Left Section (Logo/Background) */}
        <div className="hidden md:flex w-1/3 bg-gradient-to-b from-blue-900 to-indigo-700 p-4">
          <img 
            src="logo ka path dal do" 
            alt="Logo" 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-2/3 bg-white p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Sign In</h2>
          
          <div className="flex space-x-4 mb-6">
            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <img className="w-6 h-6 mr-2" src="path_to_google_icon" alt="Google Icon" />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <img className="w-6 h-6 mr-2" src="" alt="Facebook Icon" />
              Sign up with Facebook
            </button>
          </div>

          <p className="text-center text-gray-500 mb-6">- OR -</p>

          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <a href="/create-account" className="hover:underline">Not have an account? <span className="font-semibold">Register</span></a>
            <a href="#" className="hover:underline">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

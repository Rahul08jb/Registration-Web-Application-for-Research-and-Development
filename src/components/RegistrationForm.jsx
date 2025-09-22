import { Superscript } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [captcha, setCaptcha] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 ">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-xl ">
      <div className="flex justify-end">
          <button className="text-blue-600 hover:underline"><Link to="/login">Sign In</Link></button>
        </div>
        <h1 className="text-2xl font-bold mb-6 m-3">Create New Account</h1>

        <form>
          {/* Login Information */}
          <div className="mb-6 ">
            <h2 className="text-lg font-medium mb-2">Login Information</h2>

            <div className="mb-4 flex flex-row  space-x-5  p-4  rounded-lg">
              <label className="block text-sm font-medium mb-1 text-black mt-2.5" htmlFor="email flex flex-row ">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Email"
              />
            </div>

            <div className="mb-4 flex flex-row space-x-5  ">
              <label className="block text-sm font-medium mb-1 mt-2.5" htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Password"
              />
            </div>

            <div className="mb-4  flex flex-row  space-x-5 ">
              <label className="block text-sm font-medium mb-1 rounded-3xl" htmlFor="confirmPassword">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-6 ">
            <h2 className="text-lg font-medium mb-2">Personal Information</h2>

            <div className="mb-4  flex flex-row  space-x-5 ">
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="First Name"
              />
            </div>

            <div className="mb-4  flex flex-row  space-x-5 ">
              <label className="block text-sm font-medium mb-1" htmlFor="middleInitial">
                Middle Name
              </label>
              <input
                type="text"
                id="middleInitial"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Initial"
              />
            </div>

            <div className="mb-4  flex flex-row  space-x-5 ">
              <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Last Name"
              />
            </div>

            <div className="mb-4  flex flex-row  space-x-5 ">
              <label className="block text-sm font-medium mb-1" htmlFor="organization">
                Organization Name
              </label>
              <input
                type="text"
                id="organization"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Organization Name"
              />
            </div>

            <div className="mb-4  flex flex-row  space-x-5 ">
              <label className="block text-sm font-medium mb-1" htmlFor="country">
                Country/Region<span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option>Select...</option>
                <option>India</option>
                <option>USA</option>
                <option>India</option>
                <option>India</option>
                <option>India</option>
                <option>India</option>
                {/* Add more countries here */}
              </select>
            </div>
          </div>

          {/* Verification */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Verification</h2>
            <hr className='text-black p-4'/>

            <div className="mb-4  flex flex-col  ">
              <label className="block text-sm font-medium mb-1" htmlFor="captcha">
                Enter the characters you see<span className="text-red-500">*</span>
              </label>
              <div className="mb-2">
                {/* Placeholder for Captcha image */}
                <div className="w-40 h-10 bg-gray-200 flex justify-center items-center text-gray-500">
                  Captcha Here
                </div>
              </div>
              <input
                type="text"
                id="captcha"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Captcha..."
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Use
                  </a>
                  ,{' '}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  , and other policies.
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;




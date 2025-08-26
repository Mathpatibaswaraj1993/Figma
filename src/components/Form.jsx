import React, { useState } from "react";

function Form() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-blue-600"
      style={{
        backgroundImage: "url('/form1.jpg')",
      }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl px-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center text-white p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            We solve digital <br />
            problems with an <br />
            <span className="text-indigo-300">outstanding creative flare</span>
          </h1>
          <p className="mt-4 text-sm md:text-base max-w-md">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            {/* Tabs */}
            <div className="flex mb-6 border-b">
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 text-center pb-2 font-semibold ${
                  activeTab === "signup"
                    ? "border-b-2 border-indigo-500 text-indigo-600"
                    : "text-gray-500"
                }`}
              >
                SIGN UP
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 text-center pb-2 font-semibold ${
                  activeTab === "login"
                    ? "border-b-2 border-indigo-500 text-indigo-600"
                    : "text-gray-500"
                }`}
              >
                LOGIN
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />

              {activeTab === "signup" ? (
                <button className="w-full py-2 bg-teal-400 text-white rounded-lg font-semibold hover:bg-teal-500 transition">
                  Create an Account
                </button>
              ) : (
                <button className="w-full py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition">
                  Login
                </button>
              )}

              <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-2 text-gray-500 text-sm">or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                Login via Twitter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

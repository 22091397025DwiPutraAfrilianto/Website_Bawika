import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-yellow-100">
      {/* Bagian Kiri */}
      <div className="flex-1 flex items-center justify-center p-10 bg-yellow-300">
        <div className="text-center">
          <div className="bg-yellow-200 rounded-full p-6 mb-4">
            <h1 className="text-2xl font-bold">
              Halo, Kembali lagi di Bawika.
            </h1>
          </div>
          <img
            src="character.png" // Ganti dengan URL gambar Anda
            alt="Bawika Character"
            className="mt-4 w-48 h-48"
          />
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <img
              src="logo.png" // Ganti dengan URL logo Anda
              alt="Bawika Logo"
              className="mx-auto mb-2 w-20"
            />
            <h2 className="text-2xl font-bold">Login</h2>
          </div>

          {/* Form Login */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
              >
                👁️
              </button>
            </div>
            <div className="flex justify-end mb-6">
              <Link
                to="/forgot-password"
                className="text-sm text-yellow-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded font-bold hover:bg-yellow-600"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <Link
              to="/signup"
              className="text-sm text-yellow-500 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

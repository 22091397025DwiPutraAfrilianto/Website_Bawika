import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Sign up Akun</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Nama Depan</label>
        <input
          type="text"
          name="firstName"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Masukkan nama depan"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Nama Belakang</label>
        <input
          type="text"
          name="lastName"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Masukkan nama belakang"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Masukkan email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Masukkan password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Konfirmasi Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Masukkan ulang password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-400 text-white py-2 rounded-md"
      >
        Login
      </button>
      <p className="text-center mt-4 text-sm">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-yellow-500">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;

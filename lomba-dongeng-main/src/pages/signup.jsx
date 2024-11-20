import React from "react";
import SignupForm from "../components/SignupForm.jsx";

const SignupPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
      <div className="bg-white p-8 shadow-md rounded-md lg:w-1/3 w-11/12">
        <SignupForm />
      </div>
      <div className="lg:w-1/2 w-11/12 mt-8 lg:mt-0 flex flex-col items-center">
        <div className="bg-yellow-300 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Sugeng Rawuh!</h2>
          <p className="mt-2 text-sm">
            Mari jelajahi serunya belajar bahasa dan budaya Jawa lewat cerita,
            kuis, dan dongeng menarik. Daftar sekarang dan lestarikan warisan
            bersama!
          </p>
        </div>
        <img
          src="bawika-character.png" // Ganti dengan path gambar Anda
          alt="Karakter Bawika"
          className="mt-6 w-40 h-auto"
        />
      </div>
    </div>
  );
};

export default SignupPage;

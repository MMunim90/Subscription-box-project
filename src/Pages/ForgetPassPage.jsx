import React, { useRef, useState } from "react";
import { auth } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import { GrPowerReset } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

const ForgetPassPage = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    //send password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.warning(
          "A password reset email is send. please check your inbox"
        );
        window.open("https://mail.google.com", "_blank");
        navigate("/auth/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        toast.error(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center text-center bg-gray-50 text-gray-800 mx-auto w-11/12">
        <Helmet>
          <title>SNB | Reset Password</title>
        </Helmet>
        <form
          onSubmit={handleForgetPassword}
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg mt-8 bg-gray-400 text-gray-800"
        >
        <h1 className="font-bold text-2xl text-secondary text-center mb-4">Reset Your Password</h1>
          <label className="block text-gray-600 text-start mb-2">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
          />
          <button
            type="submit"
            className="flex justify-center gap-2 items-center w-full p-3 text-center text-white rounded-sm bg-secondary cursor-pointer mt-4"
          >
            <GrPowerReset size={20} />
            Reset Password
          </button>
        </form>
      </div>
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
};

export default ForgetPassPage;

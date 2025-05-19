import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  // console.log(location)
  const navigate = useNavigate();
  const { signInWithGoogle, signIn } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({email, password})
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`${user.displayName} Logged In Successfully`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorcode = error.code;
        const errorMessage = error.message;
        toast.error(errorcode, errorMessage);
        setError(errorcode);
      });
  };

  const handleGoogleSignIn = () => {
    // console.log("google sign in complete")
    signInWithGoogle()
      .then((result) => {
        // console.log(result)
        const user = result.user;
        navigate("/");
        toast.success(`${user.displayName} Logged In Successfully`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        toast.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-400 mt-4 mx-auto">
      <Helmet>
        <title>SNB | Login</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
          />
          <div className="flex justify-end text-xs text-gray-600 hover:underline">
            <Link to="/auth/forgetPass" rel="noopener noreferrer">
              Forgot Password?
            </Link>
          </div>

          {error && <p className="text-red-600 text-xs">{error}</p>}
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm bg-secondary cursor-pointer"
        >
          Log in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-700 font-bold">OR</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4 my-6">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-secondary w-full"
        >
          <FcGoogle size={24} /> Login With Google
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Don't have an account?
        <Link to="/auth/register" className="underline text-gray-800">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

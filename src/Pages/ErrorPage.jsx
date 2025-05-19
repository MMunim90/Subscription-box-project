import React from "react";
import errorImage from "../assets/error-404.jpg";
import { Link, useRouteError } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="text-center place-self-center my-10 py-24 min-h-[calc(100vh-166px)]">
        <img className="mx-auto w-40 mb-10" src={errorImage} alt="" />
        <h1 className="text-gray-900 font-bold text-7xl mb-8">
          {error?.status || 404}
        </h1>
        <p className="mb-5 text-xl font-bold text-gray-900 md:text-2xl">
          {error?.error?.message || "Something Went Wrong!"}
        </p>
        <Link className="btn text-base-100 bg-secondary py-2 px-8" to="/">
          <FaArrowLeftLong className="inline mr-2" /> Go to home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

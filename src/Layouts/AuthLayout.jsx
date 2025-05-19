import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;

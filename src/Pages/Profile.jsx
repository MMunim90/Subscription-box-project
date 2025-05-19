import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'

const Profile = () => {
  const { user, setUser, updateUserProfile } = use(AuthContext);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateUserProfile({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        Swal.fire({
            title: "Great!",
            text: "You update your profile successfully!",
            icon: "success"
          });
      })
      .catch((error) => {
        //console.log(error);
        toast.error(error);
        setUser(user);
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>SNB | Profile</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>
      <h1 className="font-bold text-2xl text-secondary text-center mt-6">
        Update Your Profile
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col items-center gap-8">
          <img className="w-48 rounded-2xl" src={user.photoURL} alt="" />
          <h1 className="font-bold text-3xl text-secondary">
            Name : {user && user.displayName}
          </h1>
          <p className="text-xl text-secondary">Email : {user.email}</p>
        </div>
        <div className="mt-8 md:mt-0">
          <form onSubmit={handleUpdateUser} className="bg-gray-400 p-10 rounded-2xl space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="name"
                id="username"
                placeholder="Username"
                required
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Photo URL"
                required
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="block w-full p-3 mt-10 text-white text-center rounded-sm bg-secondary cursor-pointer"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

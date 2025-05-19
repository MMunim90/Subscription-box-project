import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

const SubscriptionDetails = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const data = useLoaderData();
  const { id } = useParams();
  const singleService = data.find((service) => service.id === parseInt(id));
  const {
    thumbnail,
    name,
    price,
    frequency,
    description,
    features,
    subscription_benefits,
  } = singleService || {};

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;
    if (!/^[1-5]$/.test(rating)) {
      toast.error("Rating should be between 1 - 5");
      return;
    }
    setReview(review);
    setRating(rating);
  };
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>SNB | Details</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="space-y-6 my-6">
        <img
          className="w-full h-full object-cover rounded-2xl border"
          src={thumbnail}
          alt=""
        />
        <h3 className="text-4xl font-bold text-secondary">{name}</h3>
        <div>
          <span className="text-xl font-bold text-secondary">${price}</span>
          <span className="text-lg text-gray-600 ml-1">/ {frequency}</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span className="font-bold text-lg md:text-2xl text-secondary">
            Features :
          </span>
          {features &&
            features.map((tag, index) => (
              <span
                style={{
                  padding: "4px 8px",
                  background: "#D3D3D3",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
                key={index}
              >
                {tag}
              </span>
            ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span className="font-bold text-lg md:text-2xl text-secondary">
            Subscription Benefits :
          </span>
          {subscription_benefits &&
            subscription_benefits.map((tag, index) => (
              <span
                style={{
                  padding: "4px 8px",
                  background: "#D3D3D3",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
                key={index}
              >
                {tag}
              </span>
            ))}
        </div>

        {/* description */}
        <p className="text-secondary">{description}</p>

        <div>
          <div>
            {review && (
              <p className="text-gray-600 text-lg flex items-center">
                <span className="font-bold text-2xl text-secondary mr-4">
                  Review :
                </span>{" "}
                {review}
              </p>
            )}
          </div>
          <div>
            {rating && (
              <p className="flex items-center text-gray-600 text-lg">
                <span className="font-bold text-2xl text-secondary mr-4">
                  Rating :
                </span>
                {rating}
                <FaStar className="ml-2 w-5 h-5 text-secondary" />
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <form
            onSubmit={handleReview}
            className="bg-gray-400 p-10 rounded-2xl space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Review
              </label>
              <input
                type="text"
                name="review"
                id="review"
                placeholder="Review this service"
                required
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Rating</label>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Rating service (between 1-5)"
                required
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="block w-full p-3 mt-10 text-white text-center rounded-sm bg-secondary cursor-pointer"
            >
              Review
            </button>
          </form>
        </div>

        <Link to="/" className="btn text-base-100 px-8 py-2 btn-secondary">
          <FaArrowLeftLong className="inline" />
          Home
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionDetails;

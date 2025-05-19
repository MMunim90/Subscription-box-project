import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const SubscriptionCard = ({ service }) => {
  const {
    thumbnail,
    name,
    tech_category,
    price,
    frequency,
    id,
    number_of_reviews,
    ratings,
  } = service || {};
  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 w-11/12 mx-auto border-2">
      <img className="w-full h-48 object-cover" src={thumbnail} alt={name} />
      <div className="p-4 rounded-b-2xl bg-gray-400">
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{tech_category}</p>
        <div className="flex items-center mb-2">
        <FaStarHalfStroke />
          <span className="text-sm font-medium">{ratings}</span>
          <span className="text-sm text-gray-600 ml-2">({number_of_reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold">${price}</span>
            <span className="text-sm text-gray-700 ml-1">/ {frequency}</span>
          </div>
        </div>
        <div className="w-full text-white cursor-pointer py-2 rounded-xl bg-secondary text-center">
          <Link to={`/news-details/${id}`}>View More</Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;

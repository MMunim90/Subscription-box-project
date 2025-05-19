import React from "react";
import CountUp from "react-countup";

const SubscriptionCounter = () => {
  return (
    <div className="my-8">
    <h1 className="font-bold text-2xl mb-2 mt-8 text-secondary">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-start text-black">
        <div className="bg-gray-300 p-12 rounded-2xl">
          <img
            className="mb-6"
            src="https://i.ibb.co.com/NnWrQyGp/success-staffs.png"
            alt=""
          />
          <CountUp className="font-extrabold text-5xl text-secondary" end={2200} duration={10} />{" "}
          <span className="font-extrabold text-5xl text-secondary">+</span>
          <p className="opacity-50 mt-6">Total Subscriber</p>
        </div>
        <div className="bg-gray-300 p-12 rounded-2xl">
          <img
            className="mb-6"
            src="https://i.ibb.co.com/4L4Wvnc/success-review.png"
            alt=""
          />
          <CountUp className="font-extrabold text-5xl text-secondary" end={3157} duration={10} />{" "}
          <span className="font-extrabold text-5xl text-secondary">+</span>
          <p className="opacity-50 mt-6">Total Reviews</p>
        </div>
        <div className="bg-gray-300 p-12 rounded-2xl">
          <img
            className="mb-6 w-16"
            src="https://i.ibb.co.com/9kF8Hzb9/category.png"
            alt=""
          />
          <CountUp
            className="font-extrabold text-5xl text-secondary"
             end={20}
            duration={10}
          />{" "}
          <span className="font-extrabold text-5xl text-secondary">+</span>
          <p className="opacity-50 mt-6">Total Category</p>
        </div>
        <div className="bg-gray-300 p-12 rounded-2xl">
          <img
            className="mb-6 w-15"
            src="https://i.ibb.co.com/zHBq6v8z/Collaboration.png"
            alt=""
          />
          <CountUp className="font-extrabold text-5xl text-secondary" end={77} duration={10} />{" "}
          <span className="font-extrabold text-5xl text-secondary">+</span>
          <p className="opacity-50 mt-6">Total Collaboration</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCounter;

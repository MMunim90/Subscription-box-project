import React, { useEffect, useState } from "react";
import SubscriptionCard from "./SubscriptionCard";

const Subscriptions = ({ subscriptions }) => {
  const [displaySubscriptions, setDisplaySubscriptions] = useState([]);
//   console.log(displaySubscriptions);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplaySubscriptions(subscriptions);
    } else {
      setDisplaySubscriptions(subscriptions.slice(0, 4));
    }
  }, [subscriptions, showAll]);
  return (
    <div className="mt-16">
    <h1 className="font-bold text-2xl mb-2 text-secondary text-center">All Categories</h1>
    <div className='py-8'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {
            displaySubscriptions.map(service => <SubscriptionCard key={service.id} service={service}></SubscriptionCard>) 
        }
    </div>
  <div className="w-full text-center">
    {
        <button className='text-white font-bold bg-secondary py-2 px-6 rounded-xl cursor-pointer' type="submit" onClick={() => {
        setShowAll(prv => !prv);
        if(showAll){
            window.scrollTo(0, 600);
          }
        }}>
            {
                showAll ? "Show Less" : "Show All"
            }
        </button>
    }
  </div>
</div>
</div>
  );
};

export default Subscriptions;

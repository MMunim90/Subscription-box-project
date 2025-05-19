import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/header";
import Faq from "../Pages/Faq";
import { Helmet } from "react-helmet-async";
import SubscriptionCounter from "../Pages/SubscriptionCounter";
import Subscriptions from "../Components/Subscriptions";
import { useLoaderData } from "react-router";

const HomeLayouts = () => {
  const data = useLoaderData();
    //, setLawyers
  const [subscriptions] = useState(data)
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>SNB | Home</title>
      </Helmet>
      <header>
        <Header></Header>
      </header>
      <main>
        <Subscriptions subscriptions={subscriptions}></Subscriptions>
        <SubscriptionCounter></SubscriptionCounter>
        <Faq></Faq>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayouts;

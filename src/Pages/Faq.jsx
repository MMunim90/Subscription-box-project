import React from "react";

const Faq = () => {
  return (
    <div className="mb-8">
    <h1 className="font-bold text-2xl mb-2 mt-8 text-secondary">Frequently Asked Questions</h1>

    <div className="collapse collapse-arrow bg-gray-400 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold bg-secondary">
        What is Subs Now Bro?
        </div>
        <div className="collapse-content text-sm">
            <br />
            Subs Now Bro is a platform where you can easily subscribe to premium services, products, or exclusive content with just a few clicks. <br /> We help you manage, upgrade, or cancel your subscriptions anytime, giving you full control and flexibility.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-400 border border-base-300">
        <input type="radio" name="my-accordion-2"/>
        <div className="collapse-title font-semibold bg-secondary">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
            <br />
          Click the "Login" button in the top right corner then you see (Don't have an account? Register) click Register. <br /> Then You redirect the Register page. where you can create new account by email or google.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-400 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold bg-secondary">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
            <br />
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-400 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold bg-secondary">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
            <br />
          Go to Profile Page and give your information on the update profile form, <br /> click "Update Profile" button, and boom! you update your profile successfully.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-gray-400 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold bg-secondary">
        Is my payment information safe?
        </div>
        <div className="collapse-content text-sm">
            <br />
            Yes! At Subs Now Bro, we use secure, industry-standard encryption to protect your payment information. <br /> We do not store sensitive card data on our servers, and all transactions are processed securely through trusted payment gateways.
        </div>
      </div>
    </div>
  );
};

export default Faq;

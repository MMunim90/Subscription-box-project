import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="rounded">
      <footer className="footer sm:footer-horizontal bg-gray-400 text-base-content py-6 px-10 rounded-t-2xl">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
      <footer className="footer bg-gray-400 text-base-content border-base-300 border-t px-10 py-4">
        <div className="flex flex-col md:flex-row  gap-10 md:items-center w-full md:justify-between">
          <div className="flex gap-6 items-center">
            <img
              className="w-15 h-15 rounded-2xl"
              src="https://i.ibb.co.com/CK69Q7Bn/Subscription-Box.jpg"
              alt=""
            />
            <p>
              <span className="font-bold text-2xl text-secondary">Sub's Now Bro!</span>
              <br />
              Providing Subscription packages since 2022
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/19gE19gM8h/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaFacebook size={30} />
            </a>

            <a
              href="https://x.com/__munim__"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter size={30} />
            </a>

            <a
              href="https://www.instagram.com/_mmunim_"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

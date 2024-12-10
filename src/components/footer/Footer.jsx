import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 md:py-8">
          <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8 md:mb-0">
            <div className="flex items-center space-x-4 mb-4 justify-center">
              <Logo/>
            </div>
            
          </div>
          
          <div className="w-full mb-8 md:w-2/12 px-4 md:mb-0">
            <h3 className="tracking-px mb-4 text-sm font-semibold uppercase text-gray-300">
              Company
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-8 md:w-2/12 px-4 md:mb-0">
            <h3 className="tracking-px mb-4 text-sm font-semibold uppercase text-gray-300">
              Support
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-8 md:w-2/12 px-4 md:mb-0">
            <h3 className="tracking-px mb-4 text-sm font-semibold uppercase text-gray-300">
              Legals
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-white hover:text-gray-300"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-300">
            Made by{" "}
            <i>
              <b>void57</b>
            </i>
            🔥
          </p>
          <p className="text-xs mt-2 text-gray-300">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

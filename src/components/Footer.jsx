import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-screen-2xl container mx-auto  md:px-20">
        <div className="flex flex-col items-center justify-center">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-8">
            <a
              href="https://facebook.com"
              className="transition-all duration-300 ease-in-out hover:scale-125 hover:text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://github.com/Sankhajit3"
              className="transition-all duration-300 ease-in-out hover:scale-125 hover:text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://instagram.com"
              className="transition-all duration-300 ease-in-out hover:scale-125 hover:text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/sankhajit-das-ab8350248/"
              className="transition-all duration-300 ease-in-out hover:scale-125 hover:text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>

          {/* Footer Text */}
          <div className="mt-8 border-t border-gray-300 pt-5 flex flex-col items-center">
            <p className="text-sm text-gray-600 text-center dark:text-gray-300">
              &copy; 2025 Your Company. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

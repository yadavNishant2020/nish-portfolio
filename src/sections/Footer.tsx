import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#111111] text-gray-400 py-6 -mx-4 sm:-mx-8 lg:-mx-12"
      id="footer"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://www.facebook.com/sidd.yadav.73"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-xl"
            aria-label="Facebook"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://twitter.com/NishantSinghY15"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/nish_codes_/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-singh-yadav-9112ab1bb/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-600 text-sm text-center">
          &copy; 2025 Created By Nishant Singh Yadav.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

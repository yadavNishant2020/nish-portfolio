import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-gray-400  py-4 flex justify-center items-center" id="footer">
      <div className="mx-auto ">
        <div className="flex justify-center md:flex-row flex-col-reverse">
          <div className="text-center md:text-left md:mb-0 flex flex-col items-center">
            <div className="mb-4 flex">
              <a href="https://www.facebook.com/sidd.yadav.73" target="_blank" rel="noreferrer" className="text-gray-400 mr-4 hover:text-gray-200">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com/NishantSinghY15" target="_blank" rel="noreferrer" className="text-gray-400 mr-4 hover:text-gray-200">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/nsy_codes?utm_medium=copy_link" target="_blank" rel="noreferrer" className="text-gray-400 mr-4 hover:text-gray-200">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/nishant-singh-yadav-9112ab1bb/" target="_blank" rel="noreferrer" className="text-gray-400 mr-4 hover:text-gray-200">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-600">&copy; 2024 Created By Nishant Singh Yadav.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

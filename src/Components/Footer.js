import React, { useContext } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MyContext } from "../store/MyContext";

const Footer = () => {
  const { phoneNo } = useContext(MyContext);

  return (
    <footer className="bg-[#4b2e09] text-white pt-12 pb-6 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 md:flex-row md:gap-16">
        {/* Left: Logo + About */}
        <div className="flex-1 min-w-[260px] flex flex-col items-start text-center md:text-left">
          <img
            src="/logo.png"
            alt="Samaj Bhavan Logo"
            className="mb-6 w-32 sm:w-40 bg-white rounded-md p-2 mx-auto md:mx-0"
          />
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            At Saurashtra Leuva Patel Samaj Bhavan, Dwarka, we offer a peaceful
            and welcoming stay for all visitors. With well-maintained rooms,
            modern facilities, and attentive staff, we ensure every guest has a
            comfortable and memorable experience.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="bg-[#bfae94] p-3 rounded-md hover:bg-[#a86b35] transition"
            >
              <FaFacebookF className="text-[#4b2e09] w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-[#bfae94] p-3 rounded-md hover:bg-[#a86b35] transition"
            >
              <FaTwitter className="text-[#4b2e09] w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-[#bfae94] p-3 rounded-md hover:bg-[#a86b35] transition"
            >
              <FaInstagram className="text-[#4b2e09] w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Center: Links & Policies */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Our Links */}
          <div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4">Our Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4">Our Policies</h3>
            <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg">
              <li>
                <a href="#" className="hover:underline">
                  Booking Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4">
              Point Of Contact
            </h3>
            <ul className="space-y-5 text-base sm:text-lg">
              <li className="flex items-center gap-3">
                <span className="bg-white shrink-0 rounded-full h-10 w-10 flex items-center justify-center">
                  <Phone className="text-[#4b2e09] w-5 h-5" />
                </span>
                <a href={`tel:${phoneNo}`} className="hover:underline">
                  <span>{phoneNo}</span>
                </a>
              </li>
           
            {/* 
              <li className="flex items-start gap-3">
                <span className="bg-white shrink-0 rounded-full h-10 w-10 flex items-center justify-center">
                  <MapPin className="text-[#4b2e09] w-5 h-5" />
                </span>
                <span className="text-left">
                  Saurashtra Leuva Patel Samaj Bhavan,
                  <br />
                  Dwarka, Gujarat 361335
                </span>
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-8 pb-3 text-center text-sm sm:text-base border-t border-gray-600 mt-10 px-4">
        © 2024 Saurashtra Leuva Patel Samaj Bhavan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

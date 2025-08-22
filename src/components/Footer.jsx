// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e5efe6] text-[#1e3d32] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-2">Get in touch</h3>
          <p>support@amrutam.global</p>
          <p>Amrutam Pharmaceuticals Pvt Ltd,<br /> 
             chitragupt ganj, Nai Sadak, Lashkar,<br /> 
             Gwalior - 474001</p>
          <p>+91 9713171999</p>
          <div className="flex space-x-3 mt-4">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>

        {/* Info Section */}
        <div>
          <h3 className="font-semibold mb-2">Information</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Privacy Policy for Mobile Apps</a></li>
            <li><a href="#">Shipping, return and cancellation Policy</a></li>
            <li><a href="#">International Delivery</a></li>
            <li><a href="#">For Businesses, Hotels, and Resorts</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold mb-2">
            Subscribe to our Newsletter and join Amrutam Family today!
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

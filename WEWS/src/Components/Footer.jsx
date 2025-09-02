import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo / Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">WORLD WOMEN EMPOWERMENT</h2>
          <p className="flex items-center gap-2">
            <Phone size={18} /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> contact@worldwomen.org
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Chennai, India
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-pink-400"><Facebook /></a>
            <a href="#" className="hover:text-pink-400"><Instagram /></a>
            <a href="#" className="hover:text-pink-400"><Twitter /></a>
            <a href="#" className="hover:text-pink-400"><Linkedin /></a>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-400">Our Mission</a></li>
            <li><a href="#" className="hover:text-pink-400">Our Vision</a></li>
            <li><a href="#" className="hover:text-pink-400">Meet our Team</a></li>
            <li><a href="#" className="hover:text-pink-400">Our Impact</a></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get Involved</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-400">Contact</a></li>
            <li><a href="#" className="hover:text-pink-400">News & Events</a></li>
            <li><a href="#" className="hover:text-pink-400">Join Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe to get updates on events and initiatives.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 bg-gray-600 rounded-lg text-gray-900 w-full"
            />
            <button className="bg-[#210133] hover:bg-pink-900 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} World Women Empowerment. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

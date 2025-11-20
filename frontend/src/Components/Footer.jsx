import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Icon for a nice touch

export default function Footer() {
  return (
    // Footer uses the primaryBlue background and sits at the bottom
    <footer className="w-full bg-primaryBlue text-white mt-12 pt-8 pb-4 shadow-inner">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Links/Sections */}
        <div className="flex flex-col md:flex-row justify-between border-b border-primaryOrange/50 pb-6 mb-4 space-y-4 md:space-y-0">
          
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold text-primaryOrange mb-2">About Janseva</h4>
            <p className="text-sm max-w-xs text-gray-200">
              The official portal to report and track local civic issues, ensuring
              transparency and accountability in governance.
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-bold text-primaryOrange mb-2">Contact Us</h4>
            <ul className="text-sm space-y-1">
              <li>Email: support@jansevaportal.gov.in</li>
              <li>Phone: +91 000 123 4567</li>
              <li>Address: New Delhi, India</li>
            </ul>
          </div>
          
        </div>

        {/* Copyright and Prepared By section */}
        <div className="text-center text-sm pt-2 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Janseva Portal. All Rights Reserved.</p>
          <p className="mt-1 flex items-center justify-center space-x-1">
            <span>Prepared with</span> 
            <FaHeart className="text-red-500 mx-1" /> 
            <span>by **Maniraj Tiwari**</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
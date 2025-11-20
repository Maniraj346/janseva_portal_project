import React from "react";
import { Link, useNavigate } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#FF9D00] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full flex items-center justify-between px-6 py-3">
        {/* Left: Gov Logo */}
        <div className="flex items-center">
          <img
            src="/images/gov-logo.png"
            alt="Gov Logo"
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Center: Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-lg md:text-xl font-bold text-white">
            Jan Seva Portal
          </h1>
        </div>

        {/* Right: Page Links + Translation Dropdown */}
        <div className="flex items-center gap-20 text-sm md:text-base font-medium tracking-wide">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>

          {!isLoggedIn && (
            <>
              <Link to="/login-citizen" className="hover:text-yellow-400 transition-colors">Citizen Login</Link>
              <Link to="/login-admin" className="hover:text-yellow-400 transition-colors">Admin Login</Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <Link to="/report" className="hover:text-yellow-400 transition-colors">Report Issues</Link>
              <Link to="/view-issues" className="hover:text-yellow-400 transition-colors">View Issues</Link>
              <Link to="/profile" className="hover:text-yellow-400 transition-colors">Profile</Link>
              <button onClick={handleLogout} className="hover:text-yellow-400 transition-colors">Logout</button>
            </>
          )}

          <select
            onChange={handleLanguageChange}
            className="bg-[#F9F8F6] border border-white text-white text-xs px-2 py-1 rounded focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="hi">हि</option>
            <option value="mr">म</option>
            <option value="ta">த</option>
            <option value="bn">ব</option>
            <option value="gu">ગુ</option>
            <option value="te">తె</option>
            <option value="kn">ಕ</option>
            <option value="ml">മ</option>
            <option value="pa">ਪ</option>
            <option value="ur">اُ</option>
          </select>
        </div>
      </div>
      <div className="h-16"></div>
    </nav>
  );
}
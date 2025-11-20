import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CitizenLoginPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (captcha !== "1234") return setError("Invalid CAPTCHA");

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
        phone,
        role: "citizen",
      });
      localStorage.setItem("authToken", res.data.token);
      navigate("/report");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-[#0A3D91]">Citizen Login</h2>

        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input type="email" placeholder="Enter your email"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" placeholder="Enter your phone number"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
        <div className="relative mb-3">
          <input type={showPassword ? "text" : "password"} placeholder="Enter your password"
            className="w-full px-3 py-2 pr-16 border rounded"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-blue-600 focus:outline-none">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <label className="block mb-1 text-sm font-medium text-gray-700">CAPTCHA</label>
        <input type="text" placeholder="Enter CAPTCHA: 1234"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={captcha} onChange={(e) => setCaptcha(e.target.value)} required />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button type="submit" className="w-full bg-[#FF9D00] text-white py-2 rounded hover:bg-[#e68a00]">
          Secure Login
        </button>

        <p className="mt-4 text-sm text-center">
          New user? <Link to="/register-citizen" className="text-blue-600 hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
}
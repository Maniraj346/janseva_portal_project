import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CitizenLoginPage from "./pages/CitizenLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import ReportPage from "./pages/ReportPage";
import ViewIssuesPage from "./pages/ViewIssuesPage";
import Profile from "./pages/Profile";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-citizen" element={<CitizenLoginPage />} />
        <Route path="/login-admin" element={<AdminLoginPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/view-issues" element={<ViewIssuesPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans text-darkText bg-neutralBg">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
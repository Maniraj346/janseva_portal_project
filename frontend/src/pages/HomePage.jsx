import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FileText,
  UserPlus,
  LogIn,
  MapPin,
  Shield,
  CheckCircle,
  Users,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Clock,
  Eye,
  Award,
  Zap,
  Globe,
  Headphones,
  ChevronRight,
  Star,
  TrendingUp,
  Lock,
  Bell,
  Sparkles,
  Target,
  Heart,
  ThumbsUp,
  MessageSquare,
  Camera,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Timer,
  BadgeCheck,
  Rocket,
  Gift,
  Crown,
  PlayCircle,
  Megaphone,
  Handshake,
  Home,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function HomePage() {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // Workflow steps
  const workflowSteps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Create Account",
      description: "Register with Aadhaar verification and residential proof for secure identity.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgPattern: "bg-gradient-to-br from-violet-50 to-purple-100",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
      borderColor: "border-violet-200",
      number: "01",
    },
    {
      step: 2,
      icon: Lock,
      title: "Secure Login",
      description: "Access your personal dashboard with encrypted credentials.",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-cyan-50 to-teal-100",
      iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
      borderColor: "border-teal-200",
      number: "02",
    },
    {
      step: 3,
      icon: Camera,
      title: "Report Issue",
      description: "Submit issues with photos and automatic GPS location capture.",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-amber-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
      borderColor: "border-orange-200",
      number: "03",
    },
    {
      step: 4,
      icon: Rocket,
      title: "Swift Action",
      description: "Government bodies receive and resolve your complaints quickly.",
      gradient: "from-rose-500 via-pink-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-rose-50 to-pink-100",
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
      borderColor: "border-rose-200",
      number: "04",
    },
  ];

  // Features
  const features = [
    {
      icon: Shield,
      title: "Aadhaar Verified",
      description: "Bank-grade identity verification ensures only genuine complaints reach authorities.",
      gradient: "from-indigo-600 to-violet-600",
      bgGradient: "from-indigo-100 via-violet-50 to-purple-100",
    },
    {
      icon: Navigation,
      title: "Live GPS Tracking",
      description: "Precise location capture pinpoints issues to exact coordinates for faster resolution.",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-100 via-teal-50 to-cyan-100",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Real-time email and SMS notifications keep you updated on every status change.",
      gradient: "from-amber-600 to-orange-600",
      bgGradient: "from-amber-100 via-orange-50 to-yellow-100",
    },
    {
      icon: Eye,
      title: "Live Tracking",
      description: "Monitor your complaint journey from submission to resolution with full transparency.",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-100 via-blue-50 to-indigo-100",
    },
    {
      icon: Timer,
      title: "24hr Response",
      description: "Guaranteed first response within 24 hours of submission for urgent issues.",
      gradient: "from-rose-600 to-pink-600",
      bgGradient: "from-rose-100 via-pink-50 to-fuchsia-100",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock helpline and email support for all your queries and assistance.",
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-100 via-indigo-50 to-violet-100",
    },
  ];

  // Statistics
  const stats = [
    {
      number: "1,50,000+",
      label: "Registered Citizens",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      number: "98,500+",
      label: "Issues Resolved",
      icon: CheckCircle2,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      number: "99.2%",
      label: "Satisfaction Rate",
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
    },
    {
      number: "< 12hrs",
      label: "Avg Response",
      icon: Zap,
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  // Issue categories
  const issueCategories = [
    { name: "Roads", icon: "🛣️", bg: "bg-slate-100" },
    { name: "Water", icon: "💧", bg: "bg-blue-100" },
    { name: "Power", icon: "⚡", bg: "bg-yellow-100" },
    { name: "Sanitation", icon: "🧹", bg: "bg-green-100" },
    { name: "Lights", icon: "💡", bg: "bg-orange-100" },
    { name: "Safety", icon: "🛡️", bg: "bg-indigo-100" },
    { name: "Drainage", icon: "🚰", bg: "bg-teal-100" },
    { name: "Others", icon: "📋", bg: "bg-pink-100" },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      message: "Got my street light fixed within 48 hours! The tracking feature kept me informed throughout. Amazing service!",
      rating: 5,
      avatar: "👨‍💼",
      role: "Business Owner",
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      message: "The water supply issue in our area was resolved quickly. Jan Seva Portal truly empowers citizens!",
      rating: 5,
      avatar: "👩‍💻",
      role: "IT Professional",
    },
    {
      name: "Amit Patel",
      location: "Gujarat",
      message: "Very easy to use portal. Reported a pothole and it was fixed in just 3 days. Highly recommended!",
      rating: 5,
      avatar: "👨‍🔧",
      role: "Engineer",
    },
  ];

  // Community benefits
  const communityBenefits = [
    {
      icon: Megaphone,
      title: "Empower Citizens",
      description: "Raise your voice without barriers and make your community heard.",
      gradient: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-100",
    },
    {
      icon: Eye,
      title: "Ensure Accountability",
      description: "Visible and trackable complaints ensure government accountability.",
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Zap,
      title: "Speed Up Resolutions",
      description: "Direct digital reporting accelerates issue resolution times.",
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-100",
    },
    {
      icon: Users,
      title: "Promote Inclusivity",
      description: "Accessible design ensures everyone can participate.",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-100",
    },
    {
      icon: Handshake,
      title: "Build Trust",
      description: "Strengthen bonds between communities and local governance.",
      gradient: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-100",
    },
    {
      icon: Home,
      title: "Better Neighborhoods",
      description: "Create cleaner, safer, and more efficient communities.",
      gradient: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-100",
    },
  ];

  // Recent issues
  const recentIssues = [
    { id: "JSP-2024-001234", type: "Road Repair", status: "Resolved", area: "Sector 15, Delhi" },
    { id: "JSP-2024-001235", type: "Street Light", status: "In Progress", area: "MG Road, Bangalore" },
    { id: "JSP-2024-001236", type: "Water Supply", status: "Resolved", area: "Andheri, Mumbai" },
    { id: "JSP-2024-001237", type: "Drainage", status: "Assigned", area: "Salt Lake, Kolkata" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800"></div>

          {/* Animated Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-40"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-3xl opacity-40"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl opacity-30"
          ></motion.div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            ></motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <motion.div
                className="inline-flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 text-white px-6 py-3 rounded-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="text-yellow-400" size={22} />
                </motion.div>
                <span className="font-semibold text-lg">Official Government Citizen Portal</span>
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-emerald-400 rounded-full"
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8"
            >
              <span className="text-white drop-shadow-2xl">Jan Seva</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                Portal
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl text-white text-opacity-90 max-w-4xl mx-auto mb-6 leading-relaxed font-light"
            >
              Empowering <span className="text-cyan-300 font-bold">Citizens</span> •
              Connecting <span className="text-pink-300 font-bold">Communities</span> •
              Building <span className="text-amber-300 font-bold">Better India</span>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white text-opacity-70 max-w-2xl mx-auto mb-10"
            >
              Report local civic issues directly to government authorities and track resolution in real-time
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
            >
              {[
                { icon: Shield, text: "Aadhaar Verified", color: "text-emerald-400" },
                { icon: Lock, text: "256-bit Encrypted", color: "text-cyan-400" },
                { icon: Zap, text: "Instant Resolution", color: "text-amber-400" },
                { icon: BadgeCheck, text: "Govt. Certified", color: "text-pink-400" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10 px-4 py-2.5 rounded-full"
                >
                  <item.icon className={item.color} size={18} />
                  <span className="text-white text-opacity-90 text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            >
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <UserPlus size={24} />
                    Register Now
                    <ArrowRight size={22} />
                  </span>
                </motion.button>
              </Link>

              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white bg-opacity-15 backdrop-blur-xl border-2 border-white border-opacity-30 text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 shadow-xl"
                >
                  <LogIn size={24} />
                  Sign In
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-2xl p-5 text-center shadow-xl"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg`}>
                    <stat.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.number}</h3>
                  <p className="text-white text-opacity-70 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-14 border-2 border-white border-opacity-40 rounded-full flex justify-center pt-3"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== LIVE TICKER ===== */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-4 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-white bg-opacity-20 backdrop-blur-sm px-5 py-2.5 rounded-r-full flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-3 h-3 bg-emerald-400 rounded-full"
            ></motion.div>
            <span className="text-white font-bold text-sm tracking-wide">LIVE UPDATES</span>
          </div>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap"
          >
            {[...recentIssues, ...recentIssues].map((issue, index) => (
              <div key={index} className="flex items-center gap-3 text-white text-opacity-90">
                <span className="font-mono text-sm bg-white bg-opacity-20 px-3 py-1.5 rounded-lg">{issue.id}</span>
                <span className="font-semibold">{issue.type}</span>
                <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                  issue.status === "Resolved" ? "bg-emerald-500" :
                  issue.status === "In Progress" ? "bg-amber-500" : "bg-blue-500"
                }`}>
                  {issue.status}
                </span>
                <span className="text-white text-opacity-60 text-sm">{issue.area}</span>
                <span className="text-white text-opacity-30 text-2xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== COMMUNITY ENGAGEMENT ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-6 py-2.5 rounded-full text-sm font-bold mb-6 border border-violet-200 shadow-lg">
              <Handshake size={18} />
              Community Engagement
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-6">
              Building <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Stronger</span> Communities
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Community engagement is the art of creating <span className="text-violet-600 font-semibold">partnership</span> between <span className="text-indigo-600 font-semibold">citizens</span> and <span className="text-purple-600 font-semibold">governance</span>.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {communityBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-violet-200 overflow-hidden"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center`}>
                    <benefit.icon className="text-white" size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-violet-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Checkmark */}
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-emerald-500" size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl"
                    >
                      <Target className="text-white" size={48} />
                    </motion.div>
                  </div>

                  <div className="flex-grow text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4">
                      Our Aim & Community Benefits
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      The <span className="font-bold text-indigo-600">Janseva Portal</span> bridges the gap between citizens and authorities.
                      Our mission is to <span className="font-bold text-purple-600">empower communities</span> and ensure
                      <span className="font-bold text-pink-600"> accountability in governance</span> through a transparent and accessible platform.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      {["Transparent", "Accountable", "Accessible", "Efficient"].map((tag, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold border border-indigo-200"
                        >
                          ✓ {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={slideInLeft}>
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-indigo-200 shadow-md">
                  <Target size={18} />
                  About The Portal
                </span>
              </motion.div>

              <motion.h2
                variants={slideInLeft}
                className="text-4xl sm:text-5xl font-black text-slate-800 mb-6 leading-tight"
              >
                Bridging <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Citizens</span> &{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Government</span>
              </motion.h2>

              <motion.p variants={slideInLeft} className="text-lg text-slate-600 leading-relaxed mb-6">
                <strong className="text-slate-800">Jan Seva Portal</strong> is India's most trusted
                digital platform connecting citizens directly with government authorities. Report
                civic issues like road damage, water supply problems, sanitation, and more.
              </motion.p>

              {/* Feature Pills */}
              <motion.div variants={slideInLeft} className="flex flex-wrap gap-3 mb-8">
                {[
                  { text: "100% Free", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                  { text: "No Hidden Charges", color: "bg-blue-100 text-blue-700 border-blue-200" },
                  { text: "Government Backed", color: "bg-purple-100 text-purple-700 border-purple-200" },
                  { text: "Secure Platform", color: "bg-rose-100 text-rose-700 border-rose-200" },
                ].map((pill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className={`${pill.color} px-4 py-2 rounded-full text-sm font-bold border shadow-md cursor-pointer`}
                  >
                    {pill.text}
                  </motion.span>
                ))}
              </motion.div>

              {/* Key Points */}
              <motion.div variants={slideInLeft} className="space-y-4">
                {[
                  { icon: Shield, text: "Aadhaar-based identity verification", gradient: "from-indigo-500 to-purple-600" },
                  { icon: MapPin, text: "GPS location tagging for accuracy", gradient: "from-emerald-500 to-teal-600" },
                  { icon: Bell, text: "Instant email & SMS notifications", gradient: "from-amber-500 to-orange-600" },
                  { icon: Eye, text: "Real-time status tracking dashboard", gradient: "from-rose-500 to-pink-600" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all`}>
                      <item.icon className="text-white" size={22} />
                    </div>
                    <p className="text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Categories Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <Sparkles className="text-amber-300" size={32} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold">Report Any Issue</h3>
                      <p className="text-white text-opacity-70">8+ Categories Available</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 mb-8">
                    {issueCategories.map((cat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={`${cat.bg} rounded-2xl p-4 text-center cursor-pointer transition-all shadow-lg`}
                      >
                        <span className="text-3xl block mb-1">{cat.icon}</span>
                        <p className="text-xs font-bold text-slate-700 leading-tight">{cat.name}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white border-opacity-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-opacity-60 text-sm">Total Issues Resolved</p>
                        <p className="text-4xl font-black">98,547</p>
                      </div>
                      <div className="w-16 h-16 bg-emerald-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <CheckCircle2 className="text-white" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                    <p className="text-2xl font-black text-slate-800">99.2%</p>
                    <div className="w-28 bg-slate-100 rounded-full h-2 mt-1.5">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Crown Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 shadow-xl rotate-12"
              >
                <Crown className="text-white" size={32} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-6 py-2.5 rounded-full text-sm font-bold mb-6 border border-amber-200 shadow-lg">
              <PlayCircle size={18} />
              Easy Process
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-4">
              How It <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Four simple steps to get your civic issues resolved quickly and efficiently
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`${item.bgPattern} rounded-3xl p-8 border-2 ${item.borderColor} hover:shadow-2xl transition-all h-full`}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-5 left-6 bg-gradient-to-r ${item.gradient} text-white px-5 py-2.5 rounded-xl font-black text-lg shadow-lg`}>
                    {item.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`${item.iconBg} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-xl mt-4`}
                  >
                    <item.icon className="text-white" size={36} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        <ChevronRight className="text-white" size={22} />
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 px-6 py-2.5 rounded-full text-sm font-bold mb-6 border border-indigo-200 shadow-lg">
              <Gift size={18} />
              Premium Features
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Jan Seva</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built with cutting-edge technology for seamless citizen experience
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 border-2 border-transparent hover:border-white transition-all overflow-hidden h-full shadow-lg hover:shadow-2xl`}
                >
                  {/* Hover Background */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} transition-opacity rounded-3xl`}
                  ></motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                    >
                      <feature.icon className="text-white" size={30} />
                    </motion.div>

                    <h3 className={`text-2xl font-bold mb-3 transition-colors ${hoveredFeature === index ? "text-white" : "text-slate-800"}`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors ${hoveredFeature === index ? "text-white text-opacity-90" : "text-slate-600"}`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 bg-opacity-20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 bg-opacity-20 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm text-amber-400 px-6 py-2.5 rounded-full text-sm font-bold mb-6 border border-white border-opacity-10 shadow-lg">
              <MessageSquare size={18} />
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              What Citizens <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-white text-opacity-60">Real feedback from real users across India</p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-10 sm:p-12 max-w-3xl mx-auto shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-7xl mb-6"
                  >
                    {testimonials[currentTestimonial].avatar}
                  </motion.div>

                  {/* Stars */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="text-amber-400 fill-amber-400" size={28} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-2xl sm:text-3xl text-white font-medium mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].message}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="text-white font-bold text-xl">{testimonials[currentTestimonial].name}</p>
                    <p className="text-white text-opacity-60">{testimonials[currentTestimonial].role}</p>
                    <p className="text-amber-400 text-sm font-medium">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 w-10 shadow-lg"
                      : "bg-white bg-opacity-30 hover:bg-opacity-50 w-3"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="pointer-events-auto w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-colors -ml-6 lg:-ml-16"
              >
                <ChevronRight className="rotate-180" size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="pointer-events-auto w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-colors -mr-6 lg:-mr-16"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 sm:p-16 lg:p-20 text-center overflow-hidden shadow-2xl">
              {/* Background Shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-40 -right-40 w-80 h-80 border-8 border-white border-opacity-10 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-40 -left-40 w-80 h-80 border-8 border-white border-opacity-10 rounded-full"
              ></motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-28 h-28 bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl mb-10 shadow-2xl"
                >
                  <Rocket className="text-white" size={56} />
                </motion.div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                  Ready to Make a <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Difference?</span>
                </h3>
                <p className="text-xl sm:text-2xl text-white text-opacity-80 mb-12 max-w-3xl mx-auto">
                  Join lakhs of citizens building better communities through transparent and accountable governance
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link to="/register">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-white text-indigo-700 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:bg-amber-400 hover:text-slate-900 transition-all flex items-center justify-center gap-3"
                    >
                      <UserPlus size={26} />
                      Create Free Account
                      <ArrowRight size={22} />
                    </motion.button>
                  </Link>
                  <Link to="/issue-status">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-30 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:border-opacity-50 transition-all flex items-center justify-center gap-3"
                    >
                      <Eye size={26} />
                      View All Issues
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Building2 className="text-white" size={32} />
                </motion.div>
                <div>
                  <h4 className="text-2xl font-black">Jan Seva Portal</h4>
                  <p className="text-slate-400 text-sm">Government Citizen Portal</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                India's most trusted digital platform for reporting civic issues directly to government
                authorities. Built for citizens, by the government.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { Icon: Globe, gradient: "from-blue-500 to-cyan-500" },
                  { Icon: Facebook, gradient: "from-blue-600 to-indigo-600" },
                  { Icon: Twitter, gradient: "from-sky-400 to-blue-500" },
                  { Icon: Instagram, gradient: "from-pink-500 to-rose-500" },
                  { Icon: Youtube, gradient: "from-red-500 to-rose-600" },
                ].map(({ Icon, gradient }, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
                <ChevronRight className="text-amber-400" size={20} />
                Quick Links
              </h5>
              <ul className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Register", path: "/register" },
                  { name: "Login", path: "/login" },
                  { name: "Report Issue", path: "/report" },
                  { name: "Track Status", path: "/view-issues" },
                  { name: "Issue Status", path: "/issue-status" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Headphones className="text-amber-400" size={20} />
                Contact Us
              </h5>
              <ul className="space-y-4">
                {[
                  { icon: Phone, label: "Helpline", value: "1800-XXX-XXXX", gradient: "from-emerald-500 to-teal-500" },
                  { icon: Mail, label: "Email", value: "support@janseva.gov.in", gradient: "from-blue-500 to-indigo-500" },
                  { icon: Clock, label: "Support", value: "24/7 Available", gradient: "from-amber-500 to-orange-500" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className={`w-11 h-11 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2025 Jan Seva Portal. All rights reserved. Government of India Initiative.
              </p>
              <div className="flex gap-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Accessibility", "Sitemap"].map((link, index) => (
                  <a key={index} href="#" className="text-slate-500 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
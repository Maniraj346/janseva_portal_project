import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex flex-col items-center text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl px-6 flex flex-col items-center gap-6 mt-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0A3D91] drop-shadow-lg">
          {t("homeTitle")}
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
          {t("homeSubtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          <Link
            to="/report"
            className="bg-[#ff6600] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#e65c00] transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
          >
            {t("registerComplaint")}
          </Link>
          <Link
            to="/view-issues"
            className="border-2 border-[#0056b3] text-[#000000] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#0056b3] hover:text-white transition-all shadow-lg"
          >
            {t("viewIssuesStatus")}
          </Link>
        </div>
      </motion.div>

      {/* Community Engagement Section */}
      <div className="mt-16 flex flex-col items-center gap-4 px-6 w-full">
        <h3 className="text-2xl font-bold text-[#0A3D91]">
          {t("communityTitle")}
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl text-center">
          {t("communityText")}
        </p>
      </div>

      {/* About / Aim Section */}
      <section className="mt-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-[#0056b3] mb-8 text-center border-b-2 border-orange-400 pb-2">
          {t("aimTitle")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          {t("aimText")}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {t("benefits", { returnObjects: true }).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-800 font-medium">✅ {benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div> // ✅ Only one root <div>, properly closed here.
  );
}

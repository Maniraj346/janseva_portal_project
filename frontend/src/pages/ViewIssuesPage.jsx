import React from "react";
import { motion } from "framer-motion";

export default function ViewIssuesPage() {
  const issues = [
    {
      id: 1,
      title: "Garbage not collected",
      category: "Sanitation",
      description: "Garbage pile-up in Block A, Sector 4. Overflowing bins.",
      status: "In Progress",
      color: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Streetlight not working",
      category: "Electricity",
      description: "Main road light near park is off for 3 days. Safety concern.",
      status: "Resolved",
      color: "bg-green-600",
    },
    {
      id: 3,
      title: "Water pipeline leakage",
      category: "Water Supply",
      description: "Major leak detected near the main market square. Wasting water.",
      status: "Submitted",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 flex flex-col items-center px-6">
      <h2 className="text-4xl font-extrabold text-[#0056b3] mb-10 border-b-4 border-orange-400 pb-2">
        Track Reported Issues
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {issues.map((issue, i) => (
          <motion.div
            key={issue.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[#0A3D91]">
                {issue.title}
                </h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${issue.color}`}>
                    {issue.status}
                </span>
            </div>
            
            <span className="inline-block bg-[#ff6600] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              {issue.category}
            </span>
            <p className="text-gray-700 leading-relaxed mt-2">{issue.description}</p>
            
            <button className="text-[#0056b3] font-semibold text-sm mt-4 hover:underline">
                View Details →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
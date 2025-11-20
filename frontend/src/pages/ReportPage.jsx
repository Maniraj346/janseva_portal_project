import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

export default function ReportPage() {
  const [issue, setIssue] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice recognition not supported in this browser. Try Chrome.");
      return;
    }
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setIssue((prev) => (prev ? prev + " " + transcript : transcript));
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    setListening(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- Add your actual submission logic here ---
    alert(`Issue submitted: ${issue.substring(0, 50)}...`);
    setIssue(""); // Clear the form
    // ---
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center pt-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-card p-10 w-full max-w-2xl border border-gray-100"
      >
        <h2 className="text-3xl font-extrabold text-[#0056b3] mb-8 text-center">
          Lodge a New Complaint
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Issue Title (e.g., Water Leakage at XYZ)"
            className="border border-gray-300 rounded-xl p-4 focus:ring-4 focus:ring-[#0056b3]/30 focus:border-[#0056b3] focus:outline-none transition-all"
            required
          />

          <textarea
            placeholder="Describe your issue in detail (location, time, severity...)"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="border border-gray-300 rounded-xl p-4 h-40 focus:ring-4 focus:ring-[#0056b3]/30 focus:border-[#0056b3] focus:outline-none transition-all resize-none"
            required
          />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="block">
              <span className="sr-only">Choose file</span>
              <input type="file" className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#0056b3]/10 file:text-[#0056b3]
                hover:file:bg-[#0056b3]/20
              " />
            </label>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={listening ? stopListening : startListening}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition shadow-md ${
                listening
                  ? "bg-red-500 hover:bg-red-600 ring-4 ring-red-300"
                  : "bg-[#0A3D91] hover:bg-[#0056b3]"
              }`}
            >
              {listening ? <FaMicrophoneSlash /> : <FaMicrophone />}
              {listening ? "Stop Voice Input" : "Start Voice Input"}
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-[#ff6600] text-white py-4 rounded-xl text-lg font-bold hover:bg-[#e65c00] transition duration-300 shadow-lg mt-4"
          >
            Submit Complaint
          </motion.button>
        </form>

        {listening && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-base text-[#ff6600] mt-4 font-semibold"
          >
            🎧 Listening... Please speak clearly.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
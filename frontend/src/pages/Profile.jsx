import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("User not logged in");
      return;
    }

    axios
      .get("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile");
      });
  }, []);

  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!user) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-[#0A3D91]">Your Profile</h2>
      <div className="space-y-2 text-gray-800">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more fields if needed */}
      </div>
    </div>
  );
}
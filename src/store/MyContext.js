// src/store/MyContext.js
import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [phoneNo, setPhoneNo] = useState("+918147580197"); // fallback

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZMj2PwJThp4nIiXDyflzEEo_9hviHEQEoRpqG8EQjud0S1mmWPKuP524z08kiWTPWMec3gGp_pOh-/pub?output=csv&cacheBust=" +
      Date.now();

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.text();
      })
      .then((data) => {
        const rows = data.trim().split("\n");
        let phone = rows[0].split(",")[0].trim();

        // Remove spaces and any non-digit characters
        phone = phone.replace(/\D/g, "");

        // Remove leading 0 if present
        if (phone.startsWith("0")) {
          phone = phone.substring(1);
        }

        // Add +91
        const formattedPhone = `+91${phone}`;

        setPhoneNo(formattedPhone);
      })
      .catch((err) => {
        console.error("Error fetching phone:", err);
      });
  }, []);

  return (
    <MyContext.Provider value={{ phoneNo }}>
      {children}
    </MyContext.Provider>
  );
};

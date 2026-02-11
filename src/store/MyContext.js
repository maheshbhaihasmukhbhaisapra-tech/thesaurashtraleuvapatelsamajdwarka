// src/store/MyContext.js
import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [phoneNo, setPhoneNo] = useState("+918147580197"); // fallback default

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZMj2PwJThp4nIiXDyflzEEo_9hviHEQEoRpqG8EQjud0S1mmWPKuP524z08kiWTPWMec3gGp_pOh-/pub?output=csv&cacheBust=" +
      Date.now();

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })
      .then((data) => {
        // Split CSV rows
        const rows = data.trim().split("\n");

        // First cell (A1)
        const phone = rows[0].split(",")[0].trim();

        if (phone) {
          setPhoneNo(phone);
        }
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

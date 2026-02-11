// src/store/MyContext.js
import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZMj2PwJThp4nIiXDyflzEEo_9hviHEQEoRpqG8EQjud0S1mmWPKuP524z08kiWTPWMec3gGp_pOh-/gviz/tq?tqx=out:json";

    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const json = JSON.parse(
          data.substring(47).slice(0, -2)
        );

        const phoneNumber = json.table.rows[0].c[0].v;
        setPhoneNo(phoneNumber);
      })
      .catch((err) => {
        console.error("Error fetching phone:", err);
        setPhoneNo("+918147580197"); // fallback
      });
  }, []);

  return (
    <MyContext.Provider value={{ phoneNo }}>
      {children}
    </MyContext.Provider>
  );
};

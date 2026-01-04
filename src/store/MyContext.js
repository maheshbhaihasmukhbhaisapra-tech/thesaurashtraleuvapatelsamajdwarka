// src/store/MyContext.js
import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [phoneNo, setPhoneNo] = useState("+918210190550");
  return (
    <MyContext.Provider value={{ phoneNo }}>{children}</MyContext.Provider>
  );
};

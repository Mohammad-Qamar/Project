// AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  // Function to set the username when the user logs in
  const login = (username) => {
    setUsername(username);
  };

  // Function to clear the username when the user logs out
  const logout = () => {
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

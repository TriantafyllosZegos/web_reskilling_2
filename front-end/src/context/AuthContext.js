import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => Cookies.get("token") || "");

  const login = (newToken) => {
    try {
      Cookies.set("token", newToken, { expires: 1 });
      setToken(newToken);
      console.log("Logged in successfully");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setToken("");
  };

  
  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken && storedToken !== token) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user);
    if (sessionStorage.getItem("username")) {
      setUser({
        username: sessionStorage.getItem("username"),
        role: "councillor",
      });
    }
  }, []);

  const login = (username, role) => {
    setUser({ username, role });
    sessionStorage.setItem("username", username);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

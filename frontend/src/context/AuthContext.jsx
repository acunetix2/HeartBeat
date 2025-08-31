import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (username, password) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  const signup = async (username, password) => {
    await axios.post("http://localhost:5000/api/auth/signup", { username, password });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
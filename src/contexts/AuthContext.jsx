import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest, logoutRequest } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [errors, setErrors] = useState([]);
  // const [loading, setLoading] = useState(true);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data.payload);
      localStorage.setItem("user", JSON.stringify(res.data.payload));
      return res.data.payload;
    } catch (error) {
      setErrors(error.response.data);
      return error.response.data;
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data.payload);
      localStorage.setItem("user", JSON.stringify(res.data.payload));
      return res.data.payload;
    } catch (error) {
      setErrors(error.response.data);
      return error.response.data;
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      setErrors(error.response.data);
      return error.response.data;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        logout,
        user,
        errors,
        // loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import * as jwt from "jsonwebtoken";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextValues);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("@keySecret:token");
    const decoded = jwt.verify(token, "your secret or key");
    const userId = decoded.id;
    localStorage.setItem("userId", userId);

    if (!token) {
      return;
    }
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      console.log(response.data);

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@keySecret:token", token);
      // navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

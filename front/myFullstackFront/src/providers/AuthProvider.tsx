import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/validator";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  toRegister: () => void;
  signUp: (data: RegisterData) => void;
  toLogin: () => void;
}

export const AuthContext = createContext({} as AuthContextValues);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("@keySecret:token");

    if (!token) {
      return;
    }
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token, id } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@keySecret:token", token);
      localStorage.setItem("@IDClient:ID", id);
      toast.success("You have successfully logged in");
      setTimeout(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred, please check the fields correctly");
    }
  };

  const signUp = async (data: RegisterData) => {
    try {
      setLoading(true);
      await api.post<RegisterData>("client", data);
      toast.success("Registration was successful");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.error("The user is already registered");
    } finally {
      setLoading(false);
    }
  };

  const toRegister = () => {
    navigate("/register");
  };
  const toLogin = () => {
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, toRegister, signUp, toLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

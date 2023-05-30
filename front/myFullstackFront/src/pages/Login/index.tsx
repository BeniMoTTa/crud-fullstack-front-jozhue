import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { StyledLogin } from "./style.ts";
import "./animation.css";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, toRegister } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <StyledLogin>
      <div className="container-login">
        <main className="wrap-login">
          <h1 className="login-form-title">
            Welcome to <span className="connectFy">ConnectFy</span>
          </h1>

          <form onSubmit={handleSubmit(signIn)} className="login-form">
            <div className="wrap-input">
              <input
                type="email"
                id="email"
                className={email !== "" ? "has-val input" : "input"}
                value={email}
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                type="password"
                id="password"
                className={password !== "" ? "has-val input" : "input"}
                value={password}
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="div-btn-login">
              <button type="submit" className="btn-login">
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center">
            <button className="go-register" onClick={() => toRegister()}>
              Create an account? <span>Click here!</span>
            </button>
          </div>
        </main>
      </div>
    </StyledLogin>
  );
};

export default Login;

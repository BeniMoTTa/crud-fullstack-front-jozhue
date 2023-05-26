import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { StyledLogin } from "./style.ts";
import "./div.css";
const Login = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
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
                className="input"
                {...register("email")}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                type="password"
                id="password"
                className="input"
                {...register("password")}
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
            <button className="go-register">
              Create an account? <span>Click here!</span>
            </button>
          </div>
        </main>
      </div>
    </StyledLogin>
  );
};

export default Login;

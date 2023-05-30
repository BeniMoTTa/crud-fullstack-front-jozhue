import { StyledRegister } from "./style";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import "./animation.css";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const { signUp, toLogin } = useAuth();
  const { register, handleSubmit, reset } = useForm<RegisterData>({
    mode: "onBlur",
    defaultValues: {
      clientPhoto: "",
      clientCity: "",
      clientName: "",
      phone: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });
  return (
    <StyledRegister>
      <div className="container-register">
        <main className="wrap-register">
          <h1 className="register-form-title">
            Take control of your <span className="contacts">contacts</span>
          </h1>

          <form className="register-form" onSubmit={handleSubmit(signUp)}>
            <div className="wrap-input">
              <input
                type="text"
                id="clientName"
                className={name !== "" ? "has-val input" : "input"}
                value={name}
                {...register("clientName")}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Name"></span>
            </div>
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
                type="tel"
                id="password"
                className={phone !== "" ? "has-val input" : "input"}
                value={phone}
                {...register("phone")}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Phone"></span>
            </div>
            <div className="wrap-input">
              <input
                type="url"
                id="photoClient"
                className={photo !== "" ? "has-val input" : "input"}
                value={photo}
                {...register("clientPhoto")}
                onChange={(e) => setPhoto(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Photo"></span>
            </div>
            <div className="wrap-select">
              <span className="focus-select">What's your gender</span>
              <select id="gender" className="select" {...register("gender")}>
                <option value={"#"} hidden>
                  Choose an option
                </option>
                <option value="No say">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="no binary">No Binary</option>
              </select>
            </div>
            <div className="wrap-input">
              <input
                type="text"
                id="city"
                className={city !== "" ? "has-val input" : "input"}
                value={city}
                {...register("clientCity")}
                onChange={(e) => setCity(e.target.value)}
              />
              <span className="focus-input" data-placeholder="City"></span>
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
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            <button className="go-login" onClick={() => toLogin()}>
              Already have an account? <span>Click here!</span>
            </button>
          </div>
        </main>
      </div>
    </StyledRegister>
  );
};

export default Register;

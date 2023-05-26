import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 0 auto;

  .container-login {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: black;
  }

  .wrap-login {
    width: 390px;
    background-color: #333;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.75);
    overflow: hidden;
    padding: 45px 35px 40px 35px;
    box-shadow: rgba(0, 0, 0, 0.56) 10px 20px 50px 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: fit-content;
  }
  .wrap-login:hover {
    border: 2px solid white;
    transition: 0.5s ease-in-out;
  }

  .login-form {
    width: 100%;
  }
  .login-form-title {
    display: block;
    font-size: 25px;
    color: azure;
    margin-bottom: 55px;
    line-height: 1.2;
    text-align: center;
    font-family: "Righteous", cursive;
  }
  @keyframes shine {
    0% {
      color: #fff;
      text-shadow: none;
    }
    50% {
      color: #fff;
      text-shadow: 0 0 10px #fff;
    }
    100% {
      color: #fff;
      text-shadow: none;
    }
  }
  .login-form-title span {
    font-size: 50px;
    font-family: "League Spartan", sans-serif;
    font-weight: bold;
    background-image: linear-gradient(to right, #d8315b 0%, #072ac8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-name: shine;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;

    .input {
      font-size: 15px;
      color: #fff;
      line-height: 1.2;
      border: none;
      display: block;
      width: 100%;
      height: 45px;
      background-color: transparent;
      padding: 0 5px;
      font-family: "Righteous", cursive;
    }
    .focus-input {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      color: #adadad;
      font-family: "Righteous", cursive;
      letter-spacing: 3px;
    }

    .focus-input::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;

      background: -webkit-linear-gradient(to left, #d8315b, #072ac8);
      background: -o-linear-gradient(to left, #d8315b, #072ac8);
      background: -moz-linear-gradient(to left, #d8315b, #072ac8);
      background: linear-gradient(to left, #d8315b, #072ac8);
    }

    .focus-input::after {
      font-size: 15px;
      color: #999;
      line-height: 1.2;

      content: attr(data-placeholder);
      display: block;
      width: 100%;
      position: absolute;
      top: 16px;
      left: 0px;
      padding-left: 5px;

      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
    }

    .input:focus {
      outline: 0;
    }

    .input:focus + .focus-input::after {
      top: -15px;
    }
    .input:focus + .focus-input::before {
      width: 100%;
    }
    .div-btn-login {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 13px;
      width: 100%;
    }
    .login-btn {
      font-size: 15px;
      border: none;
      border-radius: 10px;
      color: #fff;
      line-height: 1.2;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      background: -webkit-linear-gradient(to left, #d8315b, #072ac8);
      background: -o-linear-gradient(to left, #d8315b, #072ac8);
      background: -moz-linear-gradient(to left, #d8315b, #072ac8);
      background: linear-gradient(to left, #d8315b, #072ac8);
    }
  }
`;

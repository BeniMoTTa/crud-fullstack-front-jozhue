import styled from "styled-components";

export const StyledUpdateContact = styled.div`
  h3 {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-family: "righteous";
  }

  form {
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    input,
    select {
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: transparent;
      color: #fff;
      font-weight: 600;
    }

    button {
      margin-top: auto;
      padding: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: #0077ff;
      color: white;

      &:hover {
        cursor: pointer;
        background-color: #0066cc;
      }
    }

    .focus-select {
      font-size: 15px;
      font-family: Arial, Helvetica, sans-serif, cursive;
      letter-spacing: 3px;
    }
    .select option {
      background-color: #333;
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
        font-family: Arial, Helvetica, sans-serif, cursive;
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
        font-family: Arial, Helvetica, sans-serif, cursive;
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
      .has-val + .focus-input::after {
        top: -15px;
      }
      .has-val + .focus-input::before {
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
  }
`;

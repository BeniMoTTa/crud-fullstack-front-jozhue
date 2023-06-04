import styled from "styled-components";

export const StyledModalClientDelete = styled.div`
  h4 {
    font-size: 25px;
    font-family: "righteous";
  }
  .client {
    font-size: 3rem;
    font-family: "righteous";
  }
  div {
    display: flex;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 15px;
  }
  button {
    width: 40%;
    height: 50px;
    border-radius: 15px;
    font-size: 20px;
    font-family: "righteous";
    border: none;
  }

  .cancel {
    background-color: #d3d3d3;
    color: black;
  }
  .confirm {
    background-color: #32cd32;
    color: white;
  }
`;

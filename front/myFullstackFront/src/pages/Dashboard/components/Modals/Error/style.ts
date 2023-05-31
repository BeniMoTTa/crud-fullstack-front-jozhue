import styled from "styled-components";

export const StyledErrorModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;

  h3 {
    font-size: 35px;
    font-weight: 600;
    font-family: "Righteous";
    color: rgba(551, 53, 51, 0.7);
  }

  button {
    background: -webkit-linear-gradient(to left, #dc143c, #ff6347);
    background: -o-linear-gradient(to left, #dc143c, #ff6347);
    background: -moz-linear-gradient(to left, #dc143c, #ff6347);
    background: linear-gradient(to left, #dc143c, #ff6347);
    color: #fff;
    border-radius: 10px;
    height: 40px;
    border: none;
    font-size: 20px;
    font-family: "Righteous";
  }
  button:hover {
    transform: scale(1.1);
  }
`;

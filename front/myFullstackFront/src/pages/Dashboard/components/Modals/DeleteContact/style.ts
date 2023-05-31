import styled from "styled-components";

export const StyledModalDelete = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 1050px) {
    .h4 {
      font-family: "righteous";
      font-size: 25px;
    }
    .contact {
      font-size: 35px;
      text-decoration: underline;
    }
    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;

      > button {
        width: 40%;
        height: 50px;
        border-radius: 15px;
        font-size: 20px;
        font-family: "righteous";
        border: none;
      }

      .confirm {
        background-color: #32cd32;
        color: white;
      }
      .cancel {
        background-color: #d3d3d3;
        color: black;
      }
    }
  }

  @media (min-width: 600px) {
    h4 {
      font-size: 25px;
      font-weight: 500;
      font-family: "righteous";
      margin-bottom: 80px;
    }
  }
  @media (max-width: 599px) {
    h4 {
      font-size: 15px;
      font-weight: 500;
      font-family: "righteous";
      margin-bottom: 80px;
    }
  }
`;

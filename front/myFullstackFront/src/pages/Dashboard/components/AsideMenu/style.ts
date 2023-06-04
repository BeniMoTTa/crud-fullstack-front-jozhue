import styled from "styled-components";

export const StyledAside = styled.aside`
  display: none;

  @media (min-width: 980px) {
    min-width: 300px;
    max-width: 20%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 40px;
    padding: 40px 30px 20px 30px;
    position: sticky;
    left: 0;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    background-color: #333;
    z-index: 11;
    border-right: 2px solid black;

    .headerAside {
      img {
        margin-left: 25px;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 2px solid;
      }
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 80px;
  margin-left: 25px;

  .icons-select {
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      font-size: 20px;
      color: var(--white100);
    }
  }

  .hoverUnderLineAnimation {
    display: inline-block;
    position: relative;
    color: var(--white100);
    font-family: "Righteous", cursive;
    justify-content: center;
    align-items: center;
  }
  .hoverUnderLineAnimation:hover {
    color: var(--white100);
  }

  .hoverUnderLineAnimation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    margin-top: 10px;
    background-color: var(--white100);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hoverUnderLineAnimation:hover::after,
  .hoverUnderLineAnimation.active::after {
    transform: scaleX(1);
    margin-top: 10px;
    transform-origin: bottom left;
  }
  .upgradeNumber {
    font-size: 25px;
    transform: translateY(-60px);
    padding-left: 10px;
    color: var(--white100);
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
  }
  > h3,
  h5 {
    width: fit-content;
    color: var(--blackAll);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-3);
    font-family: var(--font-family-1);
  }
  > button {
    width: fit-content;
    color: var(--black100);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-3);
    font-family: var(--font-family-1);
  }
  .deleteClient {
    border: none;
    background-color: transparent;
    color: var(--white100);
    font-size: 15px;
    margin-top: 50px;
    font-family: "Righteous", cursive;

    span:hover {
      font-size: 20px;
      text-decoration: underline;
    }
  }
`;

export const AsideFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;

  .socialMedia {
    display: flex;
    gap: 20px;
    font-size: 15px;
    position: relative;
  }

  .socialMedia::after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100%;
    height: 2px;
    background-color: #cac8c8;
  }

  .react-icon {
    animation: spin 10s linear infinite;
    font-size: 35px;
    color: var(--white100);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-icon:hover {
    transform: scale(1.9);
    transition: transform 0.25s ease-out;
    animation: none;
  }

  .typescript {
    font-size: 30px;
    color: var(--white100);
  }
  .typescript:hover {
    transform: scale(1.9);
    transition: transform 0.25s ease-out;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .divContact {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
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
`;

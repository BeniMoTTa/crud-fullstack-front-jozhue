import styled from "styled-components";

export const StyledHeader = styled.div`
  @media (min-width: 980px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  z-index: 5;

  > div {
    background-color: var(--white100);
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-radius: 0 0 5px 5px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: none;
  }

  .allign-header {
    width: 70%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    h3 {
      font-size: 40px;
      font-weight: 400;
      font-family: "Righteous", cursive;
      color: var(--color-gray-800);
    }
  }
  > nav {
    position: absolute;
    top: 120px;
    width: 100%;
    align-items: center;
    background-color: var(--white100);
    padding: 20px;
    animation: menuIn 1s linear;
    animation-duration: 0.5s;
  }
  .header {
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      width: fit-content;
      color: var(--black100);
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-3);
      font-family: var(--font-family-1);
      list-style: none;
      display: flex;
      align-items: center;
      gap: 30px;
    }
  }
  .hoverUnderLineAnimation {
    display: inline-block;
    position: relative;
    color: black;
    font-size: 25px;
  }

  .hoverUnderLineAnimation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    top: 12px;
    left: 0;
    margin-top: 10px;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hoverUnderLineAnimation:hover::after,
  .hoverUnderLineAnimation.active::after {
    transform: scaleX(1);
    margin-top: 10px;
    transform-origin: bottom left;
  }

  @keyframes menuIn {
    from {
      transform: translateX(150px);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    .allign-header {
      width: 70%;
      img {
        width: 50px;
        height: 50px;
      }
      h3 {
        font-size: 24px;
      }
    }
  }
  .buttonDelete {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .deleteClient {
    width: 90%;
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-size: 2rem;
    font-family: "righteous";

    span:hover {
      font-size: 2.3rem;
      text-decoration: underline;
    }
  }
  .logout {
    width: fit-content;
    padding: 8px;
    font-size: 1.2rem;
    font-family: "righteous";
  }
  .logout:hover {
    transform: scale(1.1);
  }
`;

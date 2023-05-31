import styled from "styled-components";

export const StyledModals = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (max-width: 980px) {
    > div {
      background-color: var(--color-gray-900);
      padding: 20px;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
    > div:hover {
      border: 2px solid white;
      transition: 3s ease;
    }
  }
  @media (min-width: 981px) {
    > div {
      background-color: var(--color-gray-900);
      padding: 20px;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin-left: 200px;
    }
    > div:hover {
      border: 2px solid white;
      transition: 3s ease;
    }
  }
`;

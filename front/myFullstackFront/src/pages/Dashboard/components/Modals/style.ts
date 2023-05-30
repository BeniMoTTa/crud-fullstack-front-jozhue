import styled from "styled-components";

export const StyledModalCreate = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  > div {
    background-color: var(--color-gray-900);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 60%;
    height: 80%;
    margin-left: 40px;
  }
`;

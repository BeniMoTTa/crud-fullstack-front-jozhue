import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-blue-900: #0d47a1;
    --color-blue-800: #1565c0;
    --color-blue-700: #1976d2;
    --color-blue-600: #1e88e5;
    --color-blue-500: #2196f3;
    --color-blue-400: #42a5f5;
    --color-blue-300: #64b5f6;
    --color-blue-200: #90caf9;
    --color-blue-100: #bbdefb;
    --color-gray-900: #212121;
    --color-gray-800: #424242;
    --color-gray-700: #616161;
    --color-gray-600: #757575;
    --color-gray-500: #9e9e9e;
    --color-gray-400: #bdbdbd;
    --color-gray-300: #e0e0e0;
    --color-gray-200: #eeeeee;
    --color-gray-100: #f5f5f5;
    --white100: #ffffff;
    --black100: #303030;
    --blackAll: #000;
    --font-title-0: 36px;
	  --font-size-0: 32px;
	  --font-size-1: 26px;
	  --font-size-2: 22px;
	  --font-size-3: 18px;
	  --font-size-4: 16px;
	  --font-size-5: 14px;
	  --font-size-6: 12px;
	  --font-weight-1: 700;
	  --font-weight-2: 600;
	  --font-weight-3: 400;
	  --line-height: 150%;

    font-size: 60%;   
  }



  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

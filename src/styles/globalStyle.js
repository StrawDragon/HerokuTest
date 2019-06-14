import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    font-style: normal;
    overflow: hidden;
    user-select: none;
  }
  h1 {
    font-size: 64px;
  }
  p {
    margin: 0;
  }
 :focus {
     outline:none; 
 }
`;

export default GlobalStyle;

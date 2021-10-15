import { createGlobalStyle } from "styled-components";
import * as destyle from "destyle.css";
// GlobalStyle sätter styling globalt för alla dokument
// Destyle gör en reset av styling
// Läs mer här: https://nicolas-cusan.github.io/destyle.css/

const GlobalStyle = createGlobalStyle`
  ${destyle}
  body {
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;

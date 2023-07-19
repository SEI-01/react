import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
    }
    #root {
        width: 100%;
        height: 100%;
    }
    .App {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;

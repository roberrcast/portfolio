import { createGlobalStyle } from "styled-components";
import customFont from "../assets/fonts/abc-favorit-mono-book.otf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Mono';
    src: url(${customFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
}


.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

.material-symbols-outlined {
   font-family: 'Material Symbols Outlined' !important;
   font-weight: normal;
   font-style: normal;
   line-height: 1;
   letter-spacing: normal;
   text-transform: none;
   display: inline-block;
   white-space: nowrap;
   word-wrap: normal;
   direction: ltr;
   -webkit-font-smoothing: antialiased;
   
   font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
`;

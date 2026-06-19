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
`;

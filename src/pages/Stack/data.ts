import {
    html,
    css,
    js,
    ts,
    react,
    sass,
    vite,
    redux,
    styled,
    node,
    npm,
    bash,
    git,
    nvim,
    vitest,
    postman,
    gitHub,
} from "./assets";

interface StackData {
    id: string;
    image: string;
    title: string;
}

export const frontEndStack: StackData[] = [
    { id: "html", image: html, title: "HTML5" },
    { id: "css", image: css, title: "CSS3" },
    { id: "javascript", image: js, title: "JavaScript" },
    { id: "typescript", image: ts, title: "TypeScript" },
    { id: "react", image: react, title: "React" },
    { id: "sass", image: sass, title: "Sass" },
    { id: "vite", image: vite, title: "Vite" },
    { id: "redux", image: redux, title: "Redux" },
    { id: "styled", image: styled, title: "Styled" },
];

export const workflow: StackData[] = [
    { id: "node", image: node, title: "Node.js" },
    { id: "npm", image: npm, title: "Npm" },
    { id: "bash", image: bash, title: "Bash" },
    { id: "git", image: git, title: "Git" },
    { id: "neovim", image: nvim, title: "Neovim" },
    { id: "vitest", image: vitest, title: "Vitest" },
    { id: "postman", image: postman, title: "Postman" },
    { id: "github", image: gitHub, title: "GitHub" },
];

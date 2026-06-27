// Images
import {
    worksGallery,
    worksLanding,
    worksEcommerce,
    worksCaras,
    worksPlaylist,
} from "../../assets";

interface Works {
    id: string;
    image: string;
    tags: string[];
    link: string;
    icon: string;
    variant: "full" | "compact" | "row";
    isTextLink?: boolean;
}

export const worksData: Works[] = [
    {
        id: "gallery",
        image: worksGallery,
        variant: "full",
        tags: [
            "react",
            "typescript",
            "redux",
            "styled-components",
            "vite",
            "vitest",
        ],
        link: "https://theopengallery.netlify.app",
        icon: "arrow_outward",
    },

    {
        id: "photography",
        image: worksLanding,
        variant: "full",
        tags: ["react", "styled-components", "vite"],
        link: "https://github.com/roberrcast/portfolio-landing",
        icon: "code",
    },

    {
        id: "origen",
        image: worksEcommerce,
        variant: "compact",
        tags: ["react", "styled-components", "vite"],
        link: "https://origenygrano.netlify.app",
        icon: "double_arrow",
    },

    {
        id: "caras",
        image: worksCaras,
        variant: "compact",
        tags: [
            "react",
            "typescript",
            "styled-components",
            "react-testing-library",
        ],
        link: "https://caras-landing-ts.netlify.app",
        icon: "double_arrow",
    },

    {
        id: "playlist",
        image: worksPlaylist,
        variant: "row",
        isTextLink: true,
        tags: ["react", "API Integration", "javascript", "redux", "axios"],
        link: "https://github.com/roberrcast/react_playlist-library",
        icon: "terminal",
    },
];

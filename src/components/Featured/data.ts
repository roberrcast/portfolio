import { landing, ecommerce, gallery } from "../../assets";

interface ProjectItem {
    id: string;
    image: string;
    tags: string[];
    link: string;
}

export const projectData: ProjectItem[] = [
    {
        id: "gallery",
        image: gallery,
        tags: ["React", "API Integration", "Redux"],
        link: "https://theopengallery.netlify.app",
    },
    {
        id: "portfolio",
        image: landing,
        tags: ["React", "Typescript", "Styled-Components"],
        link: "https://bodyofwork.netlify.app",
    },
    {
        id: "origen",
        image: ecommerce,
        tags: ["React", "Typescript", "UX Design"],
        link: "https://origenygrano.netlify.app",
    },
];

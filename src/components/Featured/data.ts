import { landing, ecommerce, gallery } from "../../assets";

interface ProjectItem {
    id: string;
    title: string;
    image: string;
    altText: string;
    description: string;
    tags: string[];
    link: string;
}

export const projectData: ProjectItem[] = [
    {
        id: "gallery",
        title: "Virtual Gallery",
        image: gallery,
        altText: "Virtual Gallery Interface Screenshot",
        description:
            "An interactive web application consuming the Art Institute of Chicago's API. Built for deep exploration of cultural heritage through a seamless UI.",
        tags: ["React", "API Integration", "Redux"],
        link: "https://theopengallery.netlify.app",
    },
    {
        id: "portfolio",
        title: "Photography Portfolio",
        image: landing,
        altText: "Photography Portfolio Project Screenshot",
        description:
            "A simulation of a landing page for a license photography shop. Focusing on visual hierarchy and presentation.",
        tags: ["React", "Typescript", "Styled-Components"],
        link: "https://bodyofwork.netlify.app",
    },
    {
        id: "origen",
        title: "Origen & Grano",
        image: ecommerce,
        altText: "Origen and Grano E-commerce flow screenshot",
        description:
            "An E-commerce experience simulation. Crafting a sophisticated user journey to product discovery.",
        tags: ["React", "Typescript", "UX Design"],
        link: "https://origenygrano.netlify.app",
    },
];

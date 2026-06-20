import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";
import { hoverCursor } from "../../styles/mixins";

export const WorksSection = styled.section`
    max-width: ${spacing("containerMax")};
    width: 100%;
    margin: 0 auto;
    padding: 0 ${spacing("gutter")};
    margin-bottom: ${spacing("sectionGap")};
`;

export const SectionTitle = styled.h3`
    ${font("headlineLg")};
    color: ${color("onSurface")};
    font-weight: 700;
    margin-bottom: 3rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${color("outlineVariant")};
    display: inline-block;
`;

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

// Interface to alternate the visual flow direction based on layout design
interface CardProps {
    $reverse?: boolean;
}

export const ProjectCard = styled.div<CardProps>`
    background-color: ${color("surface")};
    border: 1px solid ${color("lowContrastOutline")};
    border-radius: ${rounded("lg")};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: stretch;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: 768px) {
        flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    }

    @media (hover: hover) {
        &:hover {
            border-color: ${color("surfaceContainerLow")};
            box-shadow: 0 0 20px rgba(129, 230, 217, 0.1);
            transform: translateY(-2px);
        }
    }
`;

export const ImageLinkWrapper = styled.a`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: ${color("surfaceContainerLow")};
    border-radius: ${rounded("default")};
    overflow: hidden;
    position: relative;
    display: block;
    ${hoverCursor};

    @media (min-width: 768px) {
        width: 50%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    // Interactive tint on hover
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(129, 230, 217, 0.05);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    /* Zoom on hover triggered by card interactions */
    ${ProjectCard}:hover & {
        img {
            transform: scale(1.04);
        }

        &::after {
            opacity: 1;
        }
    }
`;

export const ContentArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1rem;
`;

export const ProjectTitle = styled.h4`
    ${font("headlineLgMobile")};
    color: ${color("onSurface")};
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 32px;
    }
`;

export const ExternalLink = styled.a`
    color: ${color("primaryContainer")};
    transition: opacity 0.2s ease;
    display: inline-flex;
    align-items: center;

    @media (hover: hover) {
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const ProjectDescription = styled.p`
    ${font("bodySm")};
    color: ${color("onSurfaceVariant")};
    margin: 0 0 1.5rem 0;
`;

export const TechTagGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const TechTag = styled.span`
    ${font("labelCaps")};
    color: ${color("primary")};
    background-color: rgba(61, 71, 89, 0.3);
    padding: 0.35rem 0.75rem;
    border-radius: ${rounded("full")};
    border: 1px solid rgba(181, 255, 244, 0.2);
    text-transform: uppercase;
`;

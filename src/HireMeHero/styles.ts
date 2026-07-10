import styled from "styled-components";
import { color, font, spacing } from "../styles/theme";

export const HeroSection = styled.section`
    max-width: ${spacing("containerMax")};
    margin: 0 auto ${spacing("sectionGap")} auto;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export const AvailabilityTag = styled.span`
    ${font("bodySm")};
    color: ${color("primary")};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 1rem;
    display: block;
`;

export const Title = styled.h1`
    ${font("headlineXl")};
    color: ${color("onSurface")};
    margin-bottom: 1.5rem;
`;

export const Description = styled.p`
    ${font("bodyMd")};
    color: ${color("onSurfaceVariant")};
    line-height: 1.6;
    max-width: 42rem;
    margin: 0 auto;

    a {
        color: ${color("tertiaryFixedDim")};
        font-weight: 700;
    }

    @media (min-width: 768px) {
        margin: 0;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    @media (min-width: 480px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

export const CVButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 20rem;
    gap: 0.5rem;
    background-color: ${color("surfaceContainer")};
    border: 1px solid rgba(189, 199, 220, 0.2);
    color: ${color("onSurface")};
    padding: 0.75rem 1.5rem;
    transition: all 0.3s ease-in-out;

    span.font-body-md {
        ${font("bodyMd")};
    }

    span.material-symbols-outlined {
        color: ${color("primary")};
    }

    @media (hover: hover) {
        &:hover {
            border-color: rgba(181, 255, 244, 0.5);
        }
    }

    @media (min-width: 480px) {
        width: auto;
    }
`;

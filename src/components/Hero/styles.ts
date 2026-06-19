import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-bottom: ${spacing("sectionGap")};
    padding-top: 8rem;
`;

export const ImageContainer = styled.div`
    position: relavtive;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 4 / 5;
    border-radius: ${rounded("default")};
    overflow: hidden;
    background-colors: ${color("surfaceContainer")};
    border: 1px solid ${color("lowContrastOutline")};

    img {
        width: 100%;
        height: 100%;
        object-cover: cover;
        transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }

    // @media (hover: hover) {
    //     &:hover {
    //         transform: scale(1.05);
    //     }
    // }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Title = styled.h1`
    ${font("headlineXl")};
    color: ${color("onSurface")};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.h2`
    ${font("bodyMd")};
    font-weight: 600;
    text-transform: uppercase;
    color: ${color("primaryContainer")};
    max-width: 600px;
    margin: 0 auto;
`;

export const Description = styled.p`
    ${font("bodyMd")};
    color: ${color("onSurfaceVariant")};
    max-width: 600px;
    margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
`;

export const PrimaryButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${color("primaryContainer")};
    color: ${color("onPrimary")};
    ${font("labelCaps")};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    padding: 0.75rem 2rem;
    border-radius: ${rounded("default")};
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    @media (hover: hover) {
        &:hover {
            transform: scale(1.02);
        }
    }

    .material-symbols-outlined {
        font-size: 14px;
    }
`;

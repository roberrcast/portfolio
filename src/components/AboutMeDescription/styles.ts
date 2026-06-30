import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const CardContainer = styled.div`
    widht: 100%;
    max-width: ${spacing("containerMax")};
    margin: 0 auto 8rem;
    padding: 2rem;
    background-color: ${color("surfaceContainerLowest")};
    border: 1px solid ${color("secondary")};
    border-radius: ${rounded("default")};
    transition: border-color 0.5s ease-in-out;

    @media (hover: hover) {
        &:hover {
            border-color: ${color("primaryContainer")};
        }
    }
`;

export const Paragraph = styled.p`
    ${font("bodyMd")};
    color: ${color("onSurfaceVariant")};
    line-height: 1.625;
    margin: 0;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    &:first-child {
        ${font("headlineLg")};
        color: ${color("onSurface")};
        line-height: 1.25;

        span {
            color: ${color("primary")};
        }
    }
`;

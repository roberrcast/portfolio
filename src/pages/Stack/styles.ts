import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const SectionWrapper = styled.div`
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const ParagraphsContainer = styled.section`
    max-width: ${spacing("containerMax")};
    margin: 0 auto 4rem auto;
    border: 1px solid ${color("secondary")};
    border-radius: ${rounded("default")};
    padding: 2rem;
`;

export const Paragraphs = styled.p`
    ${font("bodyMdVariant")};
    font-size: 20px;
    color: ${color("onSurfaceVariant")};
    line-height: 1.625;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    &:first-child {
        ${font("headlineLgVariant")};
        color: ${color("onSurface")};
        line-height: 1.25;

        span {
            color: ${color("primary")};
        }
    }
`;

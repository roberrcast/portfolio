import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const HeroSection = styled.section`
    padding-top: 8rem;
    margin: 0 auto ${spacing("sectionGap")} auto;
    width: 100%;
    max-width: ${spacing("containerMax")};
`;

export const BadgeRow = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 0.25rem 0.75rem;
    background-color: ${color("surfaceContainerLow")};
    border: 1px solid ${color("outlineVariant")};
    border-radius: ${rounded("full")};

    .material-symbols-outlined {
        font-size: 14px;
        color: ${color("onSurfaceVariant")};
    }
`;

export const BadgeText = styled.span`
    ${font("labelCaps")};
    color: ${color("primary")};
`;

export const MainTitle = styled.h1`
    ${font("headlineXl")};
    color: ${color("onBackground")};
    margin-top: 0;
    margin-bottom: 1.5rem;

    @media (max-width: 767px) {
        ${font("headlineLgMobile")};
    }
`;

export const AccentText = styled.span`
    color: ${color("primaryContainer")};
`;

export const Description = styled.p`
    ${font("bodyMdVariant")};
    font-size: 20px !important;
    color: ${color("onSurfaceVariant")};
    max-width: 42rem;
    line-height: 1.6;
    margin: 0;
`;

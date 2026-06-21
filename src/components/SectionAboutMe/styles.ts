import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const AboutSection = styled.section`
    max-width: ${spacing("containerMax")};
    width: 100%;
    margin: 0 auto ${spacing("sectionGap")};
    padding: 0 ${spacing("gutter")} 0;
`;

export const SectionTitle = styled.h3`
    ${font("headlineLg")};
    color: ${color("inverseSurface")};
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${color("outlineVariant")};
    display: inline-block;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const BackgroundStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const PillarItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

export const IconContainer = styled.span`
    color: ${color("primaryContainer")}; /* Teal accent */
    margin-top: 0.25rem;

    .material-symbols-outlined {
        font-size: 24px;
    }
`;

export const PillarContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PillarTitle = styled.h5`
    ${font("labelCaps")};
    color: ${color("onSurface")};
    margin: 0 0 0.25rem 0;
`;

export const PillarText = styled.p`
    ${font("bodySm")};
    color: ${color("onSurfaceVariant")};
    margin: 0;
    line-height: 1.5;
`;

export const AmoledCard = styled.div`
    background-color: ${color(
        "surfaceContainerLowest",
    )}; /* #0e0e0e card highlight variation */
    border: 1px solid ${color("lowContrastOutline")};
    border-radius: ${rounded(
        "lg",
    )}; /* 2xl replacement custom fallback token mapping */
    padding: 2rem;
`;

export const CardLabel = styled.h4`
    ${font("labelCaps")};
    color: ${color("primaryContainer")};
    margin: 0 0 1.5rem 0;
`;

export const InterestsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const InterestItem = styled.li`
    ${font("bodySm")};
    color: ${color("onSurface")};
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`;

export const BulletDot = styled.span`
    width: 4px;
    height: 4px;
    background-color: ${color("primaryContainer")};
    border-radius: ${rounded("full")};
    flex-shrink: 0;
    margin-top: 0.5rem;
`;

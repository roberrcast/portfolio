import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const DetailsSection = styled.section`
    max-width: ${spacing("containerMaxVariant")};
    margin: 0 auto ${spacing("sectionGap")} auto;
`;

export const SectionTitle = styled.h2`
    ${font("labelCaps")};
    color: ${color("secondary")};
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

export const DetailsCard = styled.div`
    background-color: ${color("surfaceContainer")};
    border: 1px solid ${color("secondary")};
    padding: 1.5rem;
    border-radius: ${rounded("default")};
    transition: border-color 0.2s ease-in-out;

    @media (hover: hover) {
        &:hover {
            border-color: ${color("primary")};
        }
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    span.material-symbols-outline {
        color: ${color("primary")};
        font-size: 1.5rem;
    }
`;

export const TagBadge = styled.div`
    background-color: ${color("surfaceVariant")};
    color: ${color("primary")};
    padding: 0.25rem 0.75rem;
    border-radius: ${rounded("full")};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
`;

export const CardTitle = styled.div`
    ${font("headlineLg")};
    font-size: 20px;
    color: ${color("onSurface")};
    margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
    ${font("bodySm")};
    color: ${color("onSurfaceVariant")};
    line-height: 1.5;
`;

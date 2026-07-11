import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const PartnerSection = styled.section`
    margin-bottom: ${spacing("sectionGap")};
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
    ${font("headlineLg")};
    color: ${color("onSurface")};
    white-space: nowrap;
`;

export const DividerLine = styled.div`
    height: 1px;
    flex-grow: 1;
    background-color: rgba(189, 199, 220, 0.2);
`;

export const CardContainer = styled.div`
    background-color: ${color("surfaceContainer")};
    border: 1px solid rgba(189, 199, 220, 0.1);
    padding: 2rem;
    border-radius: ${rounded("default")};
`;

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const TextColumn = styled.div``;

export const ColumnTitle = styled.h4`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${color("primary")};
    margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
    ${font("bodyMdVariant")};
    color: ${color("onSurfaceVariant")};
    line-heigth: 1.6;
`;

export const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
`;

export const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span.material-symbols-outlined {
        color: ${color("primary")};
        font-size: 1.5rem;
    }
`;

export const FeatureLabel = styled.p`
    ${font("bodySm")};
    font-weight: 700;
    color: ${color("onSurface")};
`;

export const FeatureDesc = styled.p`
    ${font("bodySm")};
    color: ${color("onSurfaceVariant")};
    line-height: 1.4;
`;

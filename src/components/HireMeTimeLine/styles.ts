import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const TimelineSection = styled.section`
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

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const TimelineItem = styled.div`
    position: relative;
    padding-left: 2rem;
    border-left: 1px solid rgba(189, 199, 220, 0.2);
`;

export const TimelineDot = styled.div<{ $isLatest: boolean }>`
    position: absolute;
    left: -5px;
    top: 0;
    width: 9px;
    height: 9px;
    border-radius: ${rounded("full")};
    background-color: ${(props) =>
        props.$isLatest ? color("primary") : "rgba(189, 199, 220, 0.4)"};
`;

export const MetaRow = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const ItemTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${color("onSurface")};
`;

export const DateSpan = styled.span`
    ${font("bodySm")};
    color: ${color("primary")};
`;

export const InstitutionText = styled.p`
    ${font("bodyMdVariant")};
    color: ${color("onSurfaceVariant")};
    margin-bottom: 1rem;
`;

export const DescriptionText = styled.p`
    ${font("bodyMdVariant")};
    color: ${color("onSurfaceVariant")};
    line-height: 1.6;
`;

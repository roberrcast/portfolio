import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const SectionWrapper = styled.section`
    width: 100%;
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    padding-bottom: 4rem;
`;

export const SectionHeader = styled.h2`
    ${font("labelCaps")};
    color: ${color("secondary")};
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
`;

export const BentoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

/* Main Card Wrapper: Handles layout shifting based on variant */
export const InterestCard = styled.div<{ $variant?: "row" }>`
    background-color: ${color("surfaceContainer")};
    border: 1px solid ${color("secondary")};
    border-radius: ${rounded("default")};
    padding: 1.5rem; /* p-6 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;

    @media (hover: hover) {
        &:hover {
            border-color: ${color("primary")};
        }
    }

    /* Structural overwrite if it's the bottom "Art & Music" full-width layout */
    @media (min-width: 768px) {
        ${(props) =>
            props.$variant === "row" &&
            `
      grid-column: span 2; 
      flex-direction: row;
      gap: 2rem; 
      align-items: center;
      padding: 2rem; 
    `}
    }
`;

/* Card Sub-components */

export const ContentBlock = styled.div`
    flex: 1;
`;

export const UpperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1rem;
`;

export const CardTitle = styled.h3<{ $variant?: "row" }>`
    ${font("headlineLg")};
    color: ${color("onSurface")};
    margin-top: 0;
    margin-bottom: ${(props) => (props.$variant === "row" ? "1rem" : "0.5rem")};
`;

export const CardDescription = styled.p<{ $variant?: "row" }>`
    color: ${color("onSurfaceVariant")};
    margin: 0;
    margin-bottom: ${(props) => (props.$variant === "row" ? "1.5rem" : "0")};

    /* Select correct font token according to layout code */
    ${(props) => (props.$variant === "row" ? font("bodyMd") : font("bodySm"))};
`;

/* Tags & Badges styling */

export const TagContainer = styled.div`
    display: flex;
    gap: 0.75rem; /* gap-3 */
    flex-wrap: wrap;
`;

export const CategoryBadge = styled.div`
    background-color: ${color("surfaceVariant")};
    color: ${color("primary")};
    padding: 0.25rem 0.75rem;
    border-radius: ${rounded("full")};
    ${font("labelCaps")};
    font-size: 10px;
    text-transform: uppercase;
`;

export const InterestTag = styled.span`
    background-color: ${color("onSecondaryFixed")};
    color: ${color("primary")};
    padding: 0.25rem 1rem;
    border-radius: ${rounded("full")};
    ${font("labelCaps")};
    font-size: 10px;
    text-transform: uppercase;
`;

/* Right Side Graphic Frame (Specific to row variant) */
export const MediaFrame = styled.div`
    width: 100%;
    height: 8rem; /* h-32 */
    background-color: ${color("surfaceVariant")};
    border-radius: ${rounded("default")};
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        width: 12rem; /* md:w-48 */
    }

    .material-symbols-outlined {
        color: ${color("primaryContainer")};
        transform: scale(2);
    }
`;

export const GraphicOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top right,
        rgba(181, 255, 244, 0.1),
        transparent
    );
    opacity: 0.5;
    pointer-events: none;
`;

export const InlineIcon = styled.span`
    color: ${color("primary")};
    font-variation-settings: "FILL" 1 !important;
`;

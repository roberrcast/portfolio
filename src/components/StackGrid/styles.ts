import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const SectionWrapper = styled.section`
    margin: 0 auto ${spacing("sectionGap")} auto;
    width: 100%;
    max-width: ${spacing("containerMax")};
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const HeaderTitleGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const IconFrame = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(129, 230, 217, 0.1);
    border: 1px solid rgba(181, 255, 244, 0.2);
    border-radius: ${rounded("full")};

    .material-symbols-outlined {
        color: ${color("primary")};
        font-size: 1.25rem;
    }
`;

export const SectionTitle = styled.h2`
    ${font("headlineLg")};
    color: ${color("onBackground")};
    margin: 0;
`;

export const GradientDivider = styled.div`
    display: none;
    height: 1px;
    flex-grow: 1;
    margin: 0 2rem;
    background: linear-gradient(
        to right,
        rgba(181, 255, 244, 0.3),
        transparent
    );

    @media (min-width: 768px) {
        display: block;
    }
`;

export const BentoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
`;

export const ToolCard = styled.div``;

export const CardInner = styled.div`
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.3rem;
    background-color: ${color("surfaceContainerLow")};
    border: 1px solid ${color("surfaceContainerHighest")};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    img {
        width: 2.5rem;
        height: 2.5rem;
        margin-bottom: 1rem;
        object-fit: contain;
        filter: grayscale(20%);
        transition:
            filter 0.3s ease,
            transform 0.3s ease;
    }

    @media (hover: hover) {
        &:hover {
            border-color: ${color("primaryContainer")};
            transform: translateY(-4px);
            box-shadow: 0 0 20px rgba(129, 230, 217, 0.1);

            img {
                filter: grayscale(0%);
                transform: scale(1.05);
            }
        }
    }
`;

export const ToolTitle = styled.span`
    ${font("labelCapsVariant")};
    color: ${color("onSurface")};
    text-align: center;
`;

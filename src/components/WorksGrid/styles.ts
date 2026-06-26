import styled, { css } from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

export const GridContainer = styled.div`
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-bottom: 4rem;
`;

export const MainGrid = styled.div`
    max-width: ${spacing("containerMax")};
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ProjectCard = styled.article`
    display: flex;
    flex-direction: column;
    border: 1px solid ${color("secondary")};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    background-color: ${color("background")};

    @media (hover: hover) {
        &:hover {
            box-shadow: 0 0 15px rgba(181, 255, 244, 0.1);
        }
    }
`;

export const RowCard = styled(ProjectCard)`
    /* Inherits default layout but handles horizontal rules*/

    & > div {
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
`;

export const ImageWrapper = styled.div<{ $variant?: "compact" | "row" }>`
    height: ${(props) =>
        props.$variant === "compact"
            ? "12rem"
            : props.$variant === "row"
              ? "14rem"
              : "300px"};
    width: 100%;
    overflow: hidden;

    ${(props) =>
        props.$variant === "compact" &&
        `border-bottom: 1px solid ${color("secondary")}`}

    @media (min-width: 768px) {
        ${(props) =>
            props.$variant === "row" &&
            `
            width: 33.333333%;
            height: auto;
            border-right: 1px solid ${color("secondary")};
`}
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;

    @media (hover: hover) {
        ${ProjectCard}:hover & {
            transform: scale(1.05);
        }
    }
`;

export const InfoWrapper = styled.div<{ $variant?: "row" }>`
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1.5rem;

    ${(props) =>
        props.$variant === "row" &&
        `
        @media (min-width: 768px) {
        width: 66.666667%;
        display: flex;
        flex-direction: column;
        justify-content: center;
}
`}
`;

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

export const Tag = styled.span`
    background-color: ${color("lowContrastOutline")};
    color: ${color("primaryContainer")};
    ${font("labelCaps")};
    padding: 0.25rem 0.75rem;
    border-radius: ${rounded("full")};
    text-transform: uppercase;
`;

export const ProjectTitle = styled.h3`
    ${font("headlineLg")};
    color: ${color("onSurface")};
    margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p<{ $isRow?: boolean }>`
    ${font("bodySm")};
    color: ${color("onSurfaceVariant")};
    margin-bottom: 1.5rem;
    ${(props) => props.$isRow && `max-width: 32rem;`}
`;

export const ActionButton = styled.a<{ $isTextLink?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${color("primary")};
    ${font("labelCaps")};
    transition: all 0.2s ease-in-out;

    ${(props) =>
        !props.$isTextLink
            ? css`
                  border: 1px solid ${color("primary")};
                  padding: 0.5rem 1rem;
                  border-radius: ${rounded("full")};

                  @media (hover: hover) {
                      &:hover {
                          background-color: ${color("primaryContainer")};
                          color: ${color("onPrimaryContainer")};
                          transform: scale(1.1);
                      }
                  }
              `
            : css`
                  @media (hover: hover) {
                      &:hover {
                          text-decoration: underline;
                      }
                  }
              `}

    .material-symbols-outlined {
        font-size: ${(props) => (props.$isTextLink ? "16px" : "18px")};
    }
`;

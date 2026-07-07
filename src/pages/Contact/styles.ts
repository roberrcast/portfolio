import styled from "styled-components";
import { color, font, spacing } from "../../styles/theme";

export const HeadingContainer = styled.section`
    max-width: ${spacing("containerMax")};
    margin: 8rem auto 1rem auto;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const Heading = styled.h1`
    ${font("headlineXl")};
`;

export const SubHeading = styled.p`
    margin-top: 1rem;
    ${font("bodyMdVariant")};
`;

export const FooterContainer = styled.div`
    max-width: ${spacing("containerMax")};
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
    width: 100%;
    padding: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const DirectMailBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SubTitle = styled.h3`
    ${font("labelCaps")};
    color: ${color("outline")};
    margin: 0;
`;

export const MailLink = styled.a`
    ${font("headlineLgMobile")};
    color: ${color("primary")};
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    @media (min-width: 768px) {
        ${font("headlineLg")};
    }

    @media (hover: hover) {
        &:hover {
            opacity: 0.8;
        }
    }
`;

export const SocialActionsRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const IconCircle = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${color("outlineVariant")};
    border-radius: 50%;
    transition:
        border-color 0.2s ease-in-out,
        color 0.2s ease-in-out;

    .material-symbols-outlined {
        font-size: 1.25rem;
        color: ${color("onSurface")};
    }
`;

export const PlatformLabel = styled.span`
    ${font("labelCaps")};
    font-size: 10px;
    color: ${color("onSurfaceVariant")};
    text-transform: uppercase;
    letter-spacing: 0.15rem;
`;

export const SocialAnchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    @media (hover: hover) {
        &:hover {
            ${IconCircle} {
                border-color: ${color("primary")};
                color: ${color("primary")};
            }
        }
    }
`;

import styled from "styled-components";
import { color, font, spacing } from "../../styles/theme";

export const FooterContainer = styled.footer`
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    padding: ${spacing("sectionGap")} ${spacing("gutter")};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid ${color("lowContrastOutline")};
    background-color: ${color("surfaceContainerLowest")};
`;

export const Logo = styled.div`
    ${font("labelCaps")};
    color: ${color("onSurface")};
`;

export const Copyright = styled.p`
    ${font("bodySm")};
    color: ${color("onSurfaceVariant")};
    magin: 0;
`;

export const LinkGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
`;

export const FooterLink = styled.a`
    ${font("labelCaps")};
    color: ${color("outline")};
    transition: color 0.2s ease-in-out;

    @media (hover: hover) {
        &:hover {
            color: ${color("primary")};
        }
    }
`;

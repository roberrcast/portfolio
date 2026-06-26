import styled from "styled-components";
import { color, font, spacing } from "../../styles/theme";

export const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    padding: 8rem 2rem 6rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const PageTitle = styled.h1`
    ${font("headlineXl")};
    color: ${color("onSurface")};
    margin: 0;

    @media (max-width: 767px) {
        ${font("headlineLgMobile")};
    }
`;

export const PageSubtitle = styled.p`
    ${font("bodyMd")};
    color: ${color("onSurfaceVariant")};
    margin: 0;
`;

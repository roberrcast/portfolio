import styled from "styled-components";
import type { ButtonVariant } from "../../styles/mixins";
import { color, font, rounded } from "../../styles/theme";

export const CtaSection = styled.section`
    background-color: ${color("primaryContainer")};
    padding: 3rem;
    border-radius: ${rounded("lg")};
    text-align: center;
    position: relative;
    overflow: hidden;
`;

export const InnerContainer = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const CtaTitle = styled.h2`
    ${font("headlineXl")};
    font-size: 2.25rem;
    color: ${color("onPrimaryContainer")};
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export const CtaDescription = styled.p`
    ${font("bodyMdVariant")};
    color: ${color("surface")};
    max-width: 36rem;
    margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const contactButtonTheme: ButtonVariant = {
    font: "bodyMd",
    fontWeight: "700",
    textTransform: "none",
    bg: "onPrimaryFixed",
    text: "primaryFixed",
    padding: "1rem 2rem",
};

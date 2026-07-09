import styled from "styled-components";
import type { ButtonVariant } from "../../styles/mixins";
import { color, font, spacing } from "../../styles/theme";

export const CtaSection = styled.section`
    margin: 4rem auto 8rem auto;
    text-align: center;
    padding-top: 6rem;
    border-top: 1px solid rgba(148, 163, 184, 0.3);
    width: 100%;
    max-width: ${spacing("containerMaxVariant")};
`;

export const CtaHeading = styled.h2`
    ${font("headlineLg")};
    color: ${color("onSurface")};
    margin: 0 0 1.5rem 0;
`;

export const ctaButtonTheme: ButtonVariant = {
    bg: "primaryContainer",
    text: "onPrimary",
    font: "buttonCta",
    textTransform: "uppercase",
    fontWeight: "600",
};

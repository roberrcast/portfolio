import styled, { keyframes } from "styled-components";
import { color, font, rounded, spacing } from "../styles/theme";
import { blur, type ButtonVariant } from "../styles/mixins";

const slideIn = keyframes`
    from {
        transform: translateY(2rem);
        opacity: 0;
    }

    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const ConsentWrapper = styled.aside`
    position: fixed;
    bottom: 2rem;
    left: 1rem;
    right: 1rem;
    z-index: 100;
    animation: ${slideIn} 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ConsentContainer = styled.div`
    background-color: ${color("primaryContainer")};
    padding: 2rem;
    border-radius: ${rounded("lg")};
    text-align: center;
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    border: 1px solid rgba(181, 255, 244, 0.2);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    ${blur(12)};
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;

    span {
        color: ${color("onPrimaryContainer")};
        font-size: 46px;
        margin-bottom: 0.5rem;
    }
`;

export const Title = styled.h2`
    ${font("headlineLg")};
    color: ${color("onPrimaryContainer")};
`;

export const Description = styled.p`
    ${font("bodySm")};
    color: ${color("onPrimaryContainer")};
    max-width: 36rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    padding-top: 1rem;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const acceptButtonTheme: ButtonVariant = {
    bg: "onSecondaryFixed",
    text: "primary",
    font: "labelCapsVariant",
    fontWeight: "700",
    padding: "0.75rem 2rem",
};

export const declineButtonTheme: ButtonVariant = {
    bg: "primaryContainer",
    text: "onPrimaryContainer",
    border: "cookieConsentDecline",
    font: "labelCapsVariant",
    fontWeight: "700",
    padding: "0.75rem 2rem",
    hoverBg: "surfaceContainerLow",
};

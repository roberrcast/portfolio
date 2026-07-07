import styled, { css, keyframes } from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const SpinnerIcon = styled.span`
    font-size: 18px;
    animation: ${spin} 1s linear infinite;
`;

export const FormContainer = styled.div`
    max-width: ${spacing("containerMax")};
    margin: 4rem auto 4rem auto;
    position: relative;
    overflow: hidden;
    background-color: ${color("surfaceContainer")};
    border: 1px solid ${color("outlineVariant")};
    padding: 2rem;

    @media (min-width: 768px) {
        padding: 3rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 10;
`;

export const GlowEffect = styled.div`
    position: absolute;
    top: -10rem;
    right: -10rem;
    width: 24rem;
    height: 24rem;
    background: radial-gradient(
        circle,
        rgba(181, 255, 244, 0.08) 0%,
        rgba(181, 255, 244, 0) 70%
    );
    border-radius: ${rounded("full")};
    pointer-events: none;
`;

export const InputGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    position: relative;
    z-index: 10;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    z-index: 10;
    margin-bottom: 0.5rem;
`;

export const ErrorMessage = styled.p<{ $isVisible: boolean }>`
    ${font("bodySm")};
    color: ${color("error")};
    margin-top: 0.25rem;
    transition: all 0.2s ease-in-out;
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.$isVisible ? "translateY(0)" : "translateY(-4px)"};
    pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
    /* position: absolute; */
    bottom: -1.5rem;
`;

export const Label = styled.label`
    ${font("labelCaps")};
    color: ${color("secondaryFixedDim")};
    padding: 0 0.25rem;
`;

const inputStyles = css<{ $hasError?: boolean }>`
    ${font("bodyMdVariantInter")};
    background: transparent;
    border: none;
    border: 1px solid
        ${(props) =>
            props.$hasError ? color("error") : color("outlineVariant")};
    padding: 0.5rem;
    color: ${color("tertiaryFixedDim")};
    transition: border-color 0.2s ease;
    outline: none;

    &::placeholder {
        ${font("bodyMd")};
        color: ${color("onSurface")};
    }

    &:focus {
        border-color: ${(props) =>
            props.$hasError ? color("error") : color("primary")};
    }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
    ${inputStyles};
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
    ${inputStyles};
    resize: none;
`;

export const ButtonWrapper = styled.div`
    padding-top: 1rem;
    position: relative;
    z-index: 10;
`;

// Continue with the add-on styling for the submit button

export const SubmitButton = styled.button<{
    $status: "idle" | "sending" | "success";
}>`
    width: 100%;
    padding: 1rem 2.5rem;
    border-radius: ${rounded("full")};
    border: none;
    ${font("labelCaps")};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    transition: all 0.2s ease-in-out;

    /* dynamic button */

    background-color: ${(props) =>
        props.$status === "success"
            ? color("onSuccess")
            : color("primaryContainer")};

    color: ${(props) =>
        props.$status === "success"
            ? color("surface")
            : color("onPrimaryFixed")};
    opacity: ${(props) => (props.$status === "sending" ? 0.8 : 1)};

    pointer-events: ${(props) => (props.$status !== "idle" ? "none" : "auto")};

    @media (min-width: 768px) {
        width: auto;
    }

    .material-symbols-outlined {
        font-size: 18px;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            transform: scale(1.02);
        }

        &:hover span.material-symbols-outlined {
            transform: translateX(4px);
        }
    }

    &:active {
        transform: scale(0.95);
    }
`;

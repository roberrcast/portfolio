import { css } from "styled-components";
import { color, font, rounded, type ThemeType } from "./theme";

export const blur = (value: number | string) => css`
    backdrop-filter: blur(${value}px);
    -webkit-backdrop-filter: blur(${value}px);
`;

export const hover = (
    hoverColor: keyof ThemeType["colors"],
    alpha: string = "",
) => css`
    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            background-color: ${color(hoverColor, alpha)};
        }
    }
`;

export const hoverFont = (
    hoverColor: keyof ThemeType["colors"],
    alpha: string = "",
) => css`
    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${color(hoverColor, alpha)};
        }
    }
`;

export const hoverCursor = () => css`
    @media (hover: hover) {
        &:hover {
            cursor: pointer;
        }
    }
`;

// reusable button type
export type ButtonVariant = {
    bg: keyof ThemeType["colors"];
    text: keyof ThemeType["colors"];
    textTransform?: string;
    fontWeight?: string;
    border?: keyof ThemeType["colors"];
    hoverBg?: keyof ThemeType["colors"];
};

// Mixin for reusable button
export const buttonMixin = (variant: ButtonVariant) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    border-radius: ${rounded("full")};
    text-transform: ${variant.textTransform};
    font-weight: ${variant.fontWeight};

    background-color: ${color(variant.bg)};
    color: ${color(variant.text)};
    border: ${variant.border ? `1px solid ${color(variant.border)}` : "none"};

    transition:
        transform 0.2s ease-in-out,
        background-color 0.2s ease-in-out,
        border-color 0.2s ease-in-out;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            ${variant.hoverBg && `background-color: ${color(variant.hoverBg)};`}
        }
    }

    &:active {
        transform: scale(0.95);
    }
`;

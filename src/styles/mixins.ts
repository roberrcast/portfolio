import { css } from "styled-components";
import { color, type ThemeType } from "./theme";

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

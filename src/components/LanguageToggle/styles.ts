import styled, { css } from "styled-components";
import { color, font, rounded } from "../../styles/theme";

export const SwitchLabel = styled.label<{ $isChecked: boolean }>`
    ${font("labelCaps")};
    color: ${color("primary")};
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    position: relative;
    border-radius: ${rounded("full")};
    cursor: pointer;
    isolation: isolate;
    user-select: none;
    background-color: transparent;

    input[type="checkbox"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    & > span {
        display: grid;
        place-content: center;
        padding: 0.5rem 1rem;
        transition: opacity 0.3s ease-in-out 0.15s;
    }

    &::before {
        content: "";
        position: absolute;
        border-radius: inherit;
        z-index: -1;
        background-color: ${color("background")};
        border: 2px solid ${color("primary")};
        transition:
            inset 0.5s cubic-bezier(0.47, 1.64, 0.41, 0.8),
            background-color 0.5s ease-in-out;
        inset: 4px 50% 4px 4px;

        ${(props) =>
            props.$isChecked &&
            css`
                inset: 4px 4px 4px 50%;
            `}
    }

    &::after {
        content: "";
        position: absolute;
        border-radius: inherit;
        background-color: transparent;
        inset: 0;
        z-index: -2;
        transition: inset 0.15s ease-in-out;
    }

    &:has(:focus-visible)::after {
        inset: -0.25rem;
        box-shadow: 0 0 0 2px ${color("primary")};
    }

    @media (hover: hover) {
        &:hover::before {
            ${(props) =>
                props.$isChecked
                    ? css`
                          inset: 4px 4px 4px 45%;
                      `
                    : css`
                          inset: 4px 45% 4px 4px;
                      `}
        }

        &:hover > span {
            ${(props) =>
                props.$isChecked
                    ? css`
                          &:first-of-type {
                              opacity: 1;
                              transition-delay: 0s;
                              transition-duration: 0.1s;
                          }
                      `
                    : css`
                          &:last-of-type {
                              opacity: 1;
                              transition-delay: 0s;
                              transition-duration: 0.1s;
                          }
                      `}
        }
    }

    & > span:first-of-type {
        opacity: ${(props) => (props.$isChecked ? 0.75 : 1)};
    }

    & > span:last-of-type {
        opacity: ${(props) => (props.$isChecked ? 1 : 0.75)};
    }
`;

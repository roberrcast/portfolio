import styled, { css } from "styled-components";
import { color, font, rounded } from "../../styles/theme";
import { NavLink } from "react-router-dom";

/* Burger Wrapper Popup Element */
export const BurgerPopup = styled.div`
    display: inline-block;
    text-rendering: optimizeLegibility;
    position: relative;
    z-index: 100;

    input {
        display: none;
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

/* Core Interactive Burger Box */
export const BurgerButton = styled.div<{ $isOpen: boolean }>`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.15);
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.7s ease-in-out;
    outline: 0.125rem solid transparent;
    outline-offset: 0;

    span {
        height: 0.125rem;
        width: 1.125rem;
        background: ${color("primary")};
        border-radius: 0.1875rem;
        position: absolute;
        transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    }

    /* Top Line Placement & Morph */
    span:nth-child(1) {
        top: 0.625rem;
        ${(props) =>
            props.$isOpen &&
            css`
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
            `}
    }

    /* Bottom Line Placement & Morph */
    span:nth-child(2) {
        bottom: 0.625rem;
        ${(props) =>
            props.$isOpen &&
            css`
                bottom: 50%;
                transform: translateY(50%) rotate(-45deg);
            `}
    }

    /* Middle Line Placement & Slide Out */
    span:nth-child(3) {
        top: 50%;
        transform: translateY(-50%);
        ${(props) =>
            props.$isOpen &&
            css`
                transform: translateX(calc(-2.125rem - 1.125rem));
            `}
    }

    @media (hover: hover) {
        &:hover {
            transform: scale(1.1);
        }
    }

    &:active {
        transform: scale(0.95);
    }
`;

/*  The Dropdown Nav Panel */
export const NavDropdown = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0.75rem;
    width: 12rem;
    background-color: ${color("surfaceContainerLow")};
    border: 1px solid ${color("surfaceContainerHighest")};
    border-radius: ${rounded("default")};
    z-index: 99;
    overflow: hidden;
    list-style: none;

    /* Core Animation */
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

    /* Triggered State */
    ${(props) =>
        props.$isOpen &&
        css`
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
            border-color: ${color("primaryContainer")};
        `}
`;

export const MenuItem = styled.div`
    width: 100%;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const MenuLink = styled(NavLink)`
    display: block;
    padding: 0.875rem 1.5rem;
    width: 100%;
    position: relative;
    text-align: center;
    ${font("bodySm")};
    color: ${color("onSurface")};
    text-decoration: none;
    z-index: 1;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);

    /* Horizontal background filling bar background hover layout */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${color("primaryContainer")};
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    }

    @media (hover: hover) {
        &:hover {
            color: ${color("surface")};

            &::before {
                transform: scaleX(1);
                transform-origin: right;
            }
        }
    }

    &.active {
        color: ${color("tertiaryFixedDim")};
        font-weight: 700;
        pointer-events: none;
    }
`;

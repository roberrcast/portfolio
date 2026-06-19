import styled from "styled-components";
import { color, font, rounded, spacing } from "../../styles/theme";
import { blur, hover, hoverFont } from "../../styles/mixins";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    ${blur(12)};
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Logo = styled.div`
    ${font("headlineLg")};
    color: ${color("primary")};
`;

export const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${spacing("containerMax")};
    padding: 0 ${spacing("gutter")};
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const NavLinks = styled.nav`
    display: none;
    gap: 2rem;
    align-items: center;

    @media (min-width: 768px) {
        display: block;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
`;

export const NavLink = styled(RouterNavLink)`
    text-decoration: none;
    transition: all 0.2s;
    ${font("bodyMd")};
    color: ${color("onSurfaceVariant")};
    font-weight: 500;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
    ${hoverFont("primary")};

    &.active {
        color: ${color("primary")};
        font-weight: 700;
        border-bottom: 2px solid ${color("primary")};
    }
`;

export const HireMe = styled.button`
    background-color: ${color("primaryContainer")};
    color: ${color("onPrimaryContainer")};
    ${font("labelCaps")};
    padding: 0.5rem 1.5rem;
    border-radius: ${rounded("default")};
    border: none;
    cursor: pointer;
    transition:
        transform 0.2s,
        opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const LanguageToggle = styled.button`
    display: flex;
    padding: 0.5rem 0.75rem;
    color: ${color("primary")};
    gap: 0.5rem;
    border-radius: ${rounded("lg")};
    border: 1px solid ${color("primary", "33")};
    background: transparent;
    transition: all 0.2s;
    ${hover("primary", "0D")};

    &:active {
        transform: scale(0.95);
    }
`;

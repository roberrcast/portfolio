import styled from "styled-components";
import { color, font, rounded } from "../../styles/theme";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 8rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        text-align: left;
    }
`;

export const AvatarWrapper = styled.div`
    position: relative;
`;

export const GlowEffect = styled.div`
    position: absolute;
    inset: 0;
    background-color: ${color("primaryContainer")};
    border-radius: ${rounded("full")};
    filter: blur(40px);
    opacity: 0.1;
    transition: opacity 0.3s ease-in-out;

    ${AvatarWrapper}:hover & {
        opacity: 0.2;
    }
`;

export const ImageFrame = styled.div`
    width: 12rem;
    height: 12rem;
    border-radius: ${rounded("full")};
    overflow: hidden;
    border: 2px solid ${color("secondary")};
    padding: 0.25rem;
    transition: border-color 0.3s ease-in-out;

    @media (min-width: 768px) {
        width: 12rem;
        height: 14rem;
    }
    ${AvatarWrapper}:hover & {
        border-color: ${color("primary")};
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${rounded("full")};
    filter: grayscale(100%);
    transition: filter 0.5s ease-in-out;

    ${AvatarWrapper}:hover & {
        filter: grayscale(0%);
    }
`;

export const TextGroup = styled.div`
    text-align: center;
`;

export const Title = styled.h1`
    ${font("headlineXl")};
    color: ${color("onSurface")};
    margin: 0;
    margin-bottom: 0.5rem;
`;

export const TitleAccent = styled.span`
    color: ${color("primaryContainer")};
`;

export const Subtitle = styled.p`
    ${font("bodyMd")};
    color: ${color("secondary")};
    letter-spacing: -0.025rem;
    margin: 0;
`;

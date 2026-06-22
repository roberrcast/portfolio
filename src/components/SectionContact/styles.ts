import styled from "styled-components";
import { color, font, spacing } from "../../styles/theme";

export const ContactSection = styled.section`
    max-width: ${spacing("containerMax")};
    width: 100%;
    margin: 0 auto ${spacing("sectionGap")};
    padding: 4rem ${spacing("gutter")};
    text-align: center;
`;

export const Title = styled.h3`
    ${font("headlineXl")};
    color: ${color("inverseSurface")};
    margin-top: 0;
    margin-bottom: 1.5rem;
`;

export const Description = styled.p`
    ${font("bodyMd")};
    color: ${color("onSurfaceVariant")};
    max-width: 32rem;
    margin: 0 auto auto 2rem;
    line-height: 1.6;
`;

export const ChannelsGrid = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

export const ChannelLink = styled.a`
    color: ${color("primary")};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s ease-out;

    @media (hover: hover) {
        &:hover {
            transform: scale(1.1);
        }
    }

    .material-symbols-outlined {
        font-size: 1.875rem;
    }
`;

export const Label = styled.span`
    ${font("labelCaps")};
    font-size: 10px;
    letter-spacing: 0.05em;
`;

import styled from "styled-components";
import { spacing } from "../../styles/theme";

export const MainWrapper = styled.div`
    max-width: ${spacing("containerMax")};
    margin: 0 auto;
    padding: 8rem 0 4rem 0;

    @media (max-width: 768px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`;

import { AboutMeDescription } from "../../components/AboutMeDescription";
import { AboutMeHeader } from "../../components/AboutMeHeader";
import { MainWrapper } from "./styles";

export const About = () => {
    return (
        <MainWrapper>
            <AboutMeHeader />
            <AboutMeDescription />
        </MainWrapper>
    );
};

import { AboutMeDescription } from "../../components/AboutMeDescription";
import { AboutMeHeader } from "../../components/AboutMeHeader";
import { Interests } from "../../components/AboutMeInterests";
import { AboutMeCta } from "../../components/AboutMeCTA";
import { MainWrapper } from "./styles";

export const About = () => {
    return (
        <MainWrapper>
            <AboutMeHeader />
            <AboutMeDescription />
            <Interests />
            <AboutMeCta />
        </MainWrapper>
    );
};

import { AboutMeDescription } from "../../components/AboutMeDescription";
import { AboutMeHeader } from "../../components/AboutMeHeader";
import { Interests } from "../../components/AboutMeInterests";
import { AboutMeCta } from "../../components/AboutMeCTA";
import { MainWrapper } from "./styles";
import { AboutDetails } from "../../components/AboutMeDetails";

export const About = () => {
    return (
        <MainWrapper>
            <AboutMeHeader />
            <AboutMeDescription />
            <AboutDetails />
            <Interests />
            <AboutMeCta />
        </MainWrapper>
    );
};

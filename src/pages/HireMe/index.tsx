import { HireMeTimeline } from "../../components/HireMeTimeLine";
import { WhyHireMe } from "../../components/WhyHireMe";
import { HireMeCta } from "../../components/HireMeCTA";
import { HireMeHero } from "../../components/HireMeHero";
import { MainWrapper } from "./styles";

export const HireMe = () => {
    return (
        <MainWrapper>
            <HireMeHero />
            <HireMeTimeline />
            <WhyHireMe />
            <HireMeCta />
        </MainWrapper>
    );
};

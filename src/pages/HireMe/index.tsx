import { HireMeTimeline } from "../../components/HireMeTimeLine";
import { WhyHireMe } from "../../components/WhyHireMe";
import { HireMeCta } from "../../HireMeCTA";
import { HireMeHero } from "../../HireMeHero";
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

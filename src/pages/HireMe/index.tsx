import { HireMeTimeline } from "../../components/HireMeTimeLine";
import { WhyHireMe } from "../../components/WhyHireMe";
import { HireMeHero } from "../../HireMeHero";
import { MainWrapper } from "./styles";

export const HireMe = () => {
    return (
        <MainWrapper>
            <HireMeHero />
            <HireMeTimeline />
            <WhyHireMe />
        </MainWrapper>
    );
};

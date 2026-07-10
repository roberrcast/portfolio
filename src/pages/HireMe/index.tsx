import { HireMeTimeline } from "../../components/HireMeTimeLine";
import { HireMeHero } from "../../HireMeHero";
import { MainWrapper } from "./styles";

export const HireMe = () => {
    return (
        <MainWrapper>
            <HireMeHero />
            <HireMeTimeline />
        </MainWrapper>
    );
};

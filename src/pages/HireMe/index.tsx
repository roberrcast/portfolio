import { HireMeTimeline } from "../../components/HireMeTimeLine";
import { WhyHireMe } from "../../components/WhyHireMe";
import { HireMeCta } from "../../components/HireMeCTA";
import { HireMeHero } from "../../components/HireMeHero";
import { MainWrapper } from "./styles";
import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const HireMe = () => {
    const { t } = useTranslation("common");

    useDocumentTitle(t("buttons.hire"));

    return (
        <MainWrapper>
            <HireMeHero />
            <HireMeTimeline />
            <WhyHireMe />
            <HireMeCta />
        </MainWrapper>
    );
};

import { AboutMeDescription } from "../../components/AboutMeDescription";
import { AboutMeHeader } from "../../components/AboutMeHeader";
import { Interests } from "../../components/AboutMeInterests";
import { AboutMeCta } from "../../components/AboutMeCTA";
import { MainWrapper } from "./styles";
import { AboutDetails } from "../../components/AboutMeDetails";
import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const About = () => {
    const { t } = useTranslation("common");

    useDocumentTitle(t("nav.about"));

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

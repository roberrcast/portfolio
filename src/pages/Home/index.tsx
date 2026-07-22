import { useTranslation } from "react-i18next";
import FeaturedWorks from "../../components/Featured";
import Hero from "../../components/Hero";
import SectionAboutMe from "../../components/SectionAboutMe";
import SectionContact from "../../components/SectionContact";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Home = () => {
    const { t } = useTranslation("common");

    useDocumentTitle(t("nav.home"));

    return (
        <>
            <Hero />
            <FeaturedWorks />
            <SectionAboutMe />
            <SectionContact />
        </>
    );
};

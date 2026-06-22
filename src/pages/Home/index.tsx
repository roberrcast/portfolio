import FeaturedWorks from "../../components/Featured";
import Hero from "../../components/Hero";
import SectionAboutMe from "../../components/SectionAboutMe";
import SectionContact from "../../components/SectionContact";

export const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedWorks />
            <SectionAboutMe />
            <SectionContact />
        </>
    );
};

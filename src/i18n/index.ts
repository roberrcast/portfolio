import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { en as commonEn, es as commonEs } from "./common";

// Hero translations
import { en as heroEn, es as heroEs } from "../components/Hero/translation";

// Featured
import {
    en as featuredEn,
    es as featuredEs,
} from "../components/Featured/translation";

// SectionAboutMe
import {
    en as aboutEn,
    es as aboutEs,
} from "../components/SectionAboutMe/translation";

// SectionContact
import {
    en as contactEn,
    es as contactEs,
} from "../components/SectionContact/translation";

// Works Page
import {
    en as worksPageEn,
    es as worksPageEs,
} from "../pages/Works/translation";

// Works Grid component (used in works page)
import {
    en as worksEn,
    es as worksEs,
} from "../components/WorksGrid/translation";

// About me header component (used in about page)
import {
    en as aboutHeaderEn,
    es as aboutHeaderEs,
} from "../components/AboutMeHeader/translation";

// About Me Description (used in about page)
import {
    en as aboutDescriptionEn,
    es as aboutDescriptionEs,
} from "../components/AboutMeDescription/translation";

// About Interests
import {
    en as interestsEn,
    es as interestsEs,
} from "../components/AboutMeInterests/translation";

// About Page CTA
import { en as ctaEn, es as ctaEs } from "../components/CTA/translation";

// Stack Page hero
import {
    en as stackHeroEn,
    es as stackHeroEs,
} from "../components/StackDescription/translation";

// Stack Grid Tools
import {
    en as stackToolsEn,
    es as stackToolsEs,
} from "../pages/Stack/translation";

// Form label and placeholders
import { en as formEn, es as formEs } from "../components/Form/translation";

// Contact Page heading and subheading
import {
    en as contactPageEn,
    es as contactPageEs,
} from "../pages/Contact/translations";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        // Register namespaces here
        resources: {
            en: {
                common: commonEn,
                hero: heroEn,
                featured: featuredEn,
                about: aboutEn,
                contact: contactEn,
                works: worksEn,
                worksPage: worksPageEn,
                aboutHeader: aboutHeaderEn,
                aboutDescription: aboutDescriptionEn,
                interests: interestsEn,
                aboutCta: ctaEn,
                stackHero: stackHeroEn,
                stackTools: stackToolsEn,
                form: formEn,
                contactPage: contactPageEn,
            },

            es: {
                common: commonEs,
                hero: heroEs,
                featured: featuredEs,
                about: aboutEs,
                contact: contactEs,
                works: worksEs,
                worksPage: worksPageEs,
                aboutHeader: aboutHeaderEs,
                aboutDescription: aboutDescriptionEs,
                interests: interestsEs,
                aboutCta: ctaEs,
                stackHero: stackHeroEs,
                stackTools: stackToolsEs,
                form: formEs,
                contactPage: contactPageEs,
            },
        },

        // Config options for i18next-browser-languagedetector
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },

        interpolation: {
            escapeValue: false, // React already protects against XSS
        },
    });

export default i18next;

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

// About me header component (used in about me page)
import {
    en as aboutHeaderEn,
    es as aboutHeaderEs,
} from "../components/AboutMeHeader/translation";

// About Me Description
import {
    en as aboutDescriptionEn,
    es as aboutDescriptionEs,
} from "../components/AboutMeDescription/translation";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        // Registramos los namespaces aquí
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
            },
        },

        // Opciones de configuración para i18next-browser-languagedetector
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },

        interpolation: {
            escapeValue: false, // React ya protege contra XSS
        },
    });

export default i18next;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { en as commonEn, es as commonEs } from "./common";

// Hero translations
import { en as heroEn, es as heroEs } from "../components/Hero/translation";
//Featured
import {
    en as featuredEn,
    es as featuredEs,
} from "../components/Featured/translation";

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
            },

            es: {
                common: commonEs,
                hero: heroEs,
                featured: featuredEs,
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

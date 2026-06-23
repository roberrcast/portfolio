markdown
# i18n Setup Guide (EN/ES) — Portfolio Project

## Stack
- **React + TypeScript + Vite**
- **react-router-dom** for navigation
- **i18next** + **react-i18next** for translations
- **i18next-browser-languagedetector** (optional) for auto-detecting browser language + persisting choice in `localStorage`

## Install

```bash
npm install i18next react-i18next
npm install i18next-browser-languagedetector
```

## Folder/File Structure

Translations live **next to the component they belong to**, following the existing pattern of `Index.tsx` + `styles.ts`. Each component gets its own `translation.ts`.

```
src/
  components/
    Header/
      Index.tsx
      styles.ts
      translation.ts
    Hero/
      Index.tsx
      styles.ts
      translation.ts
    FeaturedWorks/
      Index.tsx
      styles.ts
      translation.ts
    SectionAboutMe/
      Index.tsx
      styles.ts
      translation.ts
    SectionContact/
      Index.tsx
      styles.ts
      translation.ts
    LanguageToggle/
      Index.tsx
      styles.ts
  pages/
    Home/
      Index.tsx
    Works/
      Index.tsx
      translation.ts
    About/
      Index.tsx
      translation.ts
    Contact/
      Index.tsx
      translation.ts
  i18n/
    index.ts          <- i18next init, imports & merges every component's translation.ts
    common.ts          <- shared strings: nav labels, generic buttons, footer, lang toggle
```

### Rules of thumb
- **One `translation.ts` per top-level component**, not per tiny visual sub-piece.
- **Shared/reused strings** (nav, "Contact me", footer text, language toggle label) go in `i18n/common.ts` — never duplicate the same string across two component files.
- **Each component gets its own i18next namespace**, named after the component (`header`, `hero`, `featuredWorks`, `aboutMe`, `contact`, `common`). This avoids key collisions between components.

## File Shape: Component `translation.ts`

Plain exported objects — no i18next-specific code here. Example for `FeaturedWorks`:

```ts
// components/FeaturedWorks/translation.ts
export const en = {
  title: "Featured Works",
  viewAll: "View all projects",
};

export const es = {
  title: "Proyectos destacados",
  viewAll: "Ver todos los proyectos",
};
```

## File Shape: `i18n/common.ts`

```ts
export const en = {
  nav: { home: "Home", works: "Works", about: "About", contact: "Contact" },
  buttons: { readMore: "Read more", getInTouch: "Get in touch" },
  languageToggle: "Switch to Spanish",
};

export const es = {
  nav: { home: "Inicio", works: "Proyectos", about: "Sobre mí", contact: "Contacto" },
  buttons: { readMore: "Leer más", getInTouch: "Ponte en contacto" },
  languageToggle: "Switch to English",
};
```

## File Shape: `i18n/index.ts` (the wiring)

This is the **only** file that needs to know about i18next setup. Component files stay clean.

```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { en as commonEn, es as commonEs } from "./common";
import { en as headerEn, es as headerEs } from "../components/Header/translation";
import { en as heroEn, es as heroEs } from "../components/Hero/translation";
import { en as featuredEn, es as featuredEs } from "../components/FeaturedWorks/translation";
import { en as aboutMeEn, es as aboutMeEs } from "../components/SectionAboutMe/translation";
import { en as contactEn, es as contactEs } from "../components/SectionContact/translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        common: commonEn,
        header: headerEn,
        hero: heroEn,
        featuredWorks: featuredEn,
        aboutMe: aboutMeEn,
        contact: contactEn,
      },
      es: {
        common: commonEs,
        header: headerEs,
        hero: heroEs,
        featuredWorks: featuredEs,
        aboutMe: aboutMeEs,
        contact: contactEs,
      },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
```

Import this once in `main.tsx`:

```ts
import "./i18n";
```

## Using Translations in a Component

```tsx
// components/FeaturedWorks/Index.tsx
import { useTranslation } from "react-i18next";

export const FeaturedWorks = () => {
  const { t } = useTranslation("featuredWorks");

  return (
    
      {t("title")}
      {t("viewAll")}
    
  );
};
```

## Language Toggle Component

```tsx
// components/LanguageToggle/Index.tsx
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { t, i18n } = useTranslation("common");

  const toggleLanguage = () => {
    const next = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(next);
  };

  return (
    <button onClick={toggleLanguage} aria-label={t("languageToggle")}>
      {i18n.language === "en" ? "ES" : "EN"}
    
  );
};
```

Place this inside `Header` (or `Footer`) since it needs to be visible on every page.

## Persistence

`i18next-browser-languagedetector` handles this automatically:
- Detects browser language on first visit.
- Saves the user's manual choice to `localStorage`.
- Reads it back on next visit/reload — no extra code needed beyond `.use(LanguageDetector)` in `i18n/index.ts`.

## Adding a New Component or Page Later

1. Create `translation.ts` next to the new component, exporting `en` and `es` objects.
2. Import both into `i18n/index.ts` and add them under a new namespace key.
3. Use `useTranslation("namespaceName")` inside the component.

That's the entire workflow — no other files need to change.

## 
Optional Future Enhancement (Not Recommended Yet)

URL-based language routing (`/en/about`, `/es/about`) is possible with `react-router-dom` but adds real complexity (route wrapping, redirects, SEO considerations). For a personal portfolio, `localStorage` persistence is a better effort-to-payoff ratio. Skip this unless there's a specific reason to add it.




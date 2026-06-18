# Key Technical Mechanics
How emails are delivered: The user writes their personal email inside the form. When submitted, Netlify's mail server intercepts the payload. Netlify then sends a notification email from their system infrastructure to your personal email inbox.

The Reply-To Header Advantage: Netlify automatically extracts the value submitted under the email input (name="correo"). It attaches this value as the Reply-To header in the notification email you receive.

Replying directly: When you open the notification email in your personal inbox (Gmail, Outlook, etc.) and hit "Reply", your email client will automatically compose a message directly to the user's personal email, bypassing the need to copy-paste.

Deliverability & Spam Control: This standard architecture ensures that your notifications do not violate SPF or DKIM security policies, which would normally happen if a web platform tried to spoof or send an email masquerading as the user's actual address.

## Netlify Dashboard Configuration
Deploy the site containing the code snippet above to Netlify.

Log into your Netlify Dashboard and navigate to Site configuration > Forms.

Under Form notifications, click Add notification and choose Email notification.

Set the destination to your personal email address and select the form name (contacto).

1. Dynamic Language Toggle (EN / ES)
Overview
For a personal portfolio or a single-page app, using a client-side dictionary object avoids heavy internationalization framework overhead while maintaining native, responsive execution times.

React + TypeScript Implementation
Below is a robust blueprint demonstrating dictionary mapping, UI updates, state perseverance through localStorage, and an essential programmatic update to the global HTML accessibility tag (lang).

### Step A: Establish the Translations Dictionary (translations.ts)
TypeScript

```ts
export interface Dictionary {
  title: string;
  subtitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
}

export const translations: Record<'en' | 'es', Dictionary> = {
  en: {
    title: "The Open Gallery",
    subtitle: "Explore a curated virtual collection of world-class artwork.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send Message"
  },
  es: {
    title: "The Open Gallery",
    subtitle: "Explora una colección virtual de obras de arte.",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    formSubmit: "Enviar Mensaje"
  }
};
```
### Step B: Build the Component Logic (LanguageToggleApp.tsx)
TypeScript

```ts
import React, { useState, useEffect } from 'react';
import { translations } from './translations';

type Language = 'en' | 'es';

export const PortfolioPage: React.FC = () => {
  // Initialize state from localStorage to remember choice on refresh, default to Spanish ('es')
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem('user-language');
    return (savedLang === 'en' || savedLang === 'es') ? savedLang : 'es';
  });

  // Synchronize state changes to browser storage and HTML document attributes
  useEffect(() => {
    localStorage.setItem('user-language', lang);
    // CRITICAL FOR SEO & ACCESSIBILITY: Update document root attribute dynamically
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  // Extract the current dictionary slice
  const t = translations[lang];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{t.title}</h1>
        
        {/* Language Toggle Button */}
        <button 
          onClick={toggleLanguage}
          style={{ padding: '8px 16px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {lang === 'es' ? 'Switch to English 🇺🇸' : 'Cambiar a Español 🇲🇽'}
        </button>
      </header>

      <main>
        <p>{t.subtitle}</p>

        {/* Integrated Translated Form Setup */}
        <form name="contacto" method="POST" data-netlify="true" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <input type="hidden" name="form-name" value="contacto" />
          
          <label>{t.formName}:</label>
          <input type="text" name="nombre" required />

          <label>{t.formEmail}:</label>
          <input type="email" name="correo" required />

          <label>{t.formMessage}:</label>
          <textarea name="mensaje" required></textarea>

          <button type="submit" style={{ marginTop: '10px', padding: '10px' }}>
            {t.formSubmit}
          </button>
        </form>
      </main>
    </div>
  );
};
```
## Key Technical Mechanics
Dynamic DOM Hydration: Text nodes are decoupled from the hardcoded markup. Components pull structural layout placeholders dynamically from variable t which matches the active dictionary reference.

State Persistence (localStorage): Saving language selection inside storage ensures that whenever a user returns or refreshes the page, their selected localization stays intact.

SEO & Screen Reader Compliance: Updating document.documentElement.lang = lang dynamically is vital. It alerts web crawlers (like Googlebot) and assistive technologies that the visual semantics of the content have transitioned dynamically to a new language.
"""

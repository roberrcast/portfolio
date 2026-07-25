# Roberto Rodríguez — Frontend Developer Portfolio

Welcome to the source code for my personal portfolio! This project serves as both a showcase of my frontend development capabilities and a central hub for my professional work, built with modern web technologies and a focus on performance, aesthetics, and accessibility.

## 🚀 Live Site

[Checkout my portfolio](https://robrodriguez.dev)

## 🛠️ Tech Stack

This project is built using a robust, modern frontend stack:

- **Framework:** React 19 + Vite
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Styled Components (CSS-in-JS)
- **Routing:** React Router v7
- **Internationalization (i18n):** i18next & react-i18next (English / Spanish)
- **Deployment:** Netlify

### ✨ Key Features

**"Digital Craftsman" Aesthetic:** A custom, dark-mode-first design system utilizing rich surface colors, interactive micro-animations, and a highly polished UI that feels premium.

- **Full Internationalization:** Seamlessly toggle between English and Spanish. Language preferences are automatically detected via browser settings
  and persisted using `localStorage`.
- **State-Driven Contact & Hire Forms:** Fully custom forms built without external libraries. Features strict Regex email validation, real-time error
  clearing, and a state-driven micro-interaction for the submission buttons.
- **Flawless Navigation:** Implemented a custom routing wrapper that intercepts React Router navigations to ensure the browser instantly scrolls to the
  top of the viewport on route changes.
- **Component-Driven Architecture:** A highly modular file structure where translations (`translation.ts`), styles (`styles.ts`), and logic are scoped
  tightly to their respective components.

## 📁 Project Structure

```text
src/
    ├── assets/         # Static assets, images, and icons
    ├── common/         # Reusable, shared UI components (Buttons, Links)
    ├── components/     # Feature-specific components (Hero, ContactForm, etc.)
    ├── hooks/          # Custom React hooks (e.g., useContactForm, useReveal)
    ├── i18n/           # Global i18n setup and shared translations
    ├── pages/          # Top-level route components:
    │   ├── Home/
    │   ├── Works/
    │   ├── About/
    │   ├── Stack/
    │   ├── Contact/
    │   └── HireMe/
    ├── styles/         # Global styles, Theme providers, and mixins
    ├── App.tsx         # Root routing configuration & Scroll Wrapper
    └── main.tsx        # React entry point & i18n initialization
```

## 💻 Running Locally

If you'd like to clone and run this project locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/roberrcast/portfolio.git
   cd portfolio
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. Build for production:

```bash
   npm run build
```

## 🧠 What I Learned

Building this iteration of my portfolio allowed me to deepen my understanding of:

- TypeScript: Enforcing strict types across components, form events, and styled-component themes.
- Custom Hooks: Abstracting complex logic (like form state and validation rules) out of the UI layer to keep components clean and declarative.
- Router Lifecycle: Managing the React Router DOM lifecycle to control scroll behavior and page transitions.

## 📬 Contact

The main ways to reach me.

- Email: [rob@robrodriguez.dev](mailto:rob@robrodriguez.dev)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/roberto-rodriguez-frontend-engineer)
- GitHub: [roberrcast](https://github.com/roberrcast)

Crafted with love by Roberto Rodríguez.

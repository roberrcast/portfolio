import { useLayoutEffect, type PropsWithChildren } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { useReveal } from "./hooks/useReveal";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { WorksPage } from "./pages/Works";
import { About } from "./pages/About";
import { StackPage } from "./pages/Stack";
import { Contact } from "./pages/Contact";
import { HireMe } from "./pages/HireMe";
import { trackPageview } from "./lib/analytics";
import { CookieConsentBanner } from "./CookieConsentBanner";

const Wrapper = ({ children }: PropsWithChildren) => {
    const location = useLocation();

    useLayoutEffect(() => {
        // Scroll to top of page
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        // track page view GA4
        trackPageview(location.pathname);
    }, [location.pathname]);

    return children;
};

function App() {
    useReveal();
    return (
        <>
            <Header />
            <main>
                <Wrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/works" element={<WorksPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/stack" element={<StackPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/hire" element={<HireMe />} />
                    </Routes>
                </Wrapper>
            </main>
            <Footer />
            <CookieConsentBanner />
        </>
    );
}

export default App;

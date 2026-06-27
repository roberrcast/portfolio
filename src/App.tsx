import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { useReveal } from "./hooks/useReveal";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { WorksPage } from "./pages/Works";
import { About } from "./pages/About";

function App() {
    useReveal();
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<WorksPage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { useReveal } from "./hooks/useReveal";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { WorksPage } from "./pages/Works";

function App() {
    useReveal();
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<WorksPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;

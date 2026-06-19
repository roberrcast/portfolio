import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { useReveal } from "./hooks/useReveal";
import { Home } from "./pages/Home";

function App() {
    useReveal();
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </>
    );
}

export default App;

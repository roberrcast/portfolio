import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { useReveal } from "./hooks/useReveal";

function App() {
    useReveal();
    return (
        <>
            <Header />
            <main>
                <Hero />
            </main>
        </>
    );
}

export default App;

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { HowItHelps } from "./components/HowItHelps/HowItHelps";
import { Users } from "./components/Users/Users";
import { Trust } from "./components/Trust/Trust";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <HowItHelps />
            <Users />
            <Trust />
            <Footer />
        </main>
    );
};

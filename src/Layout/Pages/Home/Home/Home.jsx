import HorizontalLine from "../../Shared/HorizontalLine/HorizontalLine";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="min-h-screen pt-[4rem]">
            <Hero></Hero>
            <HorizontalLine></HorizontalLine>
            <Skills></Skills>
            <HorizontalLine></HorizontalLine>
            <Projects></Projects>
            <HorizontalLine></HorizontalLine>
            <Contact></Contact>
        </div>
    );
};

export default Home;
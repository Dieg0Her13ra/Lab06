import Image from "next/image";
import HeaderModule from "./Components/Header/Header";
import HeroModule from "./Components/Hero/Hero";
import InterestModule from "./Components/InterestSection/InterestSection";
import CV from "./Components/CV/CV";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
export default function Home() {
  return (
    <>
    <HeaderModule />
    <HeroModule/>
    <InterestModule/>
    <CV/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

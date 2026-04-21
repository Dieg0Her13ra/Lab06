import Image from "next/image";
import HeaderModule from "./Components/Header/Header";
import HeroModule from "./Components/Hero/Hero";
import InterestModule from "./Components/InterestSection/InterestSection";
import CV from "./Components/CV/CV";
export default function Home() {
  return (
    <>
    <HeaderModule />
    <HeroModule/>
    <InterestModule/>
    <CV/>
    </>
  );
}

import "../globals.css";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Tittle from "../components/tittle/Tittle";
import Slider from "../components/slider/Slider";
import ButtonBack from "../components/buttonBackground/ButtonBack";
import Carousel from "../components/carousel/Carousel";


export default async function Home() {
  return (
    <>
      <ButtonBack />
      <Tittle />

      {/* @ts-expect-error Server Component */}
      <Projects />

      {/* @ts-expect-error Server Component */}
      <Skills />
    </>
  );
}

import "../globals.css";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Tittle from "../components/tittle/Tittle";

import ButtonBack from "../components/buttonBackground/ButtonBack";
import { getProjects } from "@/sanity/sanity-utils";
import Slider from "../components/slider/Slider";
import Carousel from "../components/carousel/Carousel";


export default async function Home() {
  const projects = await getProjects() || "";
  return (
    <>
      {/* <ButtonBack /> */}
      <Tittle />
      {/* <Carousel projects={projects} /> */}
      {/* <Slider projects={projects} /> */}
      {/* @ts-expect-error Server Component */}
      <Projects />
      {/* @ts-expect-error Server Component */}
      <Skills />
    </>
  );
}

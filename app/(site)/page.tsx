import "../globals.css";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Tittle from "../components/tittle/Tittle";

import ButtonBack from "../components/buttonBackground/ButtonBack";
import { getProjects, getSkills } from "@/sanity/sanity-utils";
import Slider from "../components/slider/Slider";
import Carousel from "../components/carousel/Carousel";
import SkillsCarousel from "../components/carousel/SkillsCarousel";


export default async function Home() {
  const projects = await getProjects() || "";
  const RecentProjects = 
  ["Node + React todo", "todoTS", "movieSearchReact", "Hackathon infojobs", "App Flights ", "Management App"];
  const newPro = projects
    .filter((project) => RecentProjects
    .includes(project?.name))
    .sort((a, b) => RecentProjects.indexOf(a.name) - RecentProjects.indexOf(b.name));

  const skills = await getSkills();
  const skill = skills || "";
  return (
    <>
      {/* <ButtonBack /> */}
      <Tittle />
      
      <Carousel projects={newPro} />
      <SkillsCarousel skills={skill} />

      {/* <Slider projects={projects} /> */}
      {/* @ts-expect-error Server Component
      <Projects /> */}
      {/* @ts-expect-error Server Component
      <Skills /> */}
    </>
  );
}

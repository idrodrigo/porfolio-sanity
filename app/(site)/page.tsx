import "../globals.css";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Tittle from "../components/tittle/Tittle";

import ButtonBack from "../components/buttonBackground/ButtonBack";
import { getAboutImage, getProjects, getSkills } from "@/sanity/sanity-utils";
import Slider from "../components/slider/Slider";
import Carousel from "../components/carousel/Carousel";
import SkillsCarousel from "../components/carousel/SkillsCarousel";
import Image from "next/image";
import AboutContent from "../components/AboutHighlight/AboutContent";


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

  const me = await (await getAboutImage()).image

  return (
    <>
      {/* <ButtonBack /> */}
      { <div className="text-lg md:mt-10 mt-8  font-light flex flex-col items-center ">
        <div className="text-center md:pb- pb-">
          
            <>
              <Image
                src={me}
                alt="Rodrigo Medina profile picture"
                width={125}
                height={125}
                className="border-black rounded-2xl  inline-block"
              />
              <p className="font-Comic font-semibold md:text-4xl text-2xl md:my-3">Rodrigo Medina</p>
              <Tittle />
            </>
          

        </div>



      </div>
      }
      {/* <Tittle /> */}

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

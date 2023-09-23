import "../globals.css";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Tittle from "../components/tittle/Tittle";

import ButtonBack from "../components/buttonBackground/ButtonBack";
import { getPage, getProjects, getSkills } from "@/sanity/sanity-utils";
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

  const page = await getPage('about');
  const title = page?.title || "";
  const image = page?.image || "";

  return (
    <>
      {/* <ButtonBack /> */}
      { image &&   <div className=" mx-2 text-lg md:mt-10 mt-8 md:mx-32 font-light flex flex-col items-center ">
      <div className="text-center md:pb- pb-">
        {image && (
          <>
            <Image
              src={image}
              alt={title}
              width={125}
              height={125}
              className="border-black  rounded-full inline-block"
            />
            <p className="font-Comic font-medium md:text-4xl text-2xl md:my-3">Rodrigo Medina</p>
            {/* <p className="md:text-2xl text-lg text-blue-500 font-medium">Hello, I&apos;m Software Developer</p>  */}
            <Tittle />
          </>
        )}

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
      <footer
      className="nav-container border-t border-t-gray-200 md:mx-14 mx-12 text-zinc-500"
      >
        <section className="flex justify-end flex-grow font-Roboto">
          <a
            href="https://www.linkedin.com/in/rodrigo-medina-5b6b1b1b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav  text-blue-500 px-3 transition hover:underline decoration-teal-400"
          >
            Linkedin
          </a>
          <p>|</p>
          <a
            href="https://www.linkedin.com/in/rodrigo-medina-5b6b1b1b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav font-Roboto text-blue-500 px-3 transition hover:underline decoration-teal-400"
          >
            Github
          </a>
          <p>|</p>
          <a
            href="https://www.linkedin.com/in/rodrigo-medina-5b6b1b1b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav font-Roboto text-blue-500 px-3 transition hover:underline decoration-teal-400"
          >
             Mail
          </a>
          <section className="flex-1 flex justify-end">
          <p>©Rodrigo Medina</p>
          </section>
       </section>




   
      </footer>
    </>
  );
}

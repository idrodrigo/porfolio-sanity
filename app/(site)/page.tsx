import "../globals.css";
import Tittle from "../components/tittle/Tittle";
import { getAboutImage, getProjects, getSkills } from "@/sanity/sanity-utils";
import Carousel from "../components/carousel/Carousel";
import SkillsCarousel from "../components/carousel/SkillsCarousel";
import Image from "next/image";



export default async function Home() {

  const projects = await getProjects() || "";

  const RecentProjects = ["ClinicApi", "Node + React todo", "todoTS", "movieSearchReact", "App Flights ", "Management App"];

  const newPro = projects
    .filter((project) => RecentProjects.includes(project?.name))
    .sort((a, b) => RecentProjects.indexOf(a.name) - RecentProjects.indexOf(b.name));

  const skills = await getSkills();

  const me = await (await getAboutImage()).image

  return (
    <>
      {<div className="text-lg md:mt-10 mt-8  font-light flex flex-col items-center ">
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
      <SkillsCarousel skills={skills} />

      {/* <Slider projects={projects} /> */}
      {/* @ts-expect-error Server Component
      <Projects /> */}
      {/* @ts-expect-error Server Component
      <Skills /> */}

    </>
  );
}

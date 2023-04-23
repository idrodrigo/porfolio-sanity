import { getProjects, getSkills } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import Skills from "../components/skills/Skills";

export default async function Home() {
  const projects = await getProjects();
  const pro = projects || "";

  const skills = await getSkills();
  const skill = skills || "";
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-center  md:text-left">
        Hello I&apos;m{" "}
        <span
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 transition
          bg-clip-text text-transparent hover:from-blue-700 hover:via-green-400 hover:to-violet-500"
        >
          Rodrigo
        </span>
      </h1>

      <p className="text-center  md:text-left  mt-2 text-xl text-green-400 font-light">
        Java || JavaScript <br /> Back end || Front end Developer
      </p>

      <h2 className="img-pro mt-2 font-bold text-3xl underline decoration-red-600 decoration-wavy text-center">
        Projects:
      </h2>
      <div className="mx-2 md:mx-6 lg:mx-10 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
        {pro.reverse().map((project) => {
          const slug = project?.slug || "";
          const image = project?.image || "";
          const name = project?.name || "";
          const tools = project?.tags || [];
          return (
            <Link
              href={`/projects/${slug}`}
              key={project._id}
              className="slide-top shadow-lg border border-gray-100 rounded-3xl p-1 hover:shadow-inner
                      hover:transition"
            >
              <div className="p-2 text-center flex justify-center">
                <div
                  className="text-xl font-extrabold bg-gradient-to-r 
        from-green-400 to-blue-700 bg-clip-text text-transparent"
                >
                  {name}
                </div>
              </div>
              <div className="mx-2 grid justify-center ">
                {project.image && (
                  <Image
                    src={image}
                    alt={name}
                    width={150}
                    height={1080}
                    className="object-cover blur-in rounded-md align-middle "
                  />
                )}
              </div>

              <div className="mx-4 my-4 flex-wrap flex items-center justify-around gap-x-auto gap-y-3 text-sm text-gray-500">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="border border-blue-100/30 shadow-inner shadow-blue-500/20 rounded-full px-3 "
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      <h2 className="img-pro mt-8 font-bold text-3xl underline decoration-red-600 decoration-wavy text-center">
        Skills:
      </h2>

      <div className="mx-2 md:mx-6 lg:mx-10 mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-8 my-10">
        {skill.reverse().map((ski) => {
          const image = ski?.image || "";
          const skill = ski?.skill || "";
          const url = ski?.url || "";
          return (
            <Link href={`${url}`} key={ski._id} className=" ">
              <div className=" text-center flex justify-center">
                <div
                  className="text-xl font-extrabold bg-gradient-to-r 
        from-green-400 to-blue-700 bg-clip-text text-transparent"
                >
                  {skill}
                </div>
              </div>

              <div className="mx-2 grid justify-center ">
                {ski.image && (
                  <Image
                    src={image}
                    alt={skill}
                    width={300}
                    height={20}
                    className="vibrate object-cover img-pro rounded-md align-middle"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

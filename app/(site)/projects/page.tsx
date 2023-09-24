import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";
import Subtittle from "@/app/components/subtittle/Subtittle";
import { Project } from "@/types/project";


export default async function Projects() {
  const projects:Project[] = await getProjects();
  const pro = projects || [];
  return (
    <section className="md:mx-6 mx-6 ">
      <Subtittle subtittle="Projects:" marginTop={'mt-8'} />
      {/* <Carousel /> */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 pb-5">
        {pro.reverse().map((project) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="slide-top shadow-lg border border-gray-100 rounded-3xl p-1 hover:shadow-inner
                  hover:transition flex flex-col justify-between"
            >
              <div className="p-2 text-center flex justify-center">
                <div
                  className="text-xl font-extrabold bg-gradient-to-r 
    from-green-400 to-blue-700 bg-clip-text text-transparent"
                >
                  {project.name}
                </div>
              </div>
              <div className="mx-2 grid justify-center ">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={128.7}
                    height={260.4}
                    className="object-cover rounded-md align-middle animate-shake"
                  />
                )}
              </div>

              <div className="mx-4 my-4 flex-wrap flex items-center justify-around gap-x-auto gap-y-3 text-sm text-gray-500">
                {project.tags.map((tool) => (
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
    </section>
  );
}
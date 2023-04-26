import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Projects() {
  const projects = await getProjects();
  const pro = projects || "";
  return (
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
                  className="object-cover  rounded-md align-middle "
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
  );
}

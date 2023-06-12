import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <div className="sm:flex sm:justify-between">
        <h2
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"
        >
          {project.name}
        </h2>
        <div className="py-5 flex gap-5 justify-center items-center text-center text-white">
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className=" border-b-[5px] border-gray-200 rounded-xl py-2 border  hover:border-b-[2px] bg-violet-400 w-32"
          >
            Live Demo
          </a>

          <a
            href={project.urlcode}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-[5px] border-b-gray-200 rounded-xl py-2 border  hover:border-b-[2px] bg-green-400 w-32 "
          >
            Source Code
          </a>
        </div>
      </div>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <div className="mx-2 grid justify-center ">
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            width={225}
            height={1080}
            className="mt-1 mb-8 object-cover  rounded-md align-middle "
          />
        )}
      </div>
    </div>
  );
}

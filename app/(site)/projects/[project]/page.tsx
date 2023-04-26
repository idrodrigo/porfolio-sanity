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
      <div className="sm:flex sm:justify-between sm:items-center">
        <h1
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"
        >
          {project.name}
        </h1>
        <div className="py-6">
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-10 rounded-lg text-white font-bold py-3 px-4 whitespace-nowrap hover:bg-violet-500  bg-cyan-500 shadow-lg shadow-cyan-500/50"
          >
            View Project
          </a>

          <a
            href={project.urlcode}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg text-white font-bold py-3 px-4 whitespace-nowrap hover:bg-green-500  bg-cyan-500 shadow-lg shadow-cyan-500/50"
          >
            View Code
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

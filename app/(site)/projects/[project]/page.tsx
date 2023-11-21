import Subtittle from "@/app/components/subtittle/Subtittle";
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
    <div className="mx-6 md:mx-8 mt-10">
      <div className="sm:flex sm:justify-between md:mx-16 mx-4">
        <h2
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold flex justify-center items-center"
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
      <div className="md:my-24 my-12 md:mx-16 mx-4 flex flex-col md:flex-row items-center justify-center md:gap-16 font-thin">
        <div className="mx-2 grid justify-center ">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={241.31}
              height={488.25}
              className="mt-1 mb-8 object-cover  rounded-md align-middle "
            />
          )}
        </div>
        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={project.content} />
        </div>
      </div>
    </div>
  );
}

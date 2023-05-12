"use client";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Slider() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 340;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 340;
  };

  const data = await getProjects();

  return (
    <>
      <div className="relative flex items-center">
        <div></div>
        <MdChevronLeft
          className="cursor-pointer img-pro text-violet-500 hover:text-green-400"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="inline-block my-5 mx-5 slide-top shadow-lg border border-gray-100 rounded-3xl p-1 hover:shadow-inner transition min-w-[300px] max-w-[300px] min-h-[450px]"
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
                    width={150}
                    height={1080}
                    className=""
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
          ))}
        </div>

        <MdChevronRight
          className="img-pro  cursor-pointer  hover:text-violet-500 text-green-400"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

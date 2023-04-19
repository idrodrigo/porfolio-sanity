import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default async function Home() {
  const projects = await getProjects();
  const pro = projects || "";
  return (
    <div>
      <h1 className="text-7xl font-extrabold ">
        Hello I&apos;m{" "}
        <span
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 
          bg-clip-text text-transparent"
        >
          Rodrigo
        </span>
      </h1>

      <p className=" mt-5 text-xl text-green-400 font-light">
        Java || JavaScript <br /> Back end || Front end Developer
      </p>

      <h2 className="mt-12 font-bold text-3xl underline decoration-red-600 decoration-wavy">
        Projects:
      </h2>
      <div className="mx-2 md:mx-6 lg:mx-10 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {pro.map((project) => {
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
              <div className="mt-6 mx-4">
                {project.image && (
                  <Image
                    src={image}
                    alt={name}
                    width={750}
                    height={300}
                    className="object-cover rounded-md "
                  />
                )}
              </div>
              <div className="p-4 text-center flex justify-center">
                <div
                  className="text-xl font-extrabold bg-gradient-to-r 
        from-green-400 to-blue-700 bg-clip-text text-transparent"
                >
                  {name}
                </div>
              </div>

              <div className="mx-4 mb-1 flex-wrap flex items-center justify-around gap-x-auto text-sm text-gray-500">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="border border-blue-100/30 shadow-inner shadow-blue-500/20 rounded-full px-3 py-1 mb-3"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

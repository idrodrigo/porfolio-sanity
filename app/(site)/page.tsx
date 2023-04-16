import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

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

      <h2 className="mt-16 font-bold text-gray-700 text-3xl underline decoration-red-600 decoration-wavy">
        Projects:
      </h2>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pro.map((project) => {
          const slug = project?.slug || "";
          const image = project?.image || "";
          const name = project?.name || "";
          return (
            <Link
              href={`/projects/${slug}`}
              key={project._id}
              className="slide-top shadow-xl rounded-lg p-1 hover:border-4
                      hover:border-green-300 transition "
            >
              {project.image && (
                <Image
                  src={image}
                  alt={name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border "
                />
              )}
              <div className="mt-6 font-light text-blue-500 text-xl">
                {name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

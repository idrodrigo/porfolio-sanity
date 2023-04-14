import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const title = page?.title || "";
  const content = page?.content || "";
  const linkedin = page?.linkedin || "";
  const git = page?.git || "";
  const correo = page?.correo || "";
  const image = page?.image || "";

  return (
    <div>
      <h1
        className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 
         bg-clip-text text-transparent text-5xl drop-shadow font-extrabold  justify-self-center"
      >
        {title}
      </h1>
      <div className="text-lg mt-10 md:mx-52 font-light">
        <PortableText value={content} />
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="mt-10 border border-black object-cover rounded-xl mb-10"
        />

        <h1
          className="bg-black 
         bg-clip-text text-transparent text-2xl drop-shadow font-light mb-10 underline decoration-indigo-500 decoration-wavy decoration-2 hover:decoration-green-500 hover:decoration-wavy hover:decoration-2"
        >
          <a href={`https://www.${linkedin}`} target="_blank">
            {linkedin}
          </a>
        </h1>

        <h1
          className="bg-black
         bg-clip-text text-transparent text-2xl drop-shadow font-light mb-10 underline decoration-indigo-500 decoration-wavy decoration-2 hover:decoration-green-500 hover:decoration-wavy hover:decoration-2"
        >
          <a href={`https://www.${git}`} target="_blank">
            {git}
          </a>
        </h1>

        <h1
          className="bg-black 
         bg-clip-text text-transparent text-2xl drop-shadow font-light underline decoration-indigo-500 decoration-wavy decoration-2 hover:decoration-green-500 hover:decoration-wavy hover:decoration-2"
        >
          <a href={`https://www.${correo}`} target="_blank">
            {correo}
          </a>
        </h1>
      </div>
    </div>
  );
}

import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
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

  return (
    <div className="grid">
      <h1
        className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 
         bg-clip-text text-transparent text-5xl drop-shadow font-extrabold  justify-self-center"
      >
        {title}
      </h1>
      <div className="text-lg text-blue-700 mt-16 mx-52 grid">
        <PortableText value={content} />

        <h1
          className="bg-blue-700 
         bg-clip-text text-transparent text-2xl drop-shadow font-extrabold mb-10 justify-self-center"
        >
          <a href={linkedin} target="_blank">
            {linkedin}
          </a>
        </h1>

        <h1
          className="bg-blue-700 
         bg-clip-text text-transparent text-2xl drop-shadow font-extrabold mb-10 justify-self-center"
        >
          <a href={git} target="_blank">
            {git}
          </a>
        </h1>

        <h1
          className="bg-blue-700 
         bg-clip-text text-transparent text-2xl drop-shadow font-extrabold justify-self-center"
        >
          <a href={correo} target="_blank">
            {correo}
          </a>
        </h1>
      </div>
    </div>
  );
}

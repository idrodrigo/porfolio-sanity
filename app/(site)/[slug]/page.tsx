import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const title = page?.title || "";
  const content = page?.content || "";
  const image = page?.image || "";

  const socials = [
    {
      url: page?.linkedin || "",
      img: page?.imgLinkedin || "",
    },
    {
      url: page?.git || "",
      img: page?.imgGit || "",
    },
    {
      url: page?.correo || "",
      img: page?.imgCorreo || "",
    },
  ];

  return (
    <div>
      <div className="flex">
        <h1
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 
         bg-clip-text text-transparent text-5xl drop-shadow font-extrabold  justify-self-center"
        >
          {title}
        </h1>
      </div>
      <div className="text-lg mt-10 md:mx-52 font-light text-center justify-center">
        <PortableText value={content} />
        <Image
          src={image}
          alt={title}
          width={600}
          height={1080}
          className="mt-10  h-80 border border-black object-cover rounded-xl mb-10 mx-auto"
        />
      </div>
      <div className="mx-2 md:mx-6 lg:mx-10 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
        {socials.map((social) => {
          return (
            <Link
              href={`https://www.${social.url}`}
              key={social.url}
              className=" "
              target="_blank"
            >
              <div className=" text-center flex justify-center mb-5">
                <div
                  className="text-xl font-extrabold bg-gradient-to-r 
        from-green-400 to-blue-700 bg-clip-text text-transparent"
                >
                  {social.url}
                </div>
              </div>

              <div className="mx-2 grid justify-center ">
                {social.img && (
                  <Image
                    src={social.img}
                    alt={social.url}
                    width={120}
                    height={20}
                    className="vibrate object-cover img-pro rounded-md align-middle"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

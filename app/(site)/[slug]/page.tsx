import Subtittle from "@/app/components/subtittle/Subtittle";
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
    <div className="md:mx-14 mx-8">
      {/* <div className="flex">
        <h2
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 
         bg-clip-text text-transparent text-5xl drop-shadow font-extrabold  justify-self-center"
        >
          {title}
        </h2>
      </div> */}

      <Subtittle subtittle={title} marginTop={'0'} />

      <div className=" mx-2 text-lg md:mt-10 md:mx-32 font-light flex flex-col items-center">
        {image && (
          <Image
            src={image}
            alt={title}
            width={250}
            height={500}
            className="mt-10 md:mt-0 h-80  border-black  rounded-2xl mb-10 inline-block"
          />
        )}

        {content && (
          <div className="self-center  md:mx-8">
            <PortableText value={content} />
          </div>
        )}

      </div>
      { 
        socials[0].url && <div className="mx-2 md:mx-6 lg:mx-10 mt-16 md:mt-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
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

              <div className="mx-2 grid justify-center">
                {social.img && (
                  <Image
                    src={social.img}
                    alt={social.url}
                    width={120}
                    height={120}
                    className="vibrate object-cover img-pro rounded-md align-middle"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
      }
   
    </div>
  );
}

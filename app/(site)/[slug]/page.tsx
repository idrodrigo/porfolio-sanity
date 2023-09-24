import AboutContent from "@/app/components/AboutHighlight/AboutContent";
import Hl from "@/app/components/AboutHighlight/Highlight";
import Subtittle from "@/app/components/subtittle/Subtittle";
import { getPage } from "@/sanity/sanity-utils";
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
    <>
      {
        page && <section>
          {!image &&
            <Subtittle subtittle={title} marginTop={'mt-10'} />
          }

          {image && <div className="md:mx-32 mx-2 text-lg md:my-10 my-8 font-light flex flex-col items-center ">
            <div className="text-center md:pb-6 pb-3">
              {image && (
                <>
                  <Image
                    src={image}
                    alt={title}
                    width={125}
                    height={125}
                    className="border-black  rounded-full inline-block"
                  />
                  <p className="font-Comic font-semibold md:text-4xl text-2xl md:my-3">Rodrigo Medina</p>
                  <p className="md:text-2xl text-lg text-blue-500 font-medium">Software Developer</p>
                </>
              )}

            </div>

            {content && (
              <div className="self-center  md:mx-[120px] border-t border-gray-200 pt-6">
                {/* <PortableText value={content} /> */}
                <AboutContent />
              </div>
            )}

          </div>
          }
          {
            socials[0].url && <div className="mx-2 md:mx-6 lg:mx-10 mt-8 md:mt-64 grid 
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-y-5 gap-y-16">
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

        </section>
      }
    </>
  );
}

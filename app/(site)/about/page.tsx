import AboutContent from "@/app/components/AboutHighlight/AboutContent";
import { getAbout } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Page() {
  const about = await getAbout();

  return (
    <>
      {
        about &&
        <section>
          {<div className="md:mx-32 mx-2 text-lg md:my-10 my-8 font-light flex flex-col items-center ">
            <div className="text-center md:pb-6 pb-3">
              {
                <>
                  <Image
                    src={about.image}
                    alt={about.alt}
                    width={125}
                    height={125}
                    className="border-black  rounded-full inline-block"
                  />
                  <p className="font-Comic font-semibold md:text-4xl text-2xl md:my-3">Rodrigo Medina</p>
                  <p className="md:text-2xl text-lg text-blue-500 font-medium">Software Developer</p>
                </>
              }

            </div>

            {
              <div className="self-center  md:mx-[120px] border-t border-gray-200 pt-6">
                {/* <PortableText value={content} /> */}
                <AboutContent />
              </div>
            }

          </div>
          }
        </section>
      }
    </>
  );
}
import Subtittle from "@/app/components/subtittle/Subtittle";
import { getContact } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const contact = await getContact();

  const socials = [
    {
      url: contact?.linkedin.slice(12) || "",
      img: contact?.imgLinkedin || "",
    },
    {
      url: contact?.git.slice(12) || "",
      img: contact?.imgGit || "",
    },
    {
      url: contact?.correo || "",
      img: contact?.imgCorreo || "",
    },
  ];

  return (
    <>
      {
        contact &&
        <section>
          {<Subtittle subtittle={"Contact:"} marginTop={'mt-10'} />}
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
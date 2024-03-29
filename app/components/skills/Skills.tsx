import React from "react";
import { getSkills } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Subtittle from "../subtittle/Subtittle";

export default async function Skills() {
  const skills = await getSkills();
  const skill = skills || "";
  return (
    <>
      <Subtittle subtittle="Skills:" marginTop="mt-2" />
      <div className="mx-6 md:mx-8 lg:mx-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x- lg:gap-x- gap-y-8 my-2 pb-12">
        {skill.reverse().map((ski) => {
          const image = ski?.image || "";
          const skill = ski?.skill || "";
          const url = ski?.url || "";
          return (
            <Link href={`${url}`} key={ski._id} className=" ">
              <div className=" text-center flex justify-center">
                <div
                  className="text-xl font-extrabold bg-gradient-to-r 
        from-green-400 to-blue-700 bg-clip-text text-transparent"
                >
                  {skill}
                </div>
              </div>

              <div className="mx-2 grid justify-center ">
                {ski.image && (
                  <Image
                    src={image}
                    alt={skill}
                    width={128}
                    height={86.15}
                    className="vibrate img-pro rounded-md align-middle"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

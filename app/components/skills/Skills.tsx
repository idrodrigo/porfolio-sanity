import React from "react";
import { getSkills } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default async function Skills() {
  const skills = await getSkills();
  const skill = skills || "";
  return (
    <>
      <div className="mx-2 md:mx-6 lg:mx-10 mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-8 my-10">
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
                    width={300}
                    height={20}
                    className="vibrate object-cover img-pro rounded-md align-middle"
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

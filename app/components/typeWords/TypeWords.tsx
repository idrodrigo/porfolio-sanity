"use client";

import Typewriter from "typewriter-effect";

interface Props {
  jobTitles: string[];
}
const TypeWords: React.FC<Props> = ({ jobTitles }) => {
  return (
    <>
        <div className="flex justify-center">
        <div className="type font-Comic min-h-[2.5rem] md:min-h-[2.5rem] justify-center md:mx-0 mx-6 text-center mt-3 md:mt-6 mb-5 md:text-4xl text-2xl  font-extrabold text-green-400">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              jobTitles.map((job) => {
                typewriter
                  .typeString(job)
                  .pauseFor(1000)
                  .deleteChars(job.length)
              });
              typewriter.start();
            }}
          />
        </div>
        </div>
    </>
  );
};

export default TypeWords;

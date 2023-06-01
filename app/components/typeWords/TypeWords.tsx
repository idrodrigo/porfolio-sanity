"use client";

import Typewriter from "typewriter-effect";

interface Props {
  jobTitles: string[];
}
const TypeWords: React.FC<Props> = ({ jobTitles }) => {
  return (
    <>
        <div className="flex justify-center">
        <div className="type font-Comic justify-center md:mx-0 mx-6 text-center mt-6 mb-5 text-4xl hover:text-green-400 font-extrabold text-blue-700">
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
                  .deleteChars(job.length);
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

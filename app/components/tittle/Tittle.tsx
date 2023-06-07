import React from "react";
import TypeWords from "../typeWords/TypeWords";

function Tittle() {
  const jobTitles = [
    "Software Developer",
    "Java Developer",
    "JavaScript Developer",
    "Back End Developer",
    "Front End Developer",
    "Full Stack Developer",
    
    "Web Developer",
  ];
  return (
    <>
      <h1 className="text-7xl font-extrabold text-center  leading-snug">
        <div id="hello" className="font-Comic">
        Hello I&apos;m{" "} Rodrigo
        </div>
        {/* <span
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 transition
          bg-clip-text text-transparent hover:from-blue-700 hover:via-green-400 hover:to-violet-500"
        >
          Rodrigo
        </span> */}
      </h1>
      <TypeWords jobTitles={jobTitles} />
    </>
  );
}

export default Tittle;

import React from "react";
import TypeWords from "../typeWords/TypeWords";
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico( {subsets: ['latin'], weight: '400'})
 
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
      <h1 className="md:text-7xl font-extrabold text-center  leading-snug text-4xl md:mb-6 text-green-400">
        <div id="" className={pacifico.className}>
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

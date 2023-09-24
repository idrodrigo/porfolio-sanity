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
          {/* {
          <p className="font-thin animate-shake">Rodrigo Medina</p>
        } */}
      <h1 className="animate-shake md:text-5xl font-extrabold text-center leading-snug text-4xl md:my-8 my-4 text-blue-500">
        <div id="" className={pacifico.className}>
          <p className="">
        Hello, I&apos;m{" "}
         <span className="hidden md:inline-block">Software Developer</span> <span className="md:hidden">Dev</span>
        </p>
        </div>
  
        {/* <span
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 transition
          bg-clip-text text-transparent hover:from-blue-700 hover:via-green-400 hover:to-violet-500"
        >
          Rodrigo
        </span> */}
      </h1>
      {/* <TypeWords jobTitles={jobTitles} /> */}
    </>
  );
}

export default Tittle;
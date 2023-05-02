import React from "react";

function Tittle() {
  return (
    <>
      <h1 className="text-7xl font-extrabold text-center  md:text-left">
        Hello I&apos;m{" "}
        <span
          className="bg-gradient-to-r 
        from-green-400 via-violet-500 to-blue-700 transition
          bg-clip-text text-transparent hover:from-blue-700 hover:via-green-400 hover:to-violet-500"
        >
          Rodrigo
        </span>
      </h1>
      <p className="text-center  md:text-left  mt-2 text-xl text-green-400 font-light">
        Java || JavaScript <br /> Back end || Front end Developer
      </p>
    </>
  );
}

export default Tittle;

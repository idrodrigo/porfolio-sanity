import "../globals.css";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

export default async function Home() {
  return (
    <div>
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

      <h2 className="img-pro mt-2 font-bold text-3xl underline underline-offset-8 decoration-red-600 decoration-wavy text-center">
        Projects:
      </h2>
      {/* @ts-expect-error Server Component */}
      <Projects />
      <h2 className="img-pro mt-8 font-bold text-3xl underline underline-offset-4 decoration-red-600 decoration-wavy text-center">
        Skills:
      </h2>
      {/* @ts-expect-error Server Component */}
      <Skills />
    </div>
  );
}

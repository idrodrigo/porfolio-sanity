import "../globals.css";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Tittle from "../components/tittle/Tittle";

export default async function Home() {
  return (
    <>
      <Tittle />
      {/* @ts-expect-error Server Component */}
      <Projects />
      {/* @ts-expect-error Server Component */}
      <Skills />
    </>
  );
}

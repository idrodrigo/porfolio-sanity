// interface Props {
//   children: JSX.Element | string

import Hl from "./Highlight";

// }
const AboutContent: React.FC = () => {
  return (
    <>
      <div>
        <p>
          Hi, folks. I'm <Hl>Rodrigo Medina</Hl>. I'm an <Hl>engineer</Hl> and developer with experience implementing and executing <Hl>several software projects</Hl>  in development and production environments, adhering to <Hl>best practices</Hl> .
        </p>
        <br />
        <p>
          Adaptable <Hl>team player</Hl>  with a <Hl>strong aptitude</Hl>  for learning, sharing knowledge, and <Hl>achieving goals</Hl>. Proactively stays updated on the latest technologies through conferences, <Hl>meetups</Hl> , courses, and programming blogs/websites.
        </p>
        <br />
        <p>
          Passionate about continuous <Hl>improvement</Hl> .
        </p>
        <br />
        <p>
          I feel a <Hl>responsibility</Hl> to make use of tools that offer an opportunity to <Hl>accelerate</Hl> the transformation of our systems, not only to achieve business goals, but also to build a <Hl>better world</Hl> for everyone.
        </p>
      </div>
    </>
  );
}

export default AboutContent
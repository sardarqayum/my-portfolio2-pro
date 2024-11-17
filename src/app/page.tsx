import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skill from "./component/skills";


export default function Home() {
  return (
   <div>
  <h1>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      
  </h1>
   </div>
  )
}

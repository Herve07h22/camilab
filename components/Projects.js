import Project from "./Project";
import projets from "../content/projects.json";

const Projects = () => (
  <section className="my-8 font-sans container max-w-5xl m-auto flex flex-col ">
    <div className="flex flex-wrap flex-row items-stretch justify-between md:-mt-32" style={{ minHeight: "1px" }}>
      {projets.map((projet) => (
        <Project key={projet.titre} {...projet} />
      ))}
    </div>
  </section>
);

export default Projects;

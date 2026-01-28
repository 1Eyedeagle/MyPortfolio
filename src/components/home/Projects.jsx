import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            Projects
          </p>

          <h2 className="font-heading text-3xl md:text-4xl">Selected Work</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of real-world projects showcasing my frontend
            development, UI/UX skills, and attention to detail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

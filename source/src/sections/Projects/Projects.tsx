import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import "./Projects.css";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          label="Projects"
          title="Featured Work"
          description="A collection of projects and experiments."
        />

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              status={project.status}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
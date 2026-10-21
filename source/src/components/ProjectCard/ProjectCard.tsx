import "./ProjectCard.css"

type ProjectCardProps = {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({
  title,
  status,
  description,
  technologies,
}: ProjectCardProps) {
  return (

    <article className="project-card">

      <div className="project-content">

        <h3 className="project-title">
          {title}
        </h3>

        <span className="project-status">
          {status}
        </span>

        <p className="project-description">
          {description}
        </p>

        <div className="project-technologies">

          {technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}

        </div>

      </div>

    </article>

  );
}
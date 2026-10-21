import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { skills } from "../../data/skills";
import "./TechnicalFoundations.css";

export function TechnicalFoundations() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          label="SKILLS"
          title="Technical Foundations"
          description="The technologies, languages, and tools that support my projects and studies."
        />

        <div className="technical-grid">

          {skills.map((skill) => (

            <div
              key={skill.category}
              className="technical-card"
            >

              <div className="technical-header">

                <div className="technical-icon">
                  <skill.icon size={22} />
                </div>

                <h3>{skill.category}</h3>

              </div>

              <p className="technical-description">
                {skill.description}
              </p>

              <div className="technical-tags">

                {skill.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </Container>
    </Section>
  );
}
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { timeline } from "../../data/timeline";
import "./Timeline.css";

export function Timeline() {
  return (
    <Section id="timeline">

      <Container>

        <SectionTitle
          label="JOURNEY"
          title="Learning Timeline"
          description="The experiences and projects that shaped my path in technology."
        />

        <div className="timeline">

          {timeline.map((item) => (
            <div
              key={item.year}
              className="timeline-item"
            >
              <div className="timeline-year">
                {item.year}
              </div>

              <div
                className={`timeline-content ${item.year === "2026" ? "timeline-current" : ""
                  }`}
              >

                <span className="timeline-tag">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </Container>

    </Section>
  );
}
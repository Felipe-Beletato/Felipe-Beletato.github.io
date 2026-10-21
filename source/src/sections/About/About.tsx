import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { highlights } from "../../data/about";
import { interests } from "../../data/about";
import "./About.css";


export function About() {
    return (
        <Section id="about">
            <Container>
                <SectionTitle
                    label="ABOUT"
                    title="Who I am"
                    description="A developer driven by curiosity, systems thinking, and continuous learning."
                />

                <div className="about-content">

                    <div className="about-text">

                        <p>
                            I am a Computer Science student focused on building meaningful software and exploring how technology can improve everyday life.
                        </p>

                        <p>
                            My interests range from software engineering and artificial intelligence to Linux systems, accessibility, and emerging technologies.
                        </p>

                        <p>
                            I enjoy transforming ideas into practical solutions, constantly experimenting, learning, and refining my skills through personal and academic projects.
                        </p>
                    </div>

                    <div className="about-highlights">

                        {highlights.map((item) => (
                            <InfoCard
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}

                    </div>
                </div>
                <div className="personal-quote">
                    <p>
                        "Technology is the tool. Understanding is the goal."
                    </p>
                </div>

                <div className="beyond-technology">

                    <SectionTitle
                        label="Beyond Technology"
                        title="Interests & Inspirations"
                        description="The ideas, books, and habits that influence the way I learn and build."
                    />

                    <div className="interests-grid">
                        {interests.map((item) => (
                            <InfoCard
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </div>

                </div>



            </Container>
        </Section>
    );
}
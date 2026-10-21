import "./Hero.css";
import { Container } from "../../components/Container/Container";
import { Button } from "../../components/Button/Button";
import profileImage from "../../assets/images/profile.jpg";

export function Hero() {
  return (
    <section id="hero" className="hero">

      <Container>

        <div className="hero-content">

          <div className="hero-text">

            <p className="hero-label">
              COMPUTER SCIENCE • SOFTWARE DEVELOPMENT
            </p>

            <h1 className="hero-title">
              <span className="hero-first-name">
                Felipe
              </span>

              <span className="hero-last-name">
                Beletato
                </span>
            </h1>

            <p className="hero-description">
              Exploring systems, building software, and turning curiosity into practical solutions.
            </p>

            <div className="hero-buttons">

              <Button variant="primary" href="https://github.com/Felipe-Beletato">
                GitHub
              </Button>

              <Button
                variant="secondary"
                href="https://www.linkedin.com/in/felipe-beletato-de-lima-5a004837b/?isSelfProfile=true"
              >
                LinkedIn
              </Button>

              <Button
                variant="ghost"
                href="/Curriculo%20-%20Felipe%20Beletato%20de%20Lima.pdf"
              >
                Currículo
              </Button>

            </div>

          </div>

          <div className="hero-photo-container">

            <div className="hero-photo">

              <img 
              src={profileImage}
              alt="Felipe Beletato"
              className="hero-photo-image"
              />

              <div className="hero-ring"></div>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

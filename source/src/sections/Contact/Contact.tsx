import type { FormEvent } from "react";
import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

import "./Contact.css";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:felipe.beletato06@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact">

      <Container>

        <SectionTitle
          label="CONTACT"
          title="Ideas, Projects & Coffee"
          description="Interested in collaborating, discussing ideas, or simply exchanging knowledge?"
        />

        <div className="contact-grid">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Your email"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={6}
              aria-label="Your message"
              required
            />

            <button type="submit">
              Send Message
            </button>

          </form>

          <div className="contact-side">

            <div className="contact-card">

              <h3>Current Focus</h3>

              <ul>

                <li>☕ Life Manager RPG</li>

                <li>🧠 Virtual Assistant</li>

                <li>📚 Continuous Learning</li>

              </ul>

            </div>

            <div className="contact-quote">

              <p>
                "Technology is the tool. Understanding is the goal."
              </p>

            </div>

            <div className="contact-details">
              <h3>Other ways to reach me</h3>
              <a href="https://github.com/Felipe-Beletato" target="_blank" rel="noopener noreferrer">
                GitHub: github.com/Felipe-Beletato
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-beletato-de-lima-5a004837b/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn: linkedin.com/in/felipe-beletato-de-lima-5a004837b
              </a>
              <a href="mailto:felipe.beletato06@gmail.com">
                E-mail: felipe.beletato06@gmail.com
              </a>
            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}

import "./Navbar.css"
import { Container } from "../Container/Container";

const navLinks = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Timeline",
    href: "#timeline",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];
export function Navbar() {
  return (
    <nav className="navbar">
      <Container>

        <div className="navbar-content">

          <h2 className="navbar-logo">
            Felipe Beletato
          </h2>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
        
      </Container>
    </nav>
  );
}
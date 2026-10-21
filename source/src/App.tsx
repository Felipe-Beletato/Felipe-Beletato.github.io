import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Projects } from "./sections/Projects/Projects";
import { Timeline } from "./sections/Timeline/Timeline";
import { TechnicalFoundations } from "./sections/TechnicalFoundations/TechnicalFoundations";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Timeline />

      <TechnicalFoundations />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
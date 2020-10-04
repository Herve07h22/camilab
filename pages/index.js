import CamilabHead from "../components/CamilabHead";
import Hero from "../components/Hero";
import Methode from "../components/Methode";
import Projects from "../components/Projects";
import Section from "../components/Section";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <CamilabHead />
      <Hero />
      <Section
        sousTitre="Notre méthode"
        titre="Performance, agilité, transparence, qualité."
        texte="Internet déborde de développeurs et de chefs de projets freelance. Ce qui nous distingue des autres ?"
      />
      <Methode />
      <Section
        sousTitre="Nos compétences"
        titre="Développement full-stack"
        texte="React, NodeJS, ElasticSearch, Docker, Python, Postgresql."
      />
      <Projects />
      <Section titre="Nous contacter" texte="" id="contact" />
      <Contact />
      <About />
    </div>
  );
}

import { Hero } from "../../components/Hero/Hero";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Recomendations } from "../../components/Recomendations/Recomendations";

export const HomePage = () => {
  return (
    <div>
          <Hero />
          <Skills />
          <Projects />
          <Recomendations/>
    </div>
  );
};


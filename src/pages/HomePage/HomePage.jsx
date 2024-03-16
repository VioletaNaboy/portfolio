import { Hero } from "../../components/Hero/Hero";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Recomendations } from "../../components/Recomendations/Recomendations";
import { Education } from "../../components/Education/Education";
import { Header } from "../../components/Header/Header";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import React, { useState} from 'react';
export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
    setIsOpen(!isOpen);
    };


  return (
    <>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
          <BurgerMenu isOpen={ isOpen} toggleMenu={toggleMenu} />
          <Hero />
          <Skills />
          <Projects />
          <Education />
      <Recomendations />
    </>
  );
};


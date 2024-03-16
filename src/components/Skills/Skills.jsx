import React, { useEffect, useState } from 'react';
import styles from './Skills.module.scss'
import { IconContext } from 'react-icons';
import {FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaLinux, FaDatabase, FaPython} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import svg from '../../images/sprite.svg'
export const Skills = () => {
 const skills = [FaHtml5, FaCss3Alt, FaSass, IoLogoJavascript, SiTypescript ,FaReact, FaNodeJs, FaLinux, FaDatabase, FaPython];
  return (
    <section id="skills">
      <h2 className={styles.subtitle}>
        <svg height={260}>
          <use xlinkHref={`${svg}#icon-techSkills`} fill='#00008B'/>
        </svg>
      </h2> 
          <ul className={styles.skillsList}>
        {skills.map((skill, index) => {
              const SkillIcon = skill;
            return (
                <li key={index} className={styles.skillLi}>
                    <div className={styles.skillItem}>
                    <SkillIcon size={94} color='white' />
                    </div>
              </li>
            );
          })}
          </ul>
    </section>
  );
};

import React, { useState } from 'react';
import bookShelf from '../../images/bookShelf.png';
import carRental from '../../images/carRental.png';
import hotel from '../../images/hotel.png';
import drinkMaster from '../../images/drinkMaster.png';
import styles from './Projects.module.scss'
import svg from '../../images/sprite.svg'

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    { img: bookShelf, name: 'Book Shelf', desc: 'Responsive website for books shopping with the option to purchase the favourite books on well-known platforms. Created using React.js, Redux.js' },
    { img: carRental, name: 'Car Rental Service', desc: 'It is a user-friendly car rental platform designed to make your travel experience seamless. From a diverse selection of cars to easy online booking, we`ve got covered. Created using React.js, Redux.js' },
    { img: hotel, name: 'Hotel Website', desc: 'Responsive website for hotel room booking and reservation table in the hotel restaurant.Responsive website for hotel room booking and reservation table in the hotel restaurant.' },
    { img: drinkMaster, name: 'Cocktails Catalog', desc: 'A responsive web application where user can search for drinks, create their receipts, and add a cocktail to their favourite list. The authorization functionality is implemented. An application was created using React.js, Redux, Node.js and other tools by team of front and back end developers.' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id='projects'>
      <h2>
        <svg height={260}>
          <use xlinkHref={`${svg}#icon-projects`} fill='#00008B'/>
        </svg>
      </h2>
      <div className={styles.slider}>
        <button onClick={prevSlide} className={styles.sliderBtn}>
          <svg width={56} height={56}>
          <use xlinkHref={`${svg}#icon-prev`} fill='#00008B'/>
        </svg>
      </button>
      <div className={styles.project}>
          <img src={projects[currentIndex].img} alt={`Slide ${currentIndex + 1}`} width='100%' className={styles.projectImg} />
        <h3 className={styles.projectName}>{projects[currentIndex].name}</h3>
        <p className={styles.projectDesc}>{projects[currentIndex].desc}</p>
      </div>
        <button onClick={nextSlide} className={styles.sliderBtn}>
 <svg width={56} height={56}>
          <use xlinkHref={`${svg}#icon-next`} fill='#00008B'/>
        </svg>
        </button>
      </div>
    </section>
  );
};


import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './BurgerMenu.module.scss';
import svg from '../../images/sprite.svg'

export const BurgerMenu = ({isOpen, toggleMenu}) => {
    
      useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
    

  return (
      <div className={styles.burgerMenu}>
      {isOpen &&
        ReactDOM.createPortal(
            <nav className={styles.menu}>
                    <a href='#hero'><svg height={134} onClick={toggleMenu}>
          <use xlinkHref={`${svg}#icon-homepage`} fill='#00008B'/>
        </svg></a>
                    <a href='#skills'><svg height={108} onClick={toggleMenu}>
          <use xlinkHref={`${svg}#icon-techSkills`} fill='#00008B'/>
        </svg></a>
                    <a href='#projects'><svg height={108} onClick={toggleMenu}>
          <use xlinkHref={`${svg}#icon-projects`} fill='#00008B'/>
        </svg></a>
                    <a href='#education'><svg height={134} onClick={toggleMenu}>
          <use xlinkHref={`${svg}#icon-education`} fill='#00008B'/>
        </svg></a>
          </nav>,
          document.getElementById('portal-root')
        )}
    </div>
  );
};
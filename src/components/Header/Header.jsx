import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import styles from './Header.module.scss';
import svg from '../../images/sprite.svg'
export const Header = ({toggleMenu, isOpen}) => {

  return (
    <header className={styles.header}>
       <div className={styles.burgerIcon} onClick={toggleMenu}>
       {isOpen ? (
          <svg height={260}>
            <use xlinkHref={`${svg}#icon-close`} fill='#00008B'/>
          </svg>
        ) : (
          <svg height={260}>
            <use xlinkHref={`${svg}#icon-menu`} fill='#00008B'/>
          </svg>
        )}
      </div>
    </header>
  );
};


import styles from './Education.module.scss'
import svg from '../../images/sprite.svg'
export const Education = () => {
  return (
    <section id="education">
      <h2>
        <svg className={styles.icon} width={520}>
          <use xlinkHref={`${svg}#icon-education`} fill='#00008B'/>
        </svg>
      </h2>
      <div></div>
    </section>
  );
};

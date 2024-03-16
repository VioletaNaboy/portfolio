import {IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from './Hero.module.scss'

export const Hero = () => {
    return (
    <section id='hero'>
        <div className={styles.heroContainer}>   
            <h1 className={styles.name}>Violeta Naboishchykova</h1> 
            <h2 className={styles.subtitle}>Full stack developer</h2>    
        </div>
        <ul className={styles.contacts}>
                <li>
                <a href="https://www.linkedin.com/in/violeta-n/">
                   <IconButton>
                            <LinkedInIcon style={{ fontSize: '124px', color: 'black' }} />
                    </IconButton>
                </a>
                </li>
                <li>
                    <a href="https://github.com/VioletaNaboy">
                        <IconButton>
                            <GitHubIcon style={{ fontSize: '124px', color: 'black' }} />
                        </IconButton>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/Subilopoke">
                        <IconButton>
                            <TelegramIcon style={{ fontSize: '124px', color: 'black' }} />
                        </IconButton>
                    </a>
                </li>
        </ul>
    </section>
  );
};

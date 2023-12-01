import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/Avatar.jpg")}
                alt=""
                className={styles.aboutImage}
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />

                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a passionate and creative frontend developer with a keen eye for crafting beautiful, user friendly websites and applications. I turn ideas into intuitive and visually appealing digital solutions. I'm proficient in HTML, CSS, and Javascript. I'm also proficient with popular frontend frameworks like React.js. 
                        </p>

                    </div>

                </li>
            </ul>

        </div>
    </section>
  )
}


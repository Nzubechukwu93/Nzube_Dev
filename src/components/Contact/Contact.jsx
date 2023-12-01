import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Get in touch!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:oriji.nzubechukwu@yahoo.com">oriji.nzubechukwu@yahoo.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/nzubechukwu-oriji">linkedin.com/in/nzubechukwu-oriji</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                <a href="https://github.com/Nzubechukwu93">github.com/Nzubechukwu93</a>
            </li>
        </ul>
    </footer>
  )
}

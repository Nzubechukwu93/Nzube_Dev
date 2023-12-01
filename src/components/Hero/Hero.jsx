import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nzube</h1>
            <p className={styles.description}>
                I'm a Dedicated and self-motivated frontend developer with a strong foundation in web developement technologies, including HTML,CSS,JAVASCRIPT and REACT JS.
            </p>
            <a href="mailto:oriji.nzubechukwu@yahoo.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img
            src={getImageUrl("hero/My image.jpg")}
            alt='My image'
            className={styles.heroImg}
        
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  );
};

// export default Hero
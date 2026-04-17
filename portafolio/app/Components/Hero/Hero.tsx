import React from 'react';
import styles from  './Hero.module.css'
import Link from 'next/link';

let HeroData:string = 'Diego Herrera Hernández 🐉 '
let HeroData2:string = 'Ingeniero de Software'

export default function Hero(){
    return(
        <>
        <section className={`section ${styles.hero}`} id="home">
            <div className={`container ${styles.hero__container }`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}><span>{HeroData}</span></h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>{HeroData2}</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Recién egresado de Tecnologías de la Información apasionado por crear 
                        soluciones digitales innovadoras. Combino creatividad técnica con un 
                        enfoque orientado a resultados para transhtmlFormar ideas en código funcional.
                    </p>
                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className="btn btn--primary">
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </Link>
                        <Link href="#contact" className="btn btn--outline">
                            <i className="fas fa-envelope"></i> Contáctame
                        </Link>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <Link href="#interests" className={`${styles.hero__scroll} ${styles['hero__scroll-link']}`}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </section>
        </>
            )

}
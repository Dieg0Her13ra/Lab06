import React from 'react';
import styles from  './CV.module.css'
import Link from 'next/link';

export default function CV(){
    return(
    <section className={`section ${styles.cv}`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi htmlFormación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles.cv__buttons}>
                            <a href="https://www.overleaf.com/gallery/tagged/cv" className="btn btn--primary btn--large">
                                <i className="fas fa-download"></i> Descargar CV
                            </a>
                            <a href="https://dieg0her13ra.github.io/lab05HerreraHern-ndezDiego/" className="btn btn--secondary btn--large">
                                <i className="fas fa-eye"></i> Ver CV Digital Html
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        <h3 className={styles.cv__social_title}>Conectemos</h3>
                        <div className={styles.cv__social_links}>
                            <a href="https://linkedin.com/in/dhh-azdrak" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon__linkedin']}`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>@dhh-azdrak</span>
                                </div>
                               
                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </a>
                            
                            <a href="https://github.com/Dieg0Her13ra" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon__github']}`}>
                                    
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>@Dieg0Her13ra</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </a>
                            
                            <a href="mailto:diego0hh013@gmail.com" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon__email']}`}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>diego0hh013@gmail.com</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
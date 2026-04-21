import React from 'react';
import styles from  './CV.module.css'
import Link from 'next/link';
import {faDownload, faEye, faEnvelope, faArrowRight} from '@fortawesome/free-solid-svg-icons'; 
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CV(){
    return(
    <section className={`section ${styles.cv}`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles.cv__buttons}>
                            <a href="https://www.overleaf.com/gallery/tagged/cv" className="btn btn--primary btn--large">
                                 <FontAwesomeIcon icon={faDownload}/> Descargar CV
                            </a>
                            <a href="https://dieg0her13ra.github.io/lab05HerreraHern-ndezDiego/" className="btn btn--secondary btn--large">
                                 <FontAwesomeIcon icon={faEye}/>Ver CV Digital Html
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        <h3 className={styles.cv__social_title}>Conectemos</h3>
                        <div className={styles.cv__social_links}>
                            <a href="https://linkedin.com/in/dhh-azdrak" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon__linkedin']}`}>
                                     <FontAwesomeIcon icon={faLinkedin}/>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>@dhh-azdrak</span>
                                </div>
                               
                               <FontAwesomeIcon icon={faArrowRight} className={styles.social__arrow}/> 
                            </a>
                            
                            <a href="https://github.com/Dieg0Her13ra" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon__github']}`}>
                                    
                                    <FontAwesomeIcon icon={faGithub}/>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>@Dieg0Her13ra</span>
                                </div>
                                <FontAwesomeIcon icon={faArrowRight} className={styles.social__arrow}/> 
                            </a>
                            
                            <a href="mailto:diego0hh013@gmail.com" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon__email']}`}>
                                    <FontAwesomeIcon icon={faEnvelope} /> 
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>diego0hh013@gmail.com</span>
                                </div>
                                <FontAwesomeIcon icon={faArrowRight} className={styles.social__arrow}/> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
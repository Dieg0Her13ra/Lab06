import React from 'react';
import styles from  './Footer.module.css'
import Link from 'next/link';

let FooterData:string= 'Diego Herrera Hernández'
let FooterData2:string= '2026 Herrera Hernandez Diego'

export default function Footer(){
    return(
        <footer className={styles.footer} id="footer">
        <div className="container">
            <div className={styles.footer__content}>
                <div className={styles.footer__brand}>
                    <a href="#" className={styles.footer__logo}>
                        <span className={styles.logo__bracket}>&lt;</span><span>{FooterData}</span> <span className={styles.logo__bracket}>/&gt;</span>
                    </a>
                    <p className={styles.footer__text}>
                        Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto! ¡Vuelvan prontos!
                    </p>
                </div>
                <div className={styles.footer__social}>
                    <a href="https://linkedin.com/in/dhh-azdrak" target="_blank" rel="noopener noreferrer" className={styles.footer__social_link} aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Dieg0Her13ra" target="_blank" rel="noopener noreferrer" className={styles.footer__social_link} aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:diego0hh013@gmail.com" className={styles.footer__social_link} aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            
            <div className={styles.footer__bottom}>
                <p className={styles.footer__copyright}>
                    &copy;<span>{FooterData2}.</span> Todos los derechos reservados.
                </p>
                <p className={styles.footer__made}>
                    Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"> 🦖</i> 
                </p>
            </div>
        </div>
    </footer>
    )
}
import React from 'react';
import styles from  './Header.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, fas, faTimes} from '@fortawesome/free-solid-svg-icons'; 
let HeaderData:string = 'Diego Herrera Hernández'

export default function Header(){
    return(
        <>
    <header className={styles.header} id="header">
        <nav className={`container ${styles.nav}`}>
            <Link href="#home" className={styles.nav__logo}>
                <span className={styles.logo__bracket}>&lt;</span>{HeaderData}<span className={styles.logo__bracket}>/&gt;</span>
            </Link>

            <input type="checkbox" id="nav-toggle" className={styles.nav__checkbox}></input>
            <label htmlFor="nav-toggle" className={styles.nav__toggle}>
            <FontAwesomeIcon icon={faBars} />
            </label>
            
            <div className={styles.nav__menu} id="nav-menu">
                <label htmlFor="nav-toggle" className={styles.nav__close}>
                    <FontAwesomeIcon icon={faTimes} />
                </label>
                
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <Link href="#home" className={styles.nav__link}>Inicio</Link>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <Link href="#interests" className={styles.nav__link}>Intereses</Link>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <Link href="#cv" className={styles.nav__link}>CV</Link>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <Link href="#projects" className={styles.nav__link}>Proyectos</Link>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <Link href="#contact" className={styles.nav__link}>Contacto</Link>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</>
    )

}
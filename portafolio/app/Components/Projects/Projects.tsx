import React from 'react';
import styles from  './Projects.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faExternalLinkAlt, faChartLine, faRobot} from '@fortawesome/free-solid-svg-icons'; 



export default function Projects(){
    return(
<section className={`section ${styles.projects} `} id="projects">
            <div className="container" >
                <div className="section__header">
                    <span className="section__subtitle">Mi trabajo</span>
                    <h2 className="section__title">Proyectos Destacados</h2>
                    <p className="section__description">
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </div>
                
                <div className={styles.projects__grid}>
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <FontAwesomeIcon icon={faLaptopCode}/>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <FontAwesomeIcon icon={faExternalLinkAlt}/>
                                </a>
                                <a href="https://github.com/Dieg0Her13ra/proyecto-1" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>E-Commerce Plaform</h3>
                            <p className={styles.project__description}>
                                Plataforma de comercio electrónico con carrito de compras, 
                                autenticación de usuarios y pasarela de pagos integrada.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>React</span>
                                <span className={styles.tech}>Node.js</span>
                                <span className={styles.tech}>MongoDB</span>
                            </div>
                        </div>
                    </article>
                    

                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <FontAwesomeIcon icon={faChartLine}/>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <FontAwesomeIcon icon={faExternalLinkAlt}/>
                                </a>
                                <a href="https://github.com/Dieg0Her13ra/proyecto-2" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Dashboard Analytics</h3>
                            <p className={styles.project__description}>
                                Panel de control interactivo para visualización de datos 
                                con gráficos dinámicos y reportes automatizados.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>Django</span>
                                <span className={styles.tech}>Chart.js</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <FontAwesomeIcon icon={faRobot}/>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <FontAwesomeIcon icon={faExternalLinkAlt}/>
                                </a>
                                <a href="https://github.com/Dieg0Her13ra/proyecto-3" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>AI Chatbot Assistant</h3>
                            <p className={styles.project__description}>
                                Asistente virtual inteligente con procesamiento de lenguaje 
                                natural y respuestas contextuales.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>TensorFlow</span>
                                <span className={styles.tech}>Flask</span>
                            </div>
                        </div>
                    </article>
                </div>
                
                <div className={styles.projects__more}>
                    <a href="https://github.com/Dieg0Her13ra" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <FontAwesomeIcon icon={faGithub}/>Ver más en GitHub
                    </a>
                </div>
            </div>
        </section>

    )}
import React from 'react';
import styles from  './ScrollToTop.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'; 


export default function ScrollToTop(){
    return(
           <Link href="#home" className={styles.scroll_top} id="scroll-top">
        <FontAwesomeIcon icon={faArrowUp}/>
    </Link>
    )
}
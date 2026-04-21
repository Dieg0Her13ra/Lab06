import React from 'react';
import styles from  './ScrollToTop.module.css'
import Link from 'next/link';

export default function ScrollToTop(){
    return(
           <Link href="#home" className="scroll-top" id="scroll-top">
        <i className="fas fa-arrow-up"></i>
    </Link>
    )
}
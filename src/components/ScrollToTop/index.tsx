"use client"
import React, { useEffect, useState } from 'react'
import styles from './scroll.module.css'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const yOffset = window.pageYOffset;
                console.log("Y OFFSET");
                console.log(yOffset);
                console.log("Y OFFSET");
                if (yOffset > 200) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };
            console.log("NEW", handleScroll);

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    return (
        <>
            {
                isVisible &&
                <button
                    className={`${styles.scroll_to_top_button}`}
                    onClick={scrollToTop}
                >
                    <div className='flex flex-col items-center'>
                        <picture>
                            <img src="../../images/logo_without_name.png" width={20} />
                        </picture>
                        <div className='font-semibold mt-1'>
                            GO TOP
                        </div>
                    </div>
                </button>
            }
        </>
    );
};

export default ScrollToTopButton;

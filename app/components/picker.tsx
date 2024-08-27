"use client"
import React, { useState } from 'react';
import  Link from 'next/link' 
import styles from './flags.module.css';
import Image from 'next/image';

export default function Picker ({category}:{category:string})  {

    const flags = ['Uganda', 'Kenya', 'Tanzania', 'Rwanda'];
    const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
   
    const handleNextClick = () => {
        setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % flags.length);
    };
    return (
        <div className={styles["flag-picker"]}>
            <h1>Choose a Country</h1>
            <div className={styles["flag-container"]}>
                {/* Use Link to navigate to the country detail page */}
                <div className={styles["flag-image"]}>
                    <Link href={`/PDS/${category}/${encodeURIComponent(flags[currentFlagIndex])}`}>
                        <Image
                            src={`/images/flags/${flags[currentFlagIndex]}.png`}
                            alt={`Flag ${currentFlagIndex + 1}`}
                            style={{ cursor: 'pointer' }}
                            width = {100}
                            height = {100}
                        />
                        <div className={styles["flag-text"]}>
                            <p>{flags[currentFlagIndex]}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <button className={styles["flag-button"]} onClick={handleNextClick}>Next</button>
            {/*            <button onClick={toggleContext}>Toggle Context</button>*/}

        </div>
    );
};



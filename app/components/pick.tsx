"use client"
import React, { useState } from 'react';
import  Link from 'next/link' 
import styles from './flags.module.css';
import Image from 'next/image';
import CountriesPlayers from '../PDS/matches/page';

export default function Picker ({dynamic, baseUrl, imager}:{dynamic:string[], baseUrl:string, imager:string})  {

    const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
    const handleNextClick = () => {
        setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % dynamic.length);
    };
    const url = `${baseUrl}/${encodeURIComponent(dynamic[currentFlagIndex])}`;
    return (
        <div className={styles["flag-picker"]}>
            <h1>Choose a Country</h1>
            <div className={styles["flag-container"]}>
                {/* Use Link to navigate to the country detail page */}
                <div className={styles["flag-image"]}>
                    <Link href={url}>
                        <Image
                            src={imager}
                            alt={`Flag ${currentFlagIndex + 1}`}
                            style={{ cursor: 'pointer' }}
                            width = {100}
                            height = {100}
                        />
                        <div className={styles["flag-text"]}>
                            <p>{dynamic[currentFlagIndex]}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <button className={styles["flag-button"]} onClick={handleNextClick}>Next</button>
            {/*            <button onClick={toggleContext}>Toggle Context</button>*/}

        </div>
    );
};



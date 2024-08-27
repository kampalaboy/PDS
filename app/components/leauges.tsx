"use client"
import React, { useState } from 'react';
import  Link from 'next/link' 
import styles from './flags.module.css';
import Image from 'next/image';

export default function Picker ({country}:{country:string})  {

    const leagues = ['Startimes', 'CAF', 'AFCON'];
    const [currentLeagueIndex, setCurrentLeagueIndex] = useState(0);
   
    const handleNextClick = () => {
        setCurrentLeagueIndex((prevIndex) => (prevIndex + 1) % leagues.length);
    };
    return (
        <div className={styles["flag-picker"]}>
            <h1>Choose a League</h1>
            <div className={styles["flag-container"]}>
                {/* Use Link to navigate to the country detail page */}
                <div className={styles["flag-image"]}>
                    <Link href={`/PDS/matches/${country}/${encodeURIComponent(leagues[currentLeagueIndex])}/`}>
                        <Image
                            src={`/images/flags/${leagues[currentLeagueIndex]}.png`}
                            alt={`Flag ${currentLeagueIndex + 1}`}
                            style={{ cursor: 'pointer' }}
                            width = {100}
                            height = {100}
                        />
                        <div className={styles["flag-text"]}>
                            <p>{leagues[currentLeagueIndex]}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <button className={styles["flag-button"]} onClick={handleNextClick}>Next</button>
            {/*            <button onClick={toggleContext}>Toggle Context</button>*/}

        </div>
    );
};



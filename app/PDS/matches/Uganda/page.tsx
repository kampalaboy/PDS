import React from 'react';
import Picker  from '../../../components/pick';

export default function CountriesPlayers() {

    const countryStyle ={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const flagStyle ={
        flex: '15',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const leagues = ['Startimes', 'AFCON','CAF'];
    const baseUrl = '/PDS/matches/Uganda'
    const imager = ""

    return (
        <div className="countries" style={countryStyle}>
            <div  style={flagStyle} >
                <Picker dynamic={leagues} baseUrl = {baseUrl} imager={imager}/>
            </div>
        </div>
    );
}
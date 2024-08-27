import React from 'react';
import Picker  from'../../components/pick';

export default function CountriesPlayers() {

    const countryStyle ={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const rowStyle ={
        display: 'block', 
    };


    const tableStyle ={
        flex: '1', // Expand to fill available space

       
    };

    const flagStyle ={
        flex: '15',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const flags = ['Uganda', 'Kenya', 'Tanzania', 'Rwanda'];
    const baseUrl = '/PDS/players/'
    const imager = ""

    return (
        <div className="countries" style={countryStyle}>
            <div  style={flagStyle} >
                <Picker dynamic={flags} baseUrl = {baseUrl} imager={imager}/>
            </div>
        </div>
    );
}
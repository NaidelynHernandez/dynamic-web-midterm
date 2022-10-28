import React from "react";

function Countries({country}){
    return <div class="c">
        <h2>Country Name: {country.name.common}</h2>
        <p>{country.flag} </p>
        <p> Capital: {country.capital}</p>
        <p> Capital Info: {country.capitalInfo.latlng}</p>

        <p> Population: {country.population}</p>
        <p>Continent: {country.continents}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Time Zone: {country.timezones}</p>
        <p>Start of Week: {country.startOfWeek}</p>
        <p>Country Longitude/ Latitude: {country.latlng}</p>
    </div>;
}

export default Countries;

import React from "react";




function Countries({country}){
return <div>
  <p>Country Name: {country.name.common}</p>
  <p> Capital: {country.capital}</p>
<p> Population: {country.population}</p>
<p> Currency: {country.flag } </p>
 
  <p>Continent: {country.continents}</p>
  <p>Time Zone: {country.timezones}</p>
  
  
 
   
</div>;


}

export default Countries;
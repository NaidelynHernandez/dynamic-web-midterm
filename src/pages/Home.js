import React, {useEffect, useState } from "react";
import axios from "axios";


function Countries() {
//const [countryName,setCountryName]= useState([]);
const URL= "https://restcountries.com/v3.1/all";


useEffect(() => {
    axios
    .get(URL)
    .then ((response) => {
        console.log({response});
        //console.log("response", response);

       // setCountryName(response.data); 
    })
    .catch ((error) => {
        console.log({error});
       // console.log("error", error);
        //setCountryName([]);
    });
}, []);

//console.log('countryName', countryName);

return (
    <div>
        <h1>Countries </h1>   
      </div>
);

}
export default Countries; 
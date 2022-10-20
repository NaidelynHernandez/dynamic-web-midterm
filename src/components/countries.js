import React, {useEffect, useState } from "react";
import axios from "axios";


function Countries() {
const [countryName,setCountryName]= useState([]);
const URL= "https://restcountries.com/v3.1/all";


useEffect(() => {
    axios
    .get(URL)
    .then ((response) => {
        console.log("response", response);
        setCountryName(response.data); 
    })
    .catch ((error) => {
        console.log("error", error);
        setCountryName([]);
    });
}, []);



return (
    <div>
      {countryName.map((country,i)=> (
           <Home 
             list={Countries} 
             key={i} 
            
            /> 


      ))}
      </div>
);

}
export default countries; 
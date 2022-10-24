import React, {useEffect,useState } from "react";

import axios from "axios";
const astroURL='https://restcountries.com/v3.1/all';

function Home(){
const [countryData,setData]= useState({});


useEffect(()=> {
    axios
    .get(astroURL)
    .then(function (response) {
       console.log("response",response);
        setData(response.name);
        
        })
        .catch(function (error) {
            console.warn(error);
            setData({});
        });

},[]);

console.log("data",countryData);
return (
    <div> 
    <h1> countries</h1>
    <h2>{countryData }</h2>
    <p>{astroURL}</p>
    </div>
);


}
export default Home;


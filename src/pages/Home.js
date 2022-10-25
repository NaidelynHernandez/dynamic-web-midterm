import React, {useEffect,useMemo,useState } from "react";
import Countries from "../components/Countries";
import axios from "axios";



function Home(){
const [countryData,setData]= useState([]);

const astroURL='https://restcountries.com/v3.1/all'
const flagURL='https://countryflagsapi.com/png/'


useEffect(()=> {
    axios
   
    .get(astroURL)
    .then((response)=> {
       //console.log("response",response);
        setData(response.data);
        
        })
        .catch( (error)=>{
            console.warn(error);
            setData([]);
        }); 


},[]);

console.log("hehedata",countryData);

// const {altSpellings,
//        flags,
//        } = useMemo(() => {
//     const countryinfo= countryData.altSpellings || [];
    
//     return {
//         altSpellings: countryinfo.altSpellings && countryinfo.altSpellings[0],
//    };

// }, [countryData]);


return (
    <div> 
    <h1> Traveler's Guide</h1>
    {countryData.map((country,i) => (
       <Countries country={country} key={i}/> 
      
    ))}
    </div>
); 


}

export default Home;
    
    
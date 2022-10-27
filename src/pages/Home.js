
import React, {useEffect,useMemo,useState } from "react";
import Countries from "../components/Countries";
import axios from "axios";
import Bored from "../components/Bored";
import Header from "../components/Header"

function Home(){
const [countryData,setData]= useState([]);
const astroURL='https://restcountries.com/v3.1/all'
const [searchText, setSearchText ]= useState("");

const boredURL="https://www.boredapi.com/api/activity/"
const [boredData,setbored]= useState({});


useEffect(()=> {
    axios
    
    .get(astroURL)
   // .get(boredURL)
    .then((response)=> {
       //console.log("response",response);
        setData(response.data);
        
        })
        .catch( (error)=>{
            console.warn(error);
            setData([]);
        }); 



     axios
     .get(boredURL)
     .then(function (response) {
            setbored(response.data);


     }).catch(function(error){
        console.warn(error);
      setbored({});
    });

},[]);

console.log("heheheheactivities",boredData);
console.log("hehedata",countryData);

const{
    activity,
    type,
}= useMemo(() => {

const activity1= boredData.data || {};
return{
    activity: activity1.activity, 
    type: activity1.type,

};

},[boredData]);






async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }


  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }


  return (
    <section>

        <Bored
     activity={activity}
     type={type}
     
     
     />
 
        <section>
    <form 
        onSubmit= {handleSearchCountry}
        >
            <input 
                

            type="text"
            name="search"
            value={searchText}
            placeholder="Input country "
            onChange={(e) => setSearchText(e.target.value)}

        />

    </form>

            </section>
    <h1> Traveler's Guide</h1>
    {countryData.map((country,i) => (
       <Countries country={country} key={i}/> 
      
    ))}
     </section>
); 
}

export default Home; 
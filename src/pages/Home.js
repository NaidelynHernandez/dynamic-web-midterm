import React, {useEffect,useMemo,useState } from "react";
import Countries from "../components/Countries";
import axios from "axios";
import Bored from "../components/Bored";

function Home(){
const [countryData,setData]= useState([]);
const astroURL='https://restcountries.com/v3.1/all'
const [searchText, setSearchText ]= useState("");

const boredURL="https://www.boredapi.com/api/activity/"
const [boredData,setbored]= useState({});

useEffect(()=> {
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

const activity1= boredData || {};
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
      <form 
        className="nav"
        onSubmit= {handleSearchCountry} >
            <input 
            type="text"
            name="search"
            value={searchText}
            placeholder="Insert the Country you want to visit :)))" 
            onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    
    <section>

    <h1 class="title"> Traveler's Guide</h1>
    {countryData.map((country,i) => (
       <Countries country={country} key={i}/> 
      
    ))}
     </section>
    
   <section> 
     <Bored
     activity={activity}
     type={type}
     />
   </section>
   </section>
); 
}

export default Home; 
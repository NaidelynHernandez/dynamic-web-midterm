import React, {useEffect,useMemo,useState } from "react";
import Countries from "../components/Countries";
import axios from "axios";
import Bored from "../components/Bored";

function Home(){
const [countryData,setData]= useState([]);
const astroURL='https://restcountries.com/v3.1/all'
const [searchQuery, setSearchQuery ]= useState("");

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

async function searchInput() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchQuery}`
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  function Searching(e) {
    e.preventDefault();
    searchInput();
  }

  return (
    <section> 
      <form 
        className="nav"
        onSubmit= {Searching} >
            <input 
            type="text"
            name="search"
            value={searchQuery}
            placeholder="Insert the Country you want to visit :)))" 
            onChange={(e) => setSearchQuery(e.target.value)}
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

import React, {useEffect,useState } from "react";
import Countries from "../components/Countries";
import axios from "axios";
import Header from "../components/Header"

function Home(){
const [countryData,setData]= useState([]);
//const [searchText, setSearchText ]= useState("");
const astroURL='https://restcountries.com/v3.1/all'
//const flagURL='https://countryflagsapi.com/png/'
const [searchText, setSearchText ]= useState("");


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
    <div> 
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
   

    

</div>




); 


}

export default Home;
    
    

  

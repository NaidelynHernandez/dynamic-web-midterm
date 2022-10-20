import React from 'react'; 

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
), []); 



return (
      {countryName.map((country,i)=> (
            <home 
            Name={i}
            />


      ))}
);
      }
export default countries; 
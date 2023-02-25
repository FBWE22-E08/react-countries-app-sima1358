import { useEffect, useState } from "react";
import CountryCard from "../CountryCard";

 
export default function AllCountries() {

  const[countries, setCountries]=useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then((response)=>response.json())
    .then((data)=>setCountries(data))
  }, [])


  return (
    <div className="cardsContainer">
 {countries.map((item, i) => <CountryCard country={item} key={i} />)}
 
     </div>
  );
}

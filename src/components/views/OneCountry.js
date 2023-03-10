import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function OneCountry() {
    let {code} = useParams();

   const [country, setCountry]= useState({});

   useEffect(()=> {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
    .then((response) => response.json())
    .then((data)=> setCountry(data))
   } , [code])


  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "400px",
        height: "370px",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <img src={country.flag} alt={country.name} width="200px"/>
      <h1>{country.name}</h1>
      <span style={{ fontSize: "27px" }}>
        <b>Capital:</b> {country.capital}
      </span>
      <span style={{ fontSize: "27px" }}>
        <b> Area:</b> {country.area} km<sup>2</sup>
      </span>
      <div style={{ fontSize: "27px" }}>
        <b>Population:</b> {country.population}
      </div>
      
    </div>
  );
}


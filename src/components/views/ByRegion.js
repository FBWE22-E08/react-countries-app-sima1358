import { useEffect, useState } from "react";
import CountryCard from "../CountryCard";

 

export default function ByRegion() {
  //save the user input in the pre-made local state (region), then fetch all countries of that region on page load and make sure it gets executed every time the state (region) changes (what hook should you use for that? and what should you add to it?) then save the received array of countries in a local state (call it countries)

  const [region, setRegion] = useState("Africa");
  const [countries, setCountries]= useState(null)

  useEffect(()=>{
    fetch(`https://restcountries.com/v2/region/${region}`)
    .then((response)=> response.json())
    .then((data) => setCountries(data))

  }, [region])

  const handleChange = (e) => {
    setRegion(e.target.value)
  };


  return (
    <div>
      <input onChange={handleChange} type={"radio"} name="region" defaultChecked value="Africa" />
      <label style={{ marginRight: "15px" }}>Africa</label>
      <input onChange={handleChange} type={"radio"} name="region" value="Americas" />
      <label style={{ marginRight: "15px" }}>Americas</label>
      <input onChange={handleChange} type={"radio"} name="region" value="Asia" />
      <label style={{ marginRight: "15px" }}>Asia</label>
      <input onChange={handleChange} type={"radio"} name="region" value="Europe" />
      <label style={{ marginRight: "15px" }}>Europe</label>
      <input onChange={handleChange} type={"radio"} name="region" value="Oceania" />
      <label>Oceania</label>

      <div className="cardsContainer">
        {countries && countries.map((item, i) => <CountryCard country={item} key={i}/>)}
       </div>
    </div>
  );
}

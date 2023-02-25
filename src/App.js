import "./App.css";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import OneCountry from "./components/views/OneCountry";

function App() {

  return (
    <div className="App">
 <Header />
 <Routes>

<Route path="/" element={<AllCountries />} />
<Route path="/by-region" element={<ByRegion />} />
<Route path="/by-name" element={<ByName />} />
<Route path="*" element={<NotFound />} />
<Route path="/country/:code" element={<OneCountry />} />


 </Routes>
     </div>
  );
}

export default App;

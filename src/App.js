import Header from "./components/Header";
import ProviderContext,  { MyProvider }  from "./context/ProviderContext";
import React, { useContext } from 'react'
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./pages/country";
function Theme({children}) {
  const {theme,coountryInfo} = useContext(MyProvider);
  const classAtt = `${theme === 'light' ? 'bg-white text-dark' : 'bg_nice text-white'}`
  console.log(coountryInfo);
  return (
    <div className = {classAtt} id="theme" >
      <Header />
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/country" element={<Country 
                name = {coountryInfo.name}
                nativeName = {coountryInfo.nativeName}
                flags = {coountryInfo.flags}
                population = {coountryInfo.population}
                subregion = {coountryInfo.subregion}
                region = {coountryInfo.region}
                topLevelDomain = {coountryInfo.topLevelDomain}
                currencies = {coountryInfo.currencies}
                languages = {coountryInfo.languages}
                capital = {coountryInfo.capital}
                  // {...coountryInfo}
                />}
                 />
                <Route path="*" element={<h1>not</h1>}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <>
      <ProviderContext>
        <Theme />
      </ProviderContext>
    </>
  );
}

export default App;

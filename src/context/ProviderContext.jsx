import React, { createContext , useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const MyProvider = createContext();

export default function ProviderContext({children}) {
  const [theme, setTheme] = useState("light");
  const [coountryInfo, setCountryInfo] = useState({});
  const handleCountryInfo = (item)=>{
    // window.location.href = '/country';
    setCountryInfo(item);
    console.log(item)

  }
  const ToggleTheme = ()=>{
    if (theme === "light")
        setTheme("dark");
    else
        setTheme("light");
  }

  return (
   <MyProvider.Provider value={{theme, ToggleTheme, coountryInfo, handleCountryInfo}}>
      {children}
   </MyProvider.Provider>
  )
}

import React, { createContext , useState} from 'react'
export const MyProvider = createContext();
export default function ProviderContext({children}) {
  const [theme, setTheme] = useState("light");
  const ToggleTheme = ()=>{
    if (theme === "light")
        setTheme("dark");
    else
        setTheme("light");
  }
  return (
   <MyProvider.Provider value={{theme, ToggleTheme}}>
      {children}
   </MyProvider.Provider>
  )
}

import Header from "./components/Header";
import ProviderContext,  { MyProvider }  from "./context/ProviderContext";
import React, { useContext } from 'react'
import Home from "./pages/Home";
function Theme({children}) {
  const {theme} = useContext(MyProvider);
  const classAtt = `${theme === 'light' ? 'bg-white text-dark' : 'bg_nice text-white'}`
  return (
    <div className = {classAtt} id="theme">
      {children}
    </div>
  )
}

function App() {
  
  return (
    <>
      <ProviderContext>
        <Theme>
          <Header />
          <Home />
        </Theme>
      </ProviderContext>
    </>
  );
}

export default App;

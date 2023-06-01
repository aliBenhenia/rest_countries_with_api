import React, { useContext } from 'react'
import { MyProvider } from '../context/ProviderContext'
export default function Header() {
  const {ToggleTheme, theme} = useContext(MyProvider);
  const classAtt = `shadow p-3 fixed-top ${theme === 'light' ? 'bg-white text-dark' : 'headerDark text-white'}`
  return (
    <div className = {classAtt}>
        <div className='container d-flex justify-content-between'>
           <div className='text-left'>
               <p className='fw-bold '> Where in the world?</p>
           </div>
           <div className='text-right' onClick={ToggleTheme}>
               <p className='fw-bold '>Dark Mode 
                     <span className="material-symbols-outlined fs-6">
                     <span className="material-symbols-outlined ">
                        night_sight_max
                     </span>
                    </span>
                </p>
           </div>
        </div>
    </div>
  )
}

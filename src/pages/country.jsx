import React, {useContext, useEffect, useState} from 'react'
import ProviderContext,  { MyProvider } from "../context/ProviderContext"
import {Image} from "antd"
import { useNavigate } from 'react-router-dom'
export default function Country(props) {
    const {name, nativeName, population, region, subregion, topLevelDomain, currencies, languages, capital,flags} = props
    const {theme} = useContext(MyProvider);
    const classAtt = `${theme === 'light' ? 'bg-white text-dark' : 'bg_nice text-white'}`
    const classAttBtn = `${theme === 'light' ? 'bg-dark text-white' : 'bg-white text-dark'}`
    const navigate = useNavigate();
  return (
    <div id='country' className={classAtt}>
        <div className='container'> 
                 {/* <a href='/' className={classAttBtn}> */}
                 <p
                  id='back_p'
                  onClick={()=> navigate("/")} className={classAttBtn}>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                    </p>
                {/* </a> */}
                <div className='mt-4 row'> 
                    <div className='col-md-6 mt-3'>
                       <img src={flags.svg} className="card-img-top img-fluid rounded" style={{ width: '110%', height: '200px', objectFit: 'cover' }} alt="Card Image"/>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <h2>{name}</h2>
                        <div className='row'> 
                           <div className='col-6'>
                           <ul className="list-unstyled mt-4 ">
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Native Name:</p> <span className='d-inline-block'>{nativeName}</span> </li>
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Population:</p> <span className='d-inline-block'>{population}</span> </li>
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Region:</p> <span className='d-inline-block'>{region}</span> </li>
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Sub Region:</p> <span className='d-inline-block'>{subregion}</span> </li>
                            </ul>
                           </div>
                           <div className='col-6'>
                           <ul className="list-unstyled mt-4 ">
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>
Top Level Domain: </p> <span className='d-inline-block'>{topLevelDomain}</span> </li>
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Currencies:</p> <span className='d-inline-block'>{currencies[0].name} {currencies[0].symbol} </span> </li>
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Languages:</p> <span className='d-inline-block'>{languages[0].nativeName}</span> </li>
                                 <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Capital:</p> <span className='d-inline-block'>{capital}</span> </li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

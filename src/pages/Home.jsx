import React, { useEffect , useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import {Image , Select, Card, Button} from "antd"
import { MyProvider } from '../context/ProviderContext';
import data from "../data.json"
const { Meta } = Card;
export default function Home() {
  const [value, setValue] = useState(data);
  const [search, setSearch] = useState(null);
  const [select, setSelect] = useState(null);
  const {theme, handleCountryInfo} = useContext(MyProvider);
  const handleSearch = (event)=>{
    const query = event.target.value
    setSearch(query);
    const filtred = data.filter((item)=>{
        return item.name.toLowerCase().includes(query.toLowerCase());
    })
    setValue(filtred);
    }
  const handleSelect = (selected)=>{
    setSelect(selected);
    const filtered = data.filter((item)=>{
        return (item.region == selected)
    })
    setValue(filtered)
  }
  const navigate = useNavigate();
  const handleCountry_route = (item)=>{
    handleCountryInfo(item);
    navigate("country")
  }
//   document.body.style.backgroundColor = theme === 'dark' ? '#000000 !important' : '#ffffff !important';
  return (
    <div className='container mt-5 p-3 home'>
       <div className='d-flex  justify-content-between '>
            <div className='text-left position-relative'>
                <input type='text' placeholder='serach for country' 
                className='search shadow '
                value={search}
                onChange={handleSearch}
                />
                <span className="material-symbols-outlined search_icon">
                    manage_search
                </span>
            </div>
            <div className='text-right'>
            <Select
                showSearch
                placeholder="filter by region"
                optionFilterProp="children"
                value = {select}
                onChange={handleSelect}
                filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                {
                    value: 'Asia',
                    label: 'Asia',
                },
                {
                    value: 'Europe',
                    label: 'Europe',
                },
                {
                    value: 'Africa', 
                    label: 'Africa',
                },
                {
                    value: 'Americas', 
                    label: 'Americas',
                },
                {
                    value: 'Oceania', 
                    label: 'Oceania',
                },

                ]}
            />
            </div>
       </div>
        <div className='row img_container container pt-4'>
       {
        value.map((item,idx) =>{
                const classAtt = `card shadow  col-md-5 col-xl-3 m-3  ${theme === 'light' ? 'bg-white text-dark' : 'bg_card text-white'}`;
                return(
                        <div key={idx} className= {classAtt} onClick={()=>handleCountry_route(item)} >
                            <Image src={item.flags.svg} className="card-img-top img-fluid" style={{ width: '110%', height: '200px', objectFit: 'cover' }} alt="Card Image"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <ul className="list-unstyled mt-4 ">
                                    <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>Population:</p> <span className='d-inline-block'>{item.population}</span> </li>
                                    <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>region:</p> <span className='d-inline-block'>{item.region}</span> </li>
                                    <li className="mb-2 pl-4"><p className=' d-inline-block p_info'>capital:</p> <span className='d-inline-block'>{item.capital}</span> </li>
                                </ul>
                            </div>
                        </div>
                );
            })
        }
        </div>
    </div>
  )
}

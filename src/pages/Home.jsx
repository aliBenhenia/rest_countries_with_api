import React, { useEffect , useContext } from 'react'
import { SearchOutlined } from '@ant-design/icons';
import {Image , Select, Card, Button} from "antd"
import { MyProvider } from '../context/ProviderContext';
import data from "../data.json"
const { Meta } = Card;
export default function Home() {
  const {theme} = useContext(MyProvider);
  document.body.style.backgroundColor = theme === 'dark' ? '#000000 !important' : '#ffffff !important';
  return (
    <div className='container mt-5 p-3 home'>
       <div className='d-flex  justify-content-between '>
            <div className='text-left position-relative'>
                <input type='text' placeholder='serach for country' className='search shadow '/>
                <span className="material-symbols-outlined search_icon">
                    manage_search
                </span>
            </div>
            <div className='text-right'>
            <Select
                showSearch
                placeholder="filter by region"
                optionFilterProp="children"
                // onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
                {
                    value: 'tom', 
                    label: 'Tom',
                },
                ]}
            />
            </div>
       </div>
        <div className='row img_container container pt-4'>
       {
            data.map((item,idx) =>{
                const classAtt = `card shadow  col-md-5  col-xl-3 m-3  ${theme === 'light' ? 'bg-white text-dark' : 'bg_card text-white'}`;
                return(
                     <div key={idx} className= {classAtt}>
                        <Image src={item.flags.svg} className="card-img-top img-fluid" style={{ width: '110%', height: '200px', objectFit: 'cover' }} alt="Card Image"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            {/* <a href="/country" className="">See more</a> */}
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

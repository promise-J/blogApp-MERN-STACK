import './sidebar.css'
import Img from '../../asset/palint.PNG'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [cat, setCat] = useState([])

    useEffect(()=>{
      const getCats = async()=> {
        const {data} = await axios.get('/categories')
        // console.log(data)
        setCat(data)
      }
      getCats()
    }, [])
   
    return (
        <div className='sidebar'>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className='sidebarImage' src={Img} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nam, 
                    id perferendi voluptatem optio veritatis similique ullam quaerat 
                    molestiae dolorum alias!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul>
                    {cat.map(c=>(
                    <Link className='link' to={`?cat=${c.name}`}>
                    <li className='sidebarListItem'>{c.name}</li>
                    </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className='sidebarSocials'>
                    <i className='sidebarIcon fab fa-facebook'></i>
                    <i className='sidebarIcon fab fa-instagram'></i>
                    <i className='sidebarIcon fab fa-twitter'></i>
                    <i className='sidebarIcon fab fa-pinterest'></i>
                </div>
            </div>
        </div>
    )
}

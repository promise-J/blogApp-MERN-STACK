import './sidebar.css'
import Img from '../../asset/palint.PNG'

import React from 'react'

export default function Sidebar() {
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
                    <li className='sidebarListItem'>Tech</li>
                    <li className='sidebarListItem'>Fashion</li>
                    <li className='sidebarListItem'>Economy</li>
                    <li className='sidebarListItem'>National Crises</li>
                    <li className='sidebarListItem'>Friends zone</li>
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

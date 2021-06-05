import './singlePost.css'
import Work from '../../asset/new_work.jpg'

import React from 'react'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <img src={Work} alt='personal' />
            <div className="post-info">
                <div className="post-icons">
                    <i className="far fa-edit post-icon1"></i>
                    <i className="far fa-trash-alt post-icon2"></i>
                </div>
                <p className='name1'>Author: <span className='name2'>Promise</span></p>
                <h4 className="post-title">This is a post about Chelsea football club</h4>
                <small className="postDesc">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Reprehenderit omnis doloremque sed cum voluptates
                 maiores eligendi in corrupti, debitis officiis numquam?
                 Soluta at earum, nesciunt asperiores assumenda facere
                  voluptatibus magni! Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Voluptates consequuntur repudiandae molestiae
                    alias vel aperiam! Provident fugiat esse accusantium minus quo doloremque
                   maxime reiciendis ex, odio ullam ipsa libero totam!</small>
            <span className='time-crt'>Created 1hour ago.</span>
            </div>
        </div>
    )
}

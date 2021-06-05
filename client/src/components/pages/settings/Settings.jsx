import './settings.css'
import Pic from '../../../asset/me.jpg'
import Sidebar from '../../sidebar/Sidebar'

import React from 'react'

export default function Settings() {
    return (
        <div className='settings'>
        <div className='settingWrapper'>
            <div className="settingTitles">
                <span className="setUpdate">Update Your Account</span>
                <span className="setDel">Delete Account</span>
            </div>
            <div className="set-pic-div">
            <img src={Pic} alt="my profile" className='set-pic' />
            <label htmlFor="dp"><i className="far fa-user set-pic-icon"></i></label>
            <input type="file" id='dp' hidden='true' />
            </div>
            <form className="set-form">
                <div className="form-div">
                    <label>User Name</label>
                    <input type="text" className="form-item" placeholder='Promise' />
                </div>
                <div className="form-div">
                    <label>Email</label>
                    <input type="email" className="form-item" placeholder='promise@gmail.com' />
                </div>
                <div className="form-div">
                    <label>Password</label>
                    <input type="password" className="form-item" placeholder='Password' />
                </div>
                <input type="submit" className='set-submit' value='Update' />
            </form>
        </div>
        <Sidebar />
        </div>
    )
}

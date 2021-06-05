import './login.css'

import React from 'react'

export default function Login() {
    return (
        <div className='login'>
            <h1>Login</h1>
            <hr style={{height: '400px'}}/>
            <form className="login-form">
                <div className="login-form-div">
                    <label>Email</label>
                    <input type="email" className="login-item" placeholder='promise@gmail.com' />
                </div>
                <div className="login-form-div">
                    <label>Password</label>
                    <input type="password" className="login-item" placeholder='Password' />
                </div>
                <input type="submit" className='log-submit' value='LOGIN' />
            </form>
            <a href='/' className="login-register">REGISTER</a>
        </div>
    )
}

import './register.css'
import React, {useState} from 'react'



export default function Register() {
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    return (
        <div className='register'>
            <h1>REGISTER HERE</h1>
            <hr style={{height: '500px'}}/>
            <form className="register-form">
                <div className="register-form-div">
                    <label>Username</label>
                    <input type="email" className="register-item" placeholder='promise@gmail.com' />
                </div>
                <div className="register-form-div">
                    <label>Email</label>
                    <input type="email" className="register-item" placeholder='promise@gmail.com' />
                </div>
                <div className="register-form-div">
                    <label>Password</label>
                    <input type="password" className="register-item" placeholder='Password' />
                </div>
                <input type="submit" className='log-submit' value='REGISTER' />
            </form>
            <a href='/' className="register-login">LOGIN</a>
        </div>
    )
}

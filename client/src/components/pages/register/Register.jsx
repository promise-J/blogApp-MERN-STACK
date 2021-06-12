import './register.css'
import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        setErrorText('')
        try {     
           const res = await axios.post('/auth/register', {username, email, password})
           console.log(res)
           if(res.data === 'User already exist...'){
                setError(true)
                setErrorText('User already exists')
           }else{
               window.location.replace('login')
           }
        //    res.data && window.location.replace('/login')
       } catch (error) {
           setError(true)
           setErrorText('Something went wrong.')
       }
        // console.log(submitUser)
        console.log('works')
    }

    return (
        <div className='register'>
            <h1>REGISTER HERE</h1>
            <hr style={{height: '500px'}}/>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-form-div">
                    <label>Username</label>
                    <input type="text"
                     className="register-item" 
                     placeholder='promise'
                    //  value=''
                     onChange={(e)=> setUsername(e.target.value)} />
                </div>
                <div className="register-form-div">
                    <label>Email</label>
                    <input 
                    type="email" 
                    className="register-item" 
                    placeholder='promise@gmail.com...' 
                    // value=''
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="register-form-div">
                    <label>Password</label>
                    <input type="password" 
                    className="register-item" 
                    placeholder='Password...' 
                    // value=''
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='log-submit'>Register</button>
            {error && <span style={{color: 'red', marginTop: '10px', textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>{errorText}</span>}
            </form>
            <button className='register-login'>
            <Link to='/login' className="link">LOGIN</Link>
            </button>
        </div>
    )
}

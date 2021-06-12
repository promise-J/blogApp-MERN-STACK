import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import React, { useContext, useRef, useState } from 'react'
import { Context } from '../../../context/Context'

export default function Login() {
    const { user, dispatch, isGetting } = useContext(Context)
    const userRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(false)

    const HandleSubmit = async(e) =>{
        e.preventDefault()
        dispatch({type: 'LOGIN_START'})
        try {
            const res = await axios.post('/auth/login',{
                username: userRef.current.value,
                password: passwordRef.current.value
            })
           
            console.log(user)
            if(res.data==='User not found'){
                console.log('we caught you')
                dispatch({type: 'LOGIIN_FAILURE'})
                setError(true)
                
            }
            dispatch({type: 'LOGIN_SUCCESS', payload: res.data })

        } catch (error) {
        dispatch({type: 'LOGIN_FAILURE'})
         setError(true)
        }
    }

    console.log(user)


    return (
        <div className='login'>
            <h1>Login</h1>
            <hr style={{height: '400px'}}/>
            <form className="login-form" onSubmit={HandleSubmit}>
                <div className="login-form-div">
                    <label>Username</label>
                    <input 
                    type="text" 
                    
                    className="login-item" 
                    placeholder='Enter Username..' 
                    // onChange={e=> setEmail(e.target.value)} 
                    ref={userRef} />
                </div>
                <div className="login-form-div">
                    <label>Password</label>
                    <input 
                    type="password"
                     className="login-item" 
                     placeholder='Enter Password..' 
                    //  onChange={e=> setPassword(e.target.value)} 
                     ref={passwordRef} />
                </div>
                <button className='log-submit' type='submit' disabled={isGetting}>Login</button>
                {error && <span style={{color: 'red', textAlign: 'center', marginTop: '20px'}}>Couldn't log in. Check your credentials.</span>}
            </form>
            <button className='login-register'>
            <Link to='/register' className="link">REGISTER</Link>
            </button>
        </div>
    )
}

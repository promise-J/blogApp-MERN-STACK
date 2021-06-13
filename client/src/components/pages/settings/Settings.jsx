import './settings.css'
// import Pic from '../../../asset/me.jpg'
import Sidebar from '../../sidebar/Sidebar'

import React, { useContext, useState } from 'react'
import { Context } from '../../../context/Context'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const PF = 'http://localhost:5000/'

export default function Settings() {
    const history = useHistory()
    const {user, dispatch} = useContext(Context)
    const [email, setEmail] = useState(user.email)
    const [username, setUsername] = useState(user.username)
    const [file, setFile] = useState('')

    const handleDelete = async (e) => {
       e.preventDefault()

       try {
           await axios.delete('/users/'+ user._id)
           dispatch({type: 'LOGOUT'})
           history.push('/')
       } catch (error) {
           console.log(error)
       }
    }
    
    const handleSubmit = async(e)=> {
        e.preventDefault()
        
         const updatedUser = {
            userId: user._id,
            email,
            username,
        }
 
         if(file){
             const data = new FormData()
             const filename = Date.now() + file.name
             data.append('name', filename)
             data.append('file', file)
             // updatedUser.photo = data
             try {
                 const res = await axios.post("/upload", data)
                 console.log(res.data, 'from images side')
                 updatedUser.photo = res.data
             } catch (error) {
                 console.log(error, 'from image side')
             }
         }
         try {
             dispatch({type: 'UPDATE_START'})
             console.log(updatedUser, 'before saving.')
             const res = await axios.put("/users/"+user._id, updatedUser)
             history.push('/settings')
             // window.location.replace("/posts/" + res.data._id)
             console.log(res)
             dispatch({type: 'UPDATE_SUCCESS', payload: res.data})
         } catch (error) {
            dispatch({type: 'UPDATE_FAILURE'})
             console.log(error)
         }
        }
   


    return (
        <div className='settings'>
        <div className='settingWrapper'>
            <div className="settingTitles">
                <span className="setUpdate" onClick={handleSubmit}>Update Your Account</span>
                <span className="setDel" onClick={handleDelete}>Delete Account</span>
            </div>
            <div className="set-pic-div">
            <img src={file ? URL.createObjectURL(file) : PF + user.photo} alt="my profile" className='set-pic' />
            <label htmlFor="dp"><i className="far fa-user set-pic-icon"></i></label>
            <input type="file" id='dp' hidden='true' onChange={e=> setFile(e.target.files[0])} />
            </div>
            <form className="set-form" onSubmit={handleSubmit}>
                <div className="form-div">
                    <label>User Name</label>
                    <input type="text" className="form-item" value={username} onChange={e=> setUsername(e.target.value)} placeholder={user.username} />
                </div>
                <div className="form-div">
                    <label>Email</label>
                    <input type="email" className="form-item" value={email} onChange={e=> setEmail(e.target.value)} placeholder={user.email} />
                </div>
                <button type="submit" className='set-submit' >Update</button>
            </form>
        </div>
        <Sidebar />
        </div>
    )
}

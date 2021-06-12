// import Test from '../../../asset/me.jpg'

import React, { useContext, useState } from 'react'
import './write.css'
import axios from 'axios'

import {Context} from '../../../context/Context'



export default function Write() {
    const {user} = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = async(e)=> {
       e.preventDefault()
       
        const newPost = {
           username: user.username,
           title,
           desc
        }

        if(file){
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append('name', filename)
            data.append('file', file)
            newPost.photo = filename
            try {
                await axios.post("/upload", data)
            } catch (error) {
                console.log(error)
            }
        }
        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace("/posts/" + res.data._id)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

  
    }


    return (
        
        <>
        <div className='write'>
            {file && <img src={URL.createObjectURL(file)} alt="post" className="write-form-img" />}
            <form className='write-form' onSubmit={handleSubmit}>
                <div className="write-form-div">
                    <label htmlFor="dp"><i className="fa fa-plus write-form-icon"></i></label>
                    <input type="file" id='dp' hidden='true' onChange={e=> setFile(e.target.files[0])} />
                    <input type="text" className="write-form-input" onChange={e=> setTitle(e.target.value)} placeholder='Your Title' />
                </div>
                <textarea className='write-form-tx' onChange={e=> setDesc(e.target.value)} placeholder='Describe Your Post Here' ></textarea>
                <button className='write-form-btn' type="submit">Publish</button>
            </form>
        </div>
        </>
    )
}


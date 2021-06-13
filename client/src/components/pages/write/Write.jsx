// import Test from '../../../asset/me.jpg'

import React, { useContext, useState } from 'react'
import './write.css'
import axios from 'axios'

import {Context} from '../../../context/Context'
import { useHistory } from 'react-router-dom'



export default function Write() {
    const history = useHistory()
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
            // newPost.photo = data
            try {
                const res = await axios.post("/upload", data)
                console.log(res.data, 'from images side')
                newPost.photo = res.data
            } catch (error) {
                console.log(error, 'from image side')
            }
        }
        try {
            console.log(newPost, 'before saving.')
            const res = await axios.post("/posts", newPost)
            history.push('/posts/' + res.data._id)
            // window.location.replace("/posts/" + res.data._id)
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


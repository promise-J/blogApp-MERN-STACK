import './singlePost.css'
// import Work from '../../asset/new_work.jpg'

import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/Context'

const PF = 'http://localhost:5000/'

export default function SinglePost() {
    const { user } = useContext(Context)
    const history = useHistory()
    const [post, setPost] = useState({})
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const {pathname} = useLocation()
    const postId = pathname.split('/')[2]
    useEffect(()=>{
        const getPost = async ()=>{
            const post = await axios.get(`/posts/${postId}`)
            console.log(post.data)
            setPost(post.data)
            setTitle(post.data.title)
            setDesc(post.data.desc)
        }
        getPost()
    }, [postId])

    const handleDelete = async (e)=>{
       await axios.delete('/posts/'+ postId, {username: user.username})
       history.push('/')
    }

    const handleUpdate = async ()=> {
        try {
            axios.put('/posts/'+ post._id, {username: user.username, title, desc })
            setEditing(false)
            history.push('/posts/'+post._id)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='singlePost'>
            {post.photo && <img src={PF + post.photo} alt='personal' />}
            <h2 style={{fontSize: '29px', textTransform: 'uppercase', textAlign: 'center'}}>{post.title}</h2>
            <div className="post-info">
                <div className="post-icons">
                { user.username === post.username && 
                    <><i className="far fa-edit post-icon1" onClick={()=> setEditing(true)}></i>
                    <i className="far fa-trash-alt post-icon2" onClick={handleDelete}></i></>
                }
                </div>
                <p className='name1'>Author: 
                <Link className='link' to={`/?user=${post.username}`}><span className='name2'>{post.username}</span></Link>
                </p>
                {
                    editing ? <div className='editing-section'>
                             <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} autoFocus className='single-editing-input'/> 
                             <textarea className='single-editing-input' onChange={(e)=> setDesc(e.target.value)} value={desc}></textarea> 
                             <button className='editing-button' onClick={handleUpdate}>Update</button>
                             </div> 
                             :   <>
                                  <h4 className="post-title">{title}</h4> 
                                  <small className="singpostDesc">{desc}</small>
                                 </>
                }
               
            <span className='time-crt'>{new Date(post.createdAt).toDateString()}</span>
            </div>
        </div>
    )
}

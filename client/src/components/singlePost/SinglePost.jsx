import './singlePost.css'
import Work from '../../asset/new_work.jpg'

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import {Link} from 'react-router-dom'
import axios from 'axios'
const PF = 'http://localhost:5000/image/'

export default function SinglePost() {
    const [post, setPost] = useState({})
    const {pathname} = useLocation()
    const postId = pathname.split('/')[2]
    useEffect(()=>{
        const getPost = async ()=>{
            const post = await axios.get(`/posts/${postId}`)
            console.log(post.data)
            setPost(post.data)
        }
        getPost()
    }, [postId])
    return (
        <div className='singlePost'>
            {post.photo && <img src={PF + post.photo} alt='personal' />}
            <h2 style={{fontSize: '29px', textTransform: 'uppercase', textAlign: 'center'}}>{post.title}</h2>
            <div className="post-info">
                <div className="post-icons">
                    <i className="far fa-edit post-icon1"></i>
                    <i className="far fa-trash-alt post-icon2"></i>
                </div>
                <p className='name1'>Author: 
                <Link className='link' to={`/?user=${post.username}`}><span className='name2'>{post.username}</span></Link>
                </p>
                <h4 className="post-title">{post.title}</h4>
                <small className="singpostDesc">{post.desc}</small>
            <span className='time-crt'>{new Date(post.createdAt).toDateString()}</span>
            </div>
        </div>
    )
}

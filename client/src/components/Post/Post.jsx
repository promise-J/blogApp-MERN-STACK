import './post.css'
import {Link, useHistory} from 'react-router-dom'
// import postImg from '../../asset/bg.jpg'

import React, { useContext } from 'react'
import { Context } from '../../context/Context'

export default function Post({post}) {
    const {user, dispatch } = useContext(Context)
    const history = useHistory()

    console.log(post)
    const PF = "http://localhost:5000/"
    return (
        <div className='post'>            
           {post.photo && <img src={PF + post.photo} alt="my self" className='post-img' />}
            <div className="postInfo">
                <div className="postCats">
                
                        {post.categories.map(c=>
                            (
                                <span className="postCat">{c.name}</span>
                            )
                        )}

                </div>
                <Link className='link' to={ user ? `posts/${post._id}`: '/login'} ><span className="postTitle">{post.title} </span></Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()} </span>
            </div>
            <p className="postDesc">{post.desc} </p>
        </div>
    )
}

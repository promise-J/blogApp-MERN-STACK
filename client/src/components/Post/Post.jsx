import './post.css'
import {Link} from 'react-router-dom'
import postImg from '../../asset/focus.PNG'

import React from 'react'

export default function Post({post}) {
    // console.log(post._id)
    return (
        <div className='post'>            
            <img src={postImg} alt="my self" className='post-img' />
            <div className="postInfo">
                <div className="postCats">
                        {post.categories.map(c=>
                            (
                                <span className="postCat">{c}</span>
                            )
                        )}
                </div>
                <Link className='link' to={`posts/${post._id}`} ><span className="postTitle">{post.title} </span></Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()} </span>
            </div>
            <p className="postDesc">{post.desc} </p>
        </div>
    )
}

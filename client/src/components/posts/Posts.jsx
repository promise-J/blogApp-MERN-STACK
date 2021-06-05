import './posts.css'
import Post from '../Post/Post'

import React from 'react'

export default function Posts({posts}) {
    // console.log(posts)

    return (
        <div className='posts'>
            {
                posts.map(post =>{
                    return (<Post key={post.id} post={post} />)
                })
            }
          
        </div>
    )
}

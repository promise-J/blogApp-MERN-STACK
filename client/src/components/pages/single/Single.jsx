// import axios from 'axios'
// import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../sidebar/Sidebar'
import SinglePost from '../../singlePost/SinglePost'
import './single.css'

export default function Single() {
    const location = useLocation
    // console.log(location)
    // const [post, setPost] = useState({})
    // useEffect(()=>{
    //   const getPost = async ()=>{
    //      const res = await axios.get('/posts')
    //      console.log(res.data);
    //   }
    //   getPost()
    // }, [])

    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}

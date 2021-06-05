import './Home.css'
import Header from '../../Header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import {useLocation} from 'react-router-dom'

export default function Home() {
  // const url = "http://localhost:5000/api/posts"

  // const location = useLocation()
  // console.log(location)
    const [posts, setPosts] = useState([])
    useEffect(()=>{
      const getPosts = async ()=>{
        const response = await axios.get("/posts")
        console.log(response.data);
        setPosts(response.data)
        
      }
      getPosts()
    },[])

    return (
      <>
      <Header />
      <div className='homepage'>
          <Posts posts={posts} />
          <Sidebar />          
        </div>
      </>
    )
}

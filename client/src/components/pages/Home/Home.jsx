import './Home.css'
import Header from '../../Header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'

export default function Home() {

  const {search} = useLocation()
  // console.log(search)
    const [posts, setPosts] = useState([])
    useEffect(()=>{
      const getPosts = async ()=>{
        const response = await axios.get("/posts"+ search)
        // console.log(response.data);
        setPosts(response.data)
        
      }
      getPosts()
    },[search])

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

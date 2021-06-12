import { Link } from "react-router-dom";
import './TopBar.css'
import Image from '../../asset/me.jpg'
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const {user, dispatch} = useContext(Context)
  console.log(user)
  const handleLogout = ()=> {
    dispatch({type: 'LOGOUT'})
  }
    return (
        <div className="TopBar">
            <div className="topbar-first">
              <i className="topIcon fab fa-facebook"></i>
              <i className="topIcon fab fa-instagram"></i>
              <i className="topIcon fab fa-twitter"></i>
              <i className="topIcon fab fa-pinterest"></i>
            </div>
            <div className="topbar-second">
              <ul className='top-list'>
                  <li className='top-list-item'><Link className='link' to='/'>HOME</Link></li>
                  <li className='top-list-item'><Link className='link' to='/about'>ABOUT</Link></li>
                  <li className='top-list-item'><Link className='link' to='/contact'>CONTACT</Link></li>
                  <li className='top-list-item'><Link className='link' to='/write'>WRITE</Link></li>
                  
                  {
                    user ? <li onClick={handleLogout}><Link className='link top-list-item'>LOGOUT</Link></li> : (<><li><Link className='link top-list-item' to='/login'>LOGIN</Link></li> <li><Link className='link top-list-item' to='/register'>REGISTER</Link></li></>)

                  }
              </ul>
            </div>
            {user &&
            <div className="topbar-third">
                  <img src={user.photo} alt="profile" className='image' /> 
                    <i className="fas fa-search top-item-search"></i>
                    <p style={{marginLeft: '20px'}}>{user.username}</p>
            </div>
            }
        </div>
    )
}

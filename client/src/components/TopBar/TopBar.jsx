import { Link } from "react-router-dom";
import './TopBar.css'
import Image from '../../asset/me.jpg'

export default function TopBar() {
  const user = true
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
                    user && <li className='top-list-item'>LOGOUT</li>
                  }
              </ul>
            </div>
            <div className="topbar-third">
                  <img src={Image} alt="profile" className='image' /> 
        

                    <i className="fas fa-search top-item-search"></i>
                  <ul className="top-list">
                    {!user && <li><Link className='link' to='/register'>REGISTER</Link></li>}
                  </ul>
            </div>
        </div>
    )
}

import './Header.css'
import Bg from '../../asset/blog2.jpg'
export default function Header() {
    return (
        <div className='Header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className='header-img' src={Bg} alt="home page background" />
        </div>
    )
}

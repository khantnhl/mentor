import logo from '../assets/images/page_logo.jpg'
import { Link} from 'react-router-dom'

export default function Header(onClick) {
    return(
        <nav className='nav-bar'>   
            <p><img src={logo} alt='logo' height="25"/></p>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <a href="#contact-section">Contact</a>
                </li> */}
            </ul>
        </nav>
    )
}
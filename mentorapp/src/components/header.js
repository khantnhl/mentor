import logo from '../assets/images/page_logo.jpg'

export default function Header(props) {
    return(
        <nav className='nav-bar'>   
            <p><img src={logo} alt='logo' height="25"/></p>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contact-us">Contact</a></li>
            </ul>
        </nav>
    )
}
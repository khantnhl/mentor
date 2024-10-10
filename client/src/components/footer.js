import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <div className="footer">   
            <p>Copyright © 2024</p>
            <div className="social-icons">
                <a href="https://www.instagram.com" target="blank" rel='noopener'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com" target="blank" rel='noopener'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;

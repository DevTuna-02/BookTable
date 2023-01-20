import Fnav from './Fnav';
import footlogo from '../assets/footlogo.svg';
function Footer() {
    return(
        <footer>
            <img src={footlogo} alt="Little Lemon Logo" width="147" height="260"/>
            <div>
                <h2>Doormat Navigation</h2>
                <Fnav/>
            </div>
            <div>
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h2>Social Media Links</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
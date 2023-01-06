import Nav from './Nav';
import logo from './assets/Logo.svg';
function Header() {
    return(
        <header>
            <img src={logo} alt="Little Lemon Logo" width="200" height="55"/>
            <Nav/>
        </header>
    )
}

export default Header;
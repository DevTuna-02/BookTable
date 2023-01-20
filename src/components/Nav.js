import {Link} from 'react-router-dom';
function Nav() {
    return(
        <nav>
            <ul>
            <li>
                    <Link to='/'>HOME</Link>
                    </li>
                    <li>
                    <Link to='/'>MENU</Link>
                </li>
                <li>
                <Link to='/'>ABOUT</Link>
                </li>
                <li>
                <Link to='/'>RESERVATIONS</Link>
                </li>
                <li>
                <Link to='/'>ORDER ONLINE</Link>
                </li>
                <li>
                <Link to='/'>LOGIN</Link>
                </li>
            </ul>
        </nav>
        
    )
}

export default Nav;
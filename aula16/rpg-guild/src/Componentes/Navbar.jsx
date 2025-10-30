import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return(
        <nav className="navbar">
            <h1>RPG Guildas</h1>
            <ul className="menu">
                <li><Link to= '/'>Home</Link></li>
                <li><Link to='/guilds'>Guildas</Link></li>
                <li><Link to='/member'>Membros</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar;
// CSS imported in App.js
import logo from "./img/ziusa-logo.png";

export default function Navbar() {
    return <header>
        <nav className="nav-bar">
            <img src={logo} alt="ZIUSA Logo"></img>
            <a className="logo" href="#">Zomi Refugee Program</a>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Team</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </header>
}
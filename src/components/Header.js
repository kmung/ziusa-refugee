// CSS imported in App.js
import { Link } from "react-router-dom";
import logo from "../img/ziusa-logo.png";
//import {Home} from "./pages/Home";

export default function Navbar() {
    return (<header>
        <nav className="nav-bar">
            <div className="brand">
                <img id="logo" src={logo} alt="ZIUSA Logo"></img>
                <Link to="/" id="site-title">Zomi Refugee Program</Link>
            </div>
            <div className="nav-menu">
                <ul className="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="team">Team</Link></li>
                </ul>
                <button type="button"><i className="bi bi-envelope"></i>Contact Us</button>
            </div>
        </nav>
    </header>
    );
}
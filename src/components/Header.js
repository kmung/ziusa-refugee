//import {Link, Route, Routes} from "react-router-dom";

// CSS imported in App.js
import logo from "../img/ziusa-logo.png";
//import {Home} from "./pages/Home";

export default function Navbar() {
    return (<header>
        <nav className="nav-bar">
            <div className="brand">
                <img id="logo" src={logo} alt="ZIUSA Logo"></img>
                <a href="#" id="site-title">Zomi Refugee Program</a>
            </div>
            <div className="nav-menu">
                <ul className="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
                <button type="button">Contact Us</button>
            </div>
        </nav>
    </header>
    );
}
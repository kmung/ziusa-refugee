import "./style/Navbar.css"
import {img} from "./images/logo.png"

import {About} from "../pages/About"
import {Contact} from "../pages/Contact"
import {Team} from "../pages/Team"

import {Link, Route, Routes} from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <nav>
            <div>
                <img src={img} alt="logo"></img>
                <p>JOURNEY END</p>
                
            </div>
            
        </nav>

        <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/" element={<Team />}/>
            <Route path="/" element={<Contact />}/>
        </Routes>
        </>
    )
}
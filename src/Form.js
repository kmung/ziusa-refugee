import React from "react"
import "./form.css"

export default function Form() {
    return (
        <div className="form">
            <form action="https://formsubmit.co/abe62e78ff243a750eff1ced927d3509" method="POST">
            
                <label for="first-name"><span style={{color: "red"}}>*</span> Enter Your First Name:
                    <input id="first-name" name="first-name" type="text" required />
                </label>

                <label for="last-name"><span style={{color: "red"}}>*</span> Enter Your Last Name:
                    <input id="last-name" name="last-name" type="text" required />
                </label>

                <label for="user-email"><span style={{color: "red"}}>*</span> Enter Your Email:
                    <input id="user-email" name="user-email" type="email" required />
                </label>

                <label for="subject">Enter your Subject:
                    <input id="subject" name="subject" type="text" />
                </label>

                <label for="message"><span style={{color: "red"}}>*</span> Enter Your Message:
                    <input id="message" name="message" type="text" required />
                </label>

                <p>Items marked with <span style={{color: "red"}}>*</span> must be filled out</p>
                <input type="submit" />
            </form>
        </div>
    )
}
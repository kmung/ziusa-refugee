import './contact.css';

export default function Contact() {
    return (
        <div className="form">
            <form action="https://formsubmit.co/abe62e78ff243a750eff1ced927d3509" method="POST">
            
                <label htmlFor="first-name"><span style={{color: "red"}}>*</span> Enter Your First Name:
                    <input id="first-name" name="first-name" type="text" placeholder='First Name' required />
                </label>

                <label htmlFor="last-name"><span style={{color: "red"}}>*</span> Enter Your Last Name:
                    <input id="last-name" name="last-name" type="text" placeholder='Last Name' required />
                </label>

                <label htmlFor="user-email"><span style={{color: "red"}}>*</span> Enter Your Email:
                    <input id="user-email" name="user-email" type="email" placeholder='Email' required />
                </label>

                <label htmlFor="subject">Subject:
                    <input id="subject" name="subject" type="text" placeholder='Subject'/>
                </label>

                <label htmlFor="message"><span style={{color: "red"}}>*</span> Enter Your Message:
                    <input id="message" name="message" type="text" placeholder='Message' required />
                </label>

                <p>Items marked with <span style={{color: "red"}}>*</span> must be filled out</p>
                <input type="submit" />
            </form>
        </div>
    );
}
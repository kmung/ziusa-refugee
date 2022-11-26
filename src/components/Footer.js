// CSS imported in App.js

/* Complete later: store svgs as variables
// const emailIcon = 
*/

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-bio">
                    <h4>Zomi Refugee Program</h4>
                    <p>A program of Zomi Innkuan USA, Inc</p>
                    <p>Contact Info</p>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>&nbsp;Email</li>
                        <li>Phone</li>
                        <li>Address 1</li>
                        <li>City, ST 12345</li>
                    </ul>
                </div>
                <div className="footer-social-media">
                    <p>Follow us on social media!</p>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright &copy; 2022-23 Zomi Refugee Program. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
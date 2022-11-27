// use main.css

import coverImage from "../img/family.jpg";
import stickyImage from "../img/tgfood.JPG";

export default function Home() {
    //TODO: store image urls to a string variable
    //let stickyImg = `https://www.pexels.com/photo/man-people-woman-girl-6306902/`;
    return (
    <section className="main-wrapper">
        <div className="hero">
            <div className="hero-hook">
                <h1 className="animated">
                    <span className="animated-text animated-text-1">Zomi</span>
                    <span className="animated-text animated-text-2">Refugee</span>
                    <span className="animated-text animated-text-3">Program</span>
                </h1>
                <h1>A Voice for the Zomi Diaspora</h1>
                <h1>A Platform of Hope</h1>
            </div>
            <div className="hero-media">
                <img id="cover-image" src={coverImage} alt="Cover images"></img>
            </div>
        </div>
        <div className="sticky-img">
            <img src={stickyImage} alt="image" loading="lazy"></img>
        </div>
        <div className="bio">
            <div className="bio-card">
                <h2 className="bio-heading">Mission</h2>
                <div className="bio-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button type="button"><i class="bi bi-caret-right"></i>Read More</button>
                </div>
            </div>
            <div className="bio-card">
                <h2 className="bio-heading">Vision</h2>
                <div className="bio-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button type="button"><i class="bi bi-caret-right"></i>Read More</button>
                </div>
            </div>
        </div>
    </section>
    );
}
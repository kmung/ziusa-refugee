import './about.css';

import avatar from "../icons/person-circle.svg";
import director from "../img/tual-khan-suan.jpg";
import khawmPau from "../img/pauzomi.jpg";
import dimNgai from "../img/dim_photo.png";

export default function About() {
    return (
    <section className='main-wrapper'>
        <div className='about-banner'>
            <h1>Who We Are</h1>
        </div>
        <div className='about-wrapper'>
            <h2>Program Overview</h2>
            <p>The organization, Zomi Innkuan USA (ZIUSA) has set up a Refugee Program to help Zomi Refugees in Malaysia, India, and Thailand. The program is self-funded by Zomi individual that supports the effective resettlement of Zomi refugees in their safe places in the world and ensures their basic needs are met so they can live in dignity and achieve their higher potential.</p>
            <p>The goal of the Refugee Program is to ensure that every Zomi Refugee, who have been persecuted on the basis of race, religion, nationality, political opinion or membership in a particular social group, will receive proper treatment and protection under the Refugees’ rights, and to work together to uphold humanitarian response to refugee through the U.S. Resettlement Program.</p>
            <h2>Mission Statement</h2>
            <p>Zomi Refugee Program carries out the aims and objectives of the Zomi Innkuan USA (ZIUSA) to serve and advocate for the Zomi Refugees around the world. It offers services targeting gaps within the refugee community by ensuring the continuation of services in their efforts towards self-sufficiency and integration such as social level assistance, skills development (English language education for adults,) health promotion and cultural orientation, youth mentoring, and case management.</p>
            <h2>Vision Statement</h2>
            <p>Zomi Refugee Program is a leading network for the enhancement of cultural and community development in the Zomi refugee community to have the opportunity to integrate into the larger American society by interacting and sharing their unique cultures and skills.</p>
            <h2 id='leadership-heading'>Leadership Team</h2>
            <div className='leadership-section'>
                <div className='leadership-card'>
                    <img src={director} alt='Tual Khan Suan' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>Tual Khan Suan</h4>
                        <p>Program Director</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={khawmPau} alt='Thang Khawm Pau' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>Thang Khawm Pau</h4>
                        <p>Performance and Research Manager</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={dimNgai} alt='Dim Sian Ngai' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>Dim Sian Ngai</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={avatar} alt='avatar' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>John Appleseed</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={avatar} alt='avatar' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>John Appleseed</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={avatar} alt='avatar' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>John Appleseed</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={avatar} alt='avatar' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>John Appleseed</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={avatar} alt='avatar' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>John Appleseed</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={avatar} alt='avatar' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>John Appleseed</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
                <div className='leadership-card'>
                    <img src={avatar} alt='avatar' loading='lazy'></img>
                    <div className='leadership-card-bio'>
                        <h4>John Appleseed</h4>
                        <p>Chief Position Officer, CPO</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
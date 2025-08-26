import React from 'react';
import './App.css';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";


import { FaRegShareSquare } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import { FaShieldAlt } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { LuFolderTree } from "react-icons/lu";

import original from "../public/result/album3_0089.jpg";
import enhanced from "../public/result/album3_0089_a.jpg";
import back from "../public/result/album3_0089_b.jpg";

import kittyOriginal from "../public/enhanced/4x6b_0159.jpg";
import kittyEnhanced from "../public/enhanced/4x6b_0159_a.jpg";

import elmoOriginal from "../public/enhanced/4x6b_0007.jpg";
import elmoEnhanced from "../public/enhanced/4x6b_0007_a.jpg";

import maddieOriginal from "../public/enhanced/4x6b_0168.jpg";
import maddieEnhanced from "../public/enhanced/4x6b_0168_a.jpg";
// Hero Section
const Hero = () => (
    <header className="hero">
        <nav className="hero-nav">
            <ul>
                <li><a href="#process">The Process</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        <button className="demo-btn">Get a Quote</button>
        </nav>
        <div className="hero-content">
            <h1>PixelPerfectScans</h1>
            <p>Turning your physical photos into timeless digital copies.</p>
        </div>
    </header>
);




// Features Section
const Features = () => (
    <section className="features">
        <div className="feature">
            <h3>Share   <FaRegShareSquare />
            </h3>
            <p>Your digital photos are just an email away from sharing with family and friends</p>
        </div>
        <div className="feature">
            <h3>Enhance <GrUpgrade/></h3>
            <p>Each scanned photo comes with an original and an enhanced version. Any writing on the back side is automatically detected and scanned.</p>
        </div>
        <div className="feature">
            <h3>Protect <FaShieldAlt/> </h3>
            <p>Digital copies are immune to the physical issues that plague traditional photo copies.</p>
        </div>
        <div className="feature">
            <h3>Enjoy <HiOutlineEmojiHappy/></h3>
            <p>Make your phone screen or computer desktop a precious memory. Try a digital photo frame and enjoy 1000's of photos in one single frame! </p>
        </div>
        <div className="feature">
            <h3>Organize <LuFolderTree/></h3>
            <p>Photo storage services like Apple and Google include free organizing AI tools like face detection.</p>
        </div>
    </section>
);



const AudienceCards = () => (
    <section className="audience-cards">
        {[
            { title: "Safe", description: "No need to ship your photos. I can personally transport your photos.", image: <AiFillSafetyCertificate /> },
            { title: "Private" , description: "No cloud copies are made unless specifically requested.", image:<RiGitRepositoryPrivateLine /> },
            { title: "Affordable", description: "Digitize photos for just pennies each. Bulk pricing offered.",image:<MdAttachMoney /> },
            { title: "Efficient", description: "Most collections are copied and returned with 48 hours.", image:<IoSpeedometerOutline /> }
        ].map(({ title, description,image }) => (
            <div key={title}  className="card">
                <h3>{title}   {image}</h3>

                <p>{description}</p>
            </div>
        ))}
    </section>
);


const Mission = () => (
    <section className="mission">
        <h2>Preserve what matters most</h2>
    </section>
);


const TeamAndTestimonials = () => (
    <section className="team-testimonials">

        <div className="testimonials">
            <h3>Hear from our customers:</h3>
            <section className="audience-cards">
                {[
                    { title: "Jane Doe", description: "\"I am so glad I found PixelPerfectScans and had my photo collection digitized. I think the biggest perk was being able to share with my family. I adore my digital photo frame where I can see new pictures each day.\""},
                    { title: "John Doe" , description: "\"B is redefining what the human experience means.\""},
                    { title: "Jason Doe" , description: "\"The greatest thing since sliced bread.\""},
                    { title: "JJ Doe" , description: "\"I named my firstborn after B because they changed my life.\""},
                ].map(({ title, description }) => (
                    <div key={title}  className="card">
                        <h3>{title} </h3>

                        <p>{description}</p>
                    </div>
                ))}
            </section>
        </div>
    </section>
);

const ExamplePhotos = () => (
    <>
        {/*<h3>Example Results</h3>*/}
        <section className="example-photos">
            <div className="example-photos-row">
                <div className="example-photos-card">
                    <h2>Original</h2>
                    <img className="examplephoto" src={original} alt={"original"} />
                </div>
                <div className="example-photos-card">
                    <h2>Enhanced</h2>
                    <img className="examplephoto" src={enhanced} alt={"enhanced"}/>
                </div>
                <div className="example-photos-card">
                    <h2>Back</h2>
                    <img className="examplephoto" src={back} alt={"back"}/>
                </div>
            </div>
            <div className="example-photos-row">
                <div className="example-photos-card">
                    <h2>Original</h2>
                    <img className="examplephoto" src={maddieOriginal} alt={"original"} />
                </div>
                <div className="example-photos-card">
                    <h2>Enhanced</h2>
                    <img className="examplephoto" src={maddieEnhanced} alt={"enhanced"}/>
                </div>
            </div>
            <div className="example-photos-row">
                <div className="example-photos-card">
                    <h2>Original</h2>
                    <img className="examplephoto" src={elmoOriginal} alt={"original"} />
                </div>
                <div className="example-photos-card">
                    <h2>Enhanced</h2>
                    <img className="examplephoto" src={elmoEnhanced} alt={"enhanced"}/>
                </div>
            </div>
            <div className="example-photos-row">
                <div className="example-photos-card">
                    <h2>Original</h2>
                    <img className="examplephoto" src={kittyOriginal} alt={"original"} />
                </div>
                <div className="example-photos-card">
                    <h2>Enhanced</h2>
                    <img className="examplephoto" src={kittyEnhanced} alt={"enhanced"}/>
                </div>
            </div>
        </section>
    </>
)



// Footer
const Footer = () => (
    <footer className="site-footer">
        <div className="footer-nav">
            <div>
                <h4>We’re </h4>
                <ul>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#servicers">For Servicers</a></li>
                    <li><a href="#subservicers">For Subservicers</a></li>
                    <li><a href="#lenders">For Lenders</a></li>
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul>
                    <li>About</li><li>Contact</li>
                </ul>
            </div>
            <div>
                <h4>Support & Resources</h4>
                <ul>
                    <li>Blog (Coming Soon)</li><li>Security & Compliance</li><li>Why is Haven involved?</li>
                </ul>
            </div>
            <div className="subscribe">
                <h4>Request a quote</h4>
                <input type="email" placeholder="Your email" />
                <button>Quote</button>
            </div>
        </div>
        <p>© Breanne. All Rights Reserved.</p>
    </footer>
);

const App = () => (
    <div >
        <Hero />
        {/*<Stats />*/}
        <Features />

        <Mission />
        <ExamplePhotos />

        <AudienceCards />

        <TeamAndTestimonials />
        <Footer />
    </div>

);

export default App;

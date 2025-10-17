import React, {useRef} from 'react';
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


const QuoteButtonOnClick = () => {window.location = 'mailto:PixelPerfectScans@gmail.com?subject=Photo Scanning Quote&body=Hello B, %0D%0A ' +
    '%0D%0A I have attached a picture of the photos I would like scanned. ATTACH PICTURE(S) OF COLLECTION AND ERASE THIS SENTENCE. I was hoping you can provide an estimate and was also wondering INSERT FURTHER QUESTIONS/COMMENTS/CONCERNS HERE'
+ '%0D%0A %0D%0A Best, %0D%0A %0D%0A YOUR NAME %0D%0A YOUR CELL PHONE NUMBER';};



function scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToProcess() {
    const element = document.getElementById('process');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
// Hero Section
const Hero = () => (
    <header className="hero">
        <nav className="hero-nav">
            <ul>
                <li><a onClick={scrollToProcess}>The Process</a></li>
                <li><a onClick={scrollToContact}>Contact</a></li>
            </ul>
        <button className="demo-btn"  onClick={QuoteButtonOnClick}>Get a Quote</button>
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
            <p>Your digital photos are just an email away from sharing with family and friends!</p>
        </div>
        <div className="feature">
            <h3>Enhance <GrUpgrade/></h3>
            <p>Each scanned photo comes with an original and an enhanced version. Any writing on the back side is automatically detected and scanned.</p>
            <p>See examples below!</p>
        </div>
        <div className="feature">
            <h3>Protect <FaShieldAlt/> </h3>
            <p>Digital copies are immune to the physical issues that plague traditional photo copies.</p>
        </div>
        <div className="feature">
            <h3>Enjoy <HiOutlineEmojiHappy/></h3>
            <p>Make your phone, tablet, or computer wallpaper a precious memory. Try a digital photo frame and enjoy hundreds of photos in one single frame! </p>
        </div>
        <div className="feature">
            <h3>Organize <LuFolderTree/></h3>
            <p>Digital files will be grouped according to the grouping of physical copies. Additionally, photo storage services (e.g. Apple and Google) include free organizing AI tools.</p>
        </div>
    </section>
);



const AudienceCards = () => (
    <section className="audience-cards">
        {[
            { title: "Safe", description: "No need to ship your photos. We personally transport your photos.", image: <AiFillSafetyCertificate /> },
            { title: "Private" , description: "No cloud storage is used. Photos are put on a physical drive and handed to you directly.", image:<RiGitRepositoryPrivateLine /> },
            { title: "Affordable", description: "We charge only $0.19 per photo and offer bulk discounts!",image:<MdAttachMoney /> },
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
        <h2>Preserving the memories that matters most</h2>
    </section>
);


const TeamAndTestimonials = () => (
    <section className="team-testimonials">

        <div className="testimonials">
            <h2>Hear from our customers:</h2>
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

const Process = () => (
    <><div id="process" className="process">
        <h1>The Process</h1>
    <ul>
        <li>
            <h2>Step 1</h2>
            <h3>Prepare photos </h3>
            <p>Take photos out from albums and remove any photos with glue or staples. Remove all paper clips and other foreign objects. Organize photos by size and, optionally, by album.</p>
        </li>
        <li>
            <h2>Step 2</h2>
            <h3>Schedule a pickup.</h3>
            <p>I take an upfront $190 deposit that is deducted from the final bill, paid upon return of your photos and scanned digital copies.</p>
        </li>
        <li>
            <h2>Step 3</h2>
            <h3>Photos are scanned.</h3>
            <p>Sit back and relax while we get to work!</p>
        </li>
        <li>
            <h2>Step 4</h2>
            <h3>Photos are returned. </h3>
            <p>Most photos are scanned within 24 hours and returned within 48 hours. Your original photos will be returned in the same groupings you provide them in. Your digital copies will be provided on a complimentary usb drive.</p>
        </li>
    </ul>
    </div>
    </>
)

const Faq = () => (
    <section className="faq">
        <h2>FAQ</h2>
        <ul>
            <li>
                <h3> What photo sizes are acceptable? </h3>
                <p> We can scan photos as small as 2x2 and as large as 8x10.</p>
            </li>
            <li>
                <h3> What areas do you service? </h3>
                <p> We provide in-person pick-up and delivery services to any city within 20 miles of the 91750 zip code.</p>
            </li>
            <li>
                <h3> Do you accept photos by mail? </h3>
                <p>  We do accept photos by mail but do not pay for postage or insurance.</p>
            </li>
            <li>
                <h3> Is there a minimum or maximum number of photos you accept? </h3>
                <p> We charge a minimum of $190, which covers the first 1000 photos. There is no maximum number of photos, but for photo collections of 5000+ photos we charge an additional upfront deposit.</p>
            </li>
        </ul>
    </section>
)

const AdditionalServices = () => (
    <section className="additional-services">
        <h2>Additional Services</h2>
        <ul>
            <li>
                <h3> Group share </h3>
                <p> Send me a list of email addresses and we will automatically share your photos with them.</p>
            </li>
            <li>
                <h3> Digital Photo frame </h3>
                <p> We can provide you with a digital photo frame pre-installed with your newly scanned photos.  </p>
            </li>
        </ul>
    </section>
)



// Footer
const Footer = () => (
    <footer className="site-footer">
        <div className="footer-nav" id="contact">
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><p>Email: </p>
                        PixelPerfectScans@gmail.com </li>
                    <li><p>Phone: </p>
                        (909) 654-4770</li>
                </ul>
            </div>
            <div className="subscribe">
                <h4>Request a quote</h4>

                <button onClick={QuoteButtonOnClick}>Quote</button>
            </div>
        </div>
    </footer>
);

const App = () => (
    <div >
        <Hero />
        <Features />
        <Mission />
        <ExamplePhotos />
        <AudienceCards />
        <Process />
        <TeamAndTestimonials />
        <Faq/>
        <Footer />
    </div>

);

export default App;

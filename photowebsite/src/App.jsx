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


const QuoteButtonOnClick = () => {window.location = 'mailto:testemail@email.com?subject=Photo Scanning Quote&body=Hello B, %0D%0A ' +
    '%0D%0A I have attached a picture of the photos I would like scanned. ATTACH PHOTO AND ERASE THIS SENTENCE. I was hoping you can provide an estimate and was also wondering INSERT FURTHER QUESTIONS/COMMENTS/CONCERNS HERE'
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
                <li><a href="#services">Services</a></li>
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
            { title: "Safe", description: "No need to ship your photos. I personally transport your photos.", image: <AiFillSafetyCertificate /> },
            { title: "Private" , description: "No cloud storage is used. Photos are put on a physical drive and handed to you directly.", image:<RiGitRepositoryPrivateLine /> },
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
        <h2>Preserving the memories that matters most</h2>
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

const Process = () => (
    <><div id="process">
        <h2>The process</h2>
    <ul>
        <li>
            <h3>Step 1</h3>
            <p>Take photos out from albums and remove any photos with glue or staples. Remove all paper clips and other foreign objects. </p>
        </li>
        <li>
            <h3>Step 2</h3>
            <p>Organize photos by size and, optionally, by album.</p>
        </li>
        <li>
            <h3>Step 3</h3>
            <p>Send me a picture of the photo collection and I will provide you with an estimate.</p>
        </li>
        <li>
            <h3>Step 4</h3>
            <p>Schedule a pickup.</p>
            <p>I take an upfront $150 deposit that is deducted from the final bill, paid upon return of your photos and scanned copies.</p>
        </li>
        <li>
            <h3>Step 5</h3>
            <p> Prepare a flash drive with sufficient storage or clear enough room on a computer.</p>
            <p> In your cost estimate I will also give a storage estimate. I can provide the flash drives at a small markup. In the event we use your storage (drive or computer) I will send you the exact data size prior to returning with your photos.</p>
        </li>
        <li>
            <h3>Step 6</h3>
            <p>Schedule a return time. </p>
            <p>For most collections, I can schedule your return time when I schedule the pickup. The data transfer typically takes just a few minutes.</p>
        </li>
    </ul>
    </div>
    </>
)

const Faq = () => (
    <section className="additional-services">
        <h2>FAQ</h2>
        <ul>
            <li>
                <h3> What photo sizes are acceptable? </h3>
                <p> I can scan photos as small as SIZE and as large as SIZE.</p>
            </li>
            <li>
                <h3> What areas do you service? </h3>
                <p> I provide in-person pick-up and delivery services to any city within 20 miles of the 91750 zip code.</p>
            </li>
            <li>
                <h3> Do you accept photos by mail? </h3>
                <p> I do accept photos by mail but I do not pay for postage or insurance.</p>
            </li>
            <li>
                <h3> Is there a minimum or maximum number of photos you accept? </h3>
                <p> I charge a minimum of $150, which equates to roughly AMOUNT 3x5s. There is no maximum number of photos, but for photo collections of 5000+ photos I charge an additional upfront deposit.</p>
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
                <p> Send me a list of email addresses and I will automatically share your photos with them.</p>
            </li>
            <li>
                <h3> Digital Photo frame </h3>
                <p> I can provide you with a digital photo frame pre-installed with your newly scanned photos.  </p>
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
                    <li>Email: COMPANY EMAIL </li><li>Phone: 666 666 6666</li>
                </ul>
            </div>
            <div className="subscribe">
                <h4>Request a quote</h4>

                <button onClick={QuoteButtonOnClick}>Quote</button>
            </div>
        </div>
        <p>© Breanne. All Rights Reserved.</p>
    </footer>
);

const App = () => (
    <div >
        <Hero />
        <Features />
        <Mission />
        <ExamplePhotos />
        <AudienceCards />
        <TeamAndTestimonials />
        <Process />
        <Faq/>
        <Footer />
    </div>

);

export default App;

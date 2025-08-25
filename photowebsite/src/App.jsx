import React from 'react';
import './App.css';
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
            <h1>Make PixelPerfectMemories</h1>
            <p>Turning your physical photos into timeless digital copies.</p>
        </div>
    </header>
);

// Stats Section
const Stats = () => (
    <section className="stats">
        <div className="stat-item">
            <h2>1.4M+</h2>
            <p>homeowners</p>
        </div>
        <div className="stat-item">
            <h2>11%</h2>
            <p>high‑intent leads generated</p>
        </div>
        <div className="stat-item">
            <h2>11+</h2>
            <p>offer types</p>
        </div>
    </section>
);

// Audience Cards
const AudienceCards = () => (
    <section className="audience-cards">
        {[
            { title: "Safe", description: "No need to ship your photos. I can personally transport your photos." },
            { title: "Private", description: "No cloud copies are made unless specifically requested." },
            { title: "Affordable", description: "Digitize photos for mere pennies each. Bulk discounts offered." },
            { title: "Quick", description: "Most collections are copied and returned with 48 hours." }
        ].map(({ title, description }) => (
            <div key={title} className="card">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        ))}
    </section>
);

// Features Section
const Features = () => (
    <section className="features">
        <div className="feature">
            <h3>Share</h3>
            <p>Your digital copies are just an email away from sharing with family and friends</p>
        </div>
        <div className="feature">
            <h3>Enhance</h3>
            <p>Each scanned photo comes with an original and an enhanced version. Any writing on the back side is automatically detected and scanned.</p>
        </div>
        <div className="feature">
            <h3>Protect</h3>
            <p>Digital copies are immune to the physical issues that plague traditional photo copies.</p>
        </div>
        <div className="feature">
            <h3>Enjoy</h3>
            <p>Make your phone screen or computer desktop a precious memory. Try a digital photo frame and enjoy 1000's of photos in one single frame! </p>
        </div>
        <div className="feature">
            <h3>Organize</h3>
            <p>Photo storage services like Apple and Google include free organizing AI tools like face detection.</p>
        </div>
    </section>
);

// Mission Statement
const Mission = () => (
    <section className="mission">
        <h2>Preserve what matters most</h2>
    </section>
);

// Team & Testimonials
const TeamAndTestimonials = () => (
    <section className="team-testimonials">
        <div className="team">
            <h3>Who we are</h3>
            {/* Add team images/content */}
        </div>
        <div className="testimonials">
            <h3>Hear from our customers</h3>
            {/* Add testimonial content */}
        </div>
        <div className="insights">
            <h3>See our latest insights</h3>
            {/* Add blog/insights preview */}
        </div>
    </section>
);

// Integration CTA
const IntegrationCTA = () => (
    <section className="integration">
        <h3>PixelPerfectMemories helps you save and enjoy </h3>
        <p>Whether you service in‑house or use a subservicer, launch deeper engagement with your borrowers in weeks (not months)...</p>
        <button className="demo-btn">Get a Demo</button>
    </section>
);

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
                    <li>About</li><li>Pressroom</li><li>Careers</li><li>Contact</li>
                </ul>
            </div>
            <div>
                <h4>Support & Resources</h4>
                <ul>
                    <li>Blog (Coming Soon)</li><li>Security & Compliance</li><li>Why is Haven involved?</li>
                </ul>
            </div>
            <div>
                <h4>Legal</h4>
                <ul>
                    <li>Privacy Policy</li><li>Terms of Use</li><li>Coordinated Disclosure Policy</li>
                </ul>
            </div>
            <div className="subscribe">
                <h4>Get the latest in customer retention</h4>
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
            </div>
        </div>
        <p>© Breanne. All Rights Reserved.</p>
    </footer>
);

// Main App Component
const App = () => (
    <div>
        <Hero />
        {/*<Stats />*/}
        <AudienceCards />
        <Features />
        <Mission />
        <TeamAndTestimonials />
        <IntegrationCTA />
        <Footer />
    </div>
);

export default App;

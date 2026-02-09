import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-footer">
            <div className="container contact-content">
                <h2 className="contact-title">Let's Connect</h2>
                <p className="contact-subtitle">
                    Interested in collaborating on AI, Embedded Systems, or looking for a speaker?
                </p>

                <div className="contact-links">
                    <a href="mailto:nakulbtechaids@gmail.com" className="contact-btn">Email</a>
                    <a href="https://www.linkedin.com/in/nakul-kirubakaran20070726/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
                    <a href="https://github.com/nakulbtechaids-blip" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
                </div>

                <div className="footer-copyright">
                    © {new Date().getFullYear()} Nakul Kirubakaran. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Contact;

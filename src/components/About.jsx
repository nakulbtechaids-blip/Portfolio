import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section container about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am an AI & DS Student at Kingston Engineering College, and a developer passionate about <span className="highlight">AI</span>, <span className="highlight">real-time systems</span>, and <span className="highlight">human-performance technology</span>.
                        I build intelligent real-time systems that connect AI, hardware, and human performance — turning complex technology into practical impact.
                        I am a <span className="highlight">Tech Evangelist</span> and a <span className="highlight">Public Speaker</span> who loves to share knowledge and inspire others.
                    </p>
                    <p>
                        Beyond building, I present and explain complex technical concepts clearly to diverse audiences.
                        I believe <span className="highlight-purple">communication skills and life skills</span> are as important as innovation.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-card">
                        <h3>AI + IoT</h3>
                        <p>Integrated Systems</p>
                    </div>
                    <div className="stat-card">
                        <h3>Real-Time</h3>
                        <p>Data Processing</p>
                    </div>
                    <div className="stat-card">
                        <h3>Speaker</h3>
                        <p>Tech Evangelist</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

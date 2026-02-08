import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text-wrapper">
                    <p className="hero-greeting animate-fade-in" style={{ animationDelay: '0.1s' }}>Hi, I'm <span className="highlight-name">Nakul Kirubakaran</span></p>

                    <h1 className="hero-headline animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        I Build <span className="gradient-text">Real-Time AI Systems</span> <br />
                        — And <span className="glow-text">Speak</span> About Them.
                    </h1>

                    <p className="hero-subheadline animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        AI + Embedded Systems Developer specializing in Computer Vision, EMG signal processing, and intelligent performance systems.
                    </p>

                    <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.7s' }}>
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#speaking" className="btn btn-secondary">Watch Talks</a>
                        <a href="#contact" className="btn btn-text">Contact Me</a>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="hero-glow glow-blue"></div>
            <div className="hero-glow glow-purple"></div>
        </section>
    );
};

export default Hero;

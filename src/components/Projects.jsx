import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Sports Vision",
            subtitle: "Real-Time Athlete Movement Tracking",
            description: "A system using 33-landmark pose estimation and EMG integration to analyze athlete fatigue and joint angles in real-time.",
            tags: ["Python", "MediaPipe", "EMG", "FFT"],
            link: "#"
        },
        {
            title: "Aura",
            subtitle: "AI Voice Assistant",
            description: "Voice-controlled assistant capable of app automation, speech response, and expanding into smart reminders.",
            tags: ["Python", "NLU", "Automation", "Speech"],
            link: "#"
        },
        {
            title: "Campus Mate",
            subtitle: "Hackathon Project",
            description: "A collaborative platform designed for campus innovation and practical system design.",
            tags: ["React", "Node", "Collaboration"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <h4>{project.subtitle}</h4>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} className="btn-link">View Project →</a>
                        </div>
                        <div className="project-glow"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

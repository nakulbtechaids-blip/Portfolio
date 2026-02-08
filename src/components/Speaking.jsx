import React from 'react';
import './Speaking.css';

const Speaking = () => {
    const topics = [
        "SDG Goals and Role of AI in Achieving them",
        "Artificial Intelligence for Real-World Applications",
        "Ethics in AI: Challenges and Solutions",
        "Robotic Process Automation (RPA) and its Impact on Business",
        "The Future of Human-AI Interaction",

    ];

    const experiences = [
        "Technical presentations at university symposiums",
        "Workshop speaker on Embedded AI systems",
        "Project demonstrations at tech expos",
        "Academic stage speeches on Future Tech"
    ];

    return (
        <section id="speaking" className="section container">
            <h2 className="section-title">Public Speaking</h2>
            <div className="speaking-content">
                <div className="speaking-card">
                    <h3>Topics I Speak About</h3>
                    <ul className="speaking-list">
                        {topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </div>
                <div className="speaking-card">
                    <h3>Experience</h3>
                    <ul className="speaking-list">
                        {experiences.map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Speaking;

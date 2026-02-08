import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Programming",
            items: ["Python", "C/C++", "JavaScript", "HTML/CSS"]
        },
        {
            category: "AI/ML",
            items: ["MediaPipe", "Pose Estimation", "RMS", "FFT", "LSTM"]
        },

        {
            category: "Tools",
            items: ["GitHub", "VS Code", "Vite", "React"]
        }
    ];

    return (
        <section id="skills" className="section container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skillGroup, index) => (
                    <div key={index} className="skill-card">
                        <h3 className="skill-category">{skillGroup.category}</h3>
                        <div className="skill-tags">
                            {skillGroup.items.map((item, idx) => (
                                <span key={idx} className="skill-tag">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

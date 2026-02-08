import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        { title: "Integrated hardware + AI systems", icon: "🚀" },
        { title: "Real-time data processing implementation", icon: "⚡" },
        { title: "IEEE-style documentation", icon: "📝" },
        { title: "Strong technical presentation skills", icon: "🎤" }
    ];

    return (
        <section className="section container">
            <h2 className="section-title">Achievements</h2>
            <div className="achievements-grid">
                {achievements.map((item, index) => (
                    <div key={index} className="achievement-card">
                        <span className="achievement-icon">{item.icon}</span>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;

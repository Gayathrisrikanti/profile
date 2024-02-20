import React from 'react';

const Skills = () => {
    // Define the skills data
    const skillsData = [
        'SQL',
        'Java',
        'C#',
        'Python',
        'Java EE',
        'React',
        'JavaScript',
        'PLSQL',
        'Mongo DB',
        'HTML/CSS',
        'Kotlin',
        'Data Visualization',
        'Microsoft Excel',
        'Machine Learning',
        'Cloud programming (Azure and AWS)',
        'Troubleshooting and debugging',
        'Collaborative team player',
        'Customer service (handling customer requests through voice)',
        'Bilingual proficiency in French and English'
    ];

    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skillsData.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;

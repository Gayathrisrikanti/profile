import React from "react";
import '../styles/About.css';
import sideImage from '../assets/about/me.jpeg'; 

function About(){
    const handleDownloadResume = () => {
        const resumeUrl = '../assets/about/Gayathri.pdf';

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Resume_Gayathri_Srikanti.pdf'; 

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div className="about-background">
            <div className="left">
                <img src={sideImage} alt="Me" className="side-image" />
            </div>
            
            <div className="right">
                <h2>My Journey in Few Words</h2>
                <p>Hi, I'm Gayathri. presents a compelling profile as a
                    Data Analyst with an extensive academic and professional background in software engineering
                    course. I am Fluent in both French and English and I have handling high-volume bilingual communication, 
                    evident from her role at Service Canada. My deep technical skillset, including proficiency in SQL, Python, Java, C#, and data visualization tools like Microsoft Power BI.
                    and also extends to leveraging machine learning for insightful data analysis and developing efficient data processing solutions
                    I am pursuits at Centennial College, complemented by a series of practical projects ranging from machine learning model deployment to the design of a personal safety mobile application, highlight her strong 
                    foundation in software engineering principles and her ability to apply these skills in diverse contexts
                </p>
                
                <p>
                    Contact me : gsrikan2@my.centennialcollege.ca
                </p>

                <button onClick={handleDownloadResume}>Download Resume</button>
            </div>
        </div>
    )
}

export default About;

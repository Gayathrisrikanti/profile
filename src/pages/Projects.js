import React, { useState } from "react";
import '../styles/Project.css';
import Survey from '../assets/projects/surveyimage.jpeg';
import FlightReservations from '../assets/projects/FlightReservation.jpeg';
import JobSearch from '../assets/projects/Jobs.png';
import Game from '../assets/projects/game.jpeg';
import ClickMe from '../assets/projects/click.png';
import Skills from './Skills'; // Import the Skills component

function Project(){
    const [selectedProject, setSelectedProject] = useState(null);
    const projectLinks = {
        Survey: 'https://github.com/Gayathrisrikanti/Angular-project-/tree/main',
        FlightReservation: 'https://github.com/Gayathrisrikanti/REST-API',
        JobSearch: 'https://github.com/Gayathrisrikanti/AWS_API',
        Game: 'https://github.com/Gayathrisrikanti/Mobileapp_Game',
    };

    return(
        <div className="project-background">
            <div className="title">
                <h1>
                    <span>Projects  </span>
                </h1>
                    
            </div>
            <div className="content">
                <Skills /> {/* Display the Skills component */}
                <div className="project-list">
                    <ul className='accordion'>
                    
                        <li>
                            <label for="second">Survey<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='second'  onChange={() => setSelectedProject('Survey')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>The survey tool is built to support basic arithmetic operations such as addition, subtraction, multiplication, and division, alongside advanced functionalities like decimal input and sign toggling. This allows for a versatile range of questions, from simple satisfaction ratings to more complex data collection that may require numerical input and immediate computation. The real strength of this tool lies in its user-friendly interface, which mimics the familiarity and ease of use of a standard calculator, ensuring that participants can easily input their responses without any confusion.</li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="third">Flight Reservation <img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='third' onChange={() => setSelectedProject('FlightReservation')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Successfully implemented CRUD functionalities for Login and registration
                                         selection, payment processing, and profile modification, ensuring complete data management
                                    Implemented robust form validations and error handling mechanisms both on the front-end 
                                        using Thymeleaf and back-end using entity class annotations, ensuring data integrity and user input correctness
                                        Designed a structured MySQL database with optimized tables (lohin, registration) and appropriate 
                                        relationships, incorporating primary keys and foreign keys for efficient data storage and retrieval</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="fourth">Job Search <img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='fourth' onChange={() => setSelectedProject('JobSearch')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>ASP.NET Core for robust API development This robust system facilitates an intuitive job search process, enabling users to effortlessly browse, filter, and apply for job openings. By implementing full CRUD functionalities, the platform supports user registration, profile customization, job posting, and application tracking, ensuring a seamless workflow for both job seekers and employers. Advanced form validations and error-handling mechanisms have been meticulously integrated across the client and server sides, utilizing 
                                        React's state management and Express middleware to guarantee data integrity and user input precision. Orchestrated a central control panel serving as a navigation hub between bucket 
                                        and Implements HTTP methods (GET, POST, PUT, DELETE, PATCH) for full data management</li>
                                        </ul>
                            </div>
                        </li>
                        <li>
                            <label for="fifth">Game<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='fifth' onChange={() => setSelectedProject('Game')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li> The application, developed in Kotlin using Android Studio, features a sleek and user-friendly 
                                        design that allows users to interact with various controls to create digital art
                                        At the top of the interface, there's a settings panel labeled "Line Thickness" with a slider control to adjust the width of the strokes, set at '20' indicating a relatively thick line. Adjacent to it is a "Line Color" 
                                        section with options for Red, Green, and Yellow, with Red currently selected as indicated by the filled circle. </li>
                                    
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>                       
                <div className="project-preview">
                    {selectedProject === 'Survey' && <img src={Survey} alt="Survey" />}
                    {selectedProject === 'FlightReservation' && <img src={FlightReservations} alt=" FlightReservation" />}
                    {selectedProject === 'JobSearch' && <img src={JobSearch} alt="JobSearch" />}
                    {selectedProject === 'Game' && <img src={Game} alt="Game" />}
                    {selectedProject && (
                        <p>
                            <a href={projectLinks[selectedProject]} target="_blank" rel="noopener noreferrer">
                                Github Link to Project
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;

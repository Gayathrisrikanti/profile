import React from "react";
import '../styles/Home.css';
import profileImage from '../assets/images/profile.jpeg';


function Home() {
  return (
    <div className="home-background">
      <div className="profile-container">
        <div className="profile-text">
          <h1 className="greeting-text">Hi, Gayathri Srikanti </h1>
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;

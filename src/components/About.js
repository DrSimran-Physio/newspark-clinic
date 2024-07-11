import React from 'react';
import './About.css';
import clinicImage from '../assets/clinic.jpg'; // Add an image in the assets folder

function About() {
    return (
        <section id="about" className="about">
            <h2>About Us</h2>
            <div className="about-content">
                <img src={clinicImage} alt="Clinic" className="about-image" />
                <div className="about-text">
                    <p>Welcome to NewSpark Physiotherapy Clinic, your premier destination for advanced physiotherapy care. Our clinic is committed to helping you achieve optimal health and wellness through personalized and effective treatment plans. With state-of-the-art facilities and a team of highly skilled professionals, we provide comprehensive physiotherapy services designed to address your unique needs. At NewSpark, we focus on restoring function, reducing pain, and enhancing your overall quality of life. Let us partner with you on your journey to recovery and well-being.</p>
                    
                </div>
            </div>
        </section>
    );
}

export default About;

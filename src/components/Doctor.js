import React from 'react';
import './Doctor.css';
import doctorImage from '../assets/doctor.jpg'; // Add an image in the assets folder

function Doctor() {
    return (
        <section id="doctor" className="doctor">
            <h2>Know Your Doctor</h2>
            <div className="doctor-info">
                <img src={doctorImage} alt="Dr. Simran Chaudhary" className="doctor-image" />
                <div className="doctor-details">
                    <h3>Dr. Simran Chaudhary</h3>
                    <p><strong>Qualifications:</strong> BPT from Subharti University, MPT from IIMT University</p>
                    <p><strong>Experience:</strong> 3+ years in physiotherapy, former Physio at Metro Hospital</p>
                    <p><strong>Registration:</strong> Registered Physiotherapist with UP state medical Facility</p>
                    <p>Dr. Simran Chaudhary, our lead physiotherapist, is renowned for her expertise and compassionate care. With years of experience and a personalized approach, she ensures that each patient receives the highest quality treatment tailored to their specific needs. At NewSpark, we combine advanced techniques with a patient-centered focus to support your journey towards recovery and well-being.</p>
                    <p><strong>Contact No.:</strong> +91-7088385251</p>
                </div>
            </div>
        </section>
    );
}

export default Doctor;

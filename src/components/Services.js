import React from 'react';
import './Services.css';
import s1 from '../assets/s1.jpg'; // Add your images in the assets folder
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';

const services = [
    { id: 1, name: 'Physical Therapy', image: s1 },
    { id: 2, name: 'Rehabilitation', image: s2 },
    { id: 3, name: 'Pain Management', image: s3 },
    { id: 4, name: 'Sports Injury Treatment', image: s4 },
    { id: 5, name: 'Post-Surgical Recovery', image: s5 },
    { id: 6, name: 'Chiropractic Services', image: s6 },
];

function Services() {
    return (
        <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <img src={service.image} alt={service.name} className="service-image" />
                        <div className="service-name">{service.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;

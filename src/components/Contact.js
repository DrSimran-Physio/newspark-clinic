import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                })
            });
            if (res.ok) {
                setResponse('Message sent successfully!');
            } else {
                setResponse('Error sending message.');
            }
        } catch (error) {
            setResponse('Error sending message: ' + error.message);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-content">
                <div className="contact-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                    {response && <p className="response">{response}</p>}
                </div>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.8618967452776!2d77.69797437616833!3d29.05066566496891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6f00400f234d%3A0xbceb46ec5ac9a5fc!2sDr.%20Simran%E2%80%99s%20New%20Spark%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1720693424520!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;

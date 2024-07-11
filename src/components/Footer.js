import React from 'react';
import './Footer.css';

function Footer({ visitCount }) {
    return (
        <footer className="footer">
            <p>&copy; 2024 NewSpark Physiotherapy Clinic. All rights reserved.</p>
            <p>Visit Count: {visitCount}</p>
            <p>Made with <span style={{ color: 'red' }}>❤️</span> by <a href="https://chaudharyshiva18.github.io/mysite/" target="_blank" rel="noopener noreferrer">Shiva Chaudhary</a></p>
        </footer>
    );
}

export default Footer;

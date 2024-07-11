import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Doctor from './components/Doctor'; 

function App() {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const count = localStorage.getItem('visitCount');
        if (count) {
            setVisitCount(parseInt(count) + 1);
            localStorage.setItem('visitCount', parseInt(count) + 1);
        } else {
            setVisitCount(1);
            localStorage.setItem('visitCount', 1);
        }
    }, []);

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <About />
                <Services />
                <Doctor />
                <Contact />
            </main>
            <Footer visitCount={visitCount} />
        </div>
    );
}

export default App;

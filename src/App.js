import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Doctor from './components/Doctor';  // Ensure this line is correct

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <About />
                <Services />
                <Doctor /> {/* Ensure this line is correct */}
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;

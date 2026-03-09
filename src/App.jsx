import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Protocol from './components/Protocol';
import Quality from './components/Quality';
import Customers from './components/Customers';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Philosophy />
            <Services />
            <Protocol />
            <Quality />
            <Customers />
            <CTA />
            <Footer />
        </>
    );
}

export default App;

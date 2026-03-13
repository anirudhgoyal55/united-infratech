import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Projects from './components/Projects';
import Quality from './components/Quality';
import Customers from './components/Customers';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <main className="bg-background min-h-screen text-text selection:bg-accent selection:text-white">
            <Navbar />
            <Hero />
            <Stats />
            <Customers />
            <About />
            <Services />
            <Industries />
            <Projects />
            <Quality />
            <CTA />
            <Footer />
        </main>
    );
}

export default App;

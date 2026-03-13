import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(navRef.current, {
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
                borderColor: isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                boxShadow: isScrolled ? '0 10px 40px -10px rgba(0,0,0,0.05)' : 'none',
                paddingTop: isScrolled ? '0.75rem' : '1.5rem',
                paddingBottom: isScrolled ? '0.75rem' : '1.5rem',
                duration: 0.4,
                ease: 'power3.out'
            });
        }, navRef.current);

        return () => ctx.revert();
    }, [isScrolled]);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 w-full pointer-events-none">
            <nav
                ref={navRef}
                className="pointer-events-auto flex items-center justify-between px-8 py-6 rounded-[3rem] border border-transparent transition-all duration-500 w-full max-w-6xl text-text"
            >
                <div className="flex items-center gap-3 font-bold text-xl tracking-tight font-sans text-accent">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="tracking-tighter uppercase mt-1">United Infratech</span>
                </div>

                <div className="hidden md:flex items-center gap-10 text-sm font-bold font-sans uppercase tracking-[0.15em] text-text/70">
                    <a href="#about" className="hover:text-accent transition-colors">About</a>
                    <a href="#services" className="hover:text-accent transition-colors">Services</a>
                    <a href="#quality" className="hover:text-accent transition-colors">Quality</a>
                    <a href="#customers" className="hover:text-accent transition-colors">Projects</a>
                </div>

                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="magnetic-btn bg-accent text-white px-8 py-3.5 rounded-[2.5rem] font-bold text-xs shadow-lg shadow-accent/20 uppercase tracking-widest hover:bg-blue-800 transition-colors">
                    Contact Us
                </button>
            </nav>
        </div>
    );
};

export default Navbar;

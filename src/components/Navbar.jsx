import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.6)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
                borderColor: isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                color: isScrolled ? '#333333' : '#ffffff',
                duration: 0.3,
                ease: 'power2.inOut'
            });
        }, navRef.current);

        return () => ctx.revert();
    }, [isScrolled]);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full mix-blend-normal">
            <nav
                ref={navRef}
                className="flex items-center justify-between px-6 py-3 rounded-[3rem] border border-transparent transition-all duration-300 w-full max-w-5xl"
                style={{ color: '#ffffff' }}
            >
                <div className="flex items-center gap-2 font-bold text-lg tracking-tight font-sans text-white">
                    <span className="text-xl">⚙️</span>
                    <span className="tracking-tighter uppercase">United Inframech</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium font-sans uppercase tracking-widest text-[#E8E4DD]">
                    <a href="#about" className="hover:-translate-y-[1px] transition-transform">About</a>
                    <a href="#services" className="hover:-translate-y-[1px] transition-transform">Services</a>
                    <a href="#quality" className="hover:-translate-y-[1px] transition-transform">Quality</a>
                    <a href="#customers" className="hover:-translate-y-[1px] transition-transform">Customers</a>
                </div>

                <button className="magnetic-btn bg-accent text-white px-6 py-3 rounded-[2rem] font-bold text-sm shadow-md uppercase tracking-widest">
                    <span className="relative z-10">Get in Touch</span>
                </button>
            </nav>
        </div>
    );
};

export default Navbar;

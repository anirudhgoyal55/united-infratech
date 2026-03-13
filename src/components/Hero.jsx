import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo('.hero-overlay',
                { opacity: 0 },
                { opacity: 1, duration: 2 }
            )
                .fromTo('.hero-text-anim',
                    { y: 60, opacity: 0, skewY: 5 },
                    { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.1 },
                    "-=1.5"
                )
                .fromTo('.hero-btn-anim',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                    "-=1"
                );
        }, containerRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] w-full flex items-center justify-start py-32 px-6 sm:px-12 md:px-24 bg-background overflow-hidden"
        >
            {/* Background Image & Soft Light Overlay */}
            <div
                className="hero-overlay absolute inset-0 z-0 bg-cover bg-center origin-center scale-105"
                style={{ backgroundImage: 'url("/images/hero_bg.png")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mt-16">
                <div className="hero-text-anim flex items-center gap-4 mb-6">
                    <span className="w-12 h-px bg-accent"></span>
                    <h2 className="font-mono font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-accent">
                        Premier Industrial Partner
                    </h2>
                </div>

                <h1 className="font-drama text-6xl sm:text-8xl md:text-[8.5rem] leading-[0.85] mb-8 text-text tracking-tighter perspective-1000">
                    <div className="hero-text-anim overflow-hidden">Delivering</div>
                    <div className="hero-text-anim overflow-hidden italic text-accent pr-4">Engineering</div>
                    <div className="hero-text-anim overflow-hidden">Solutions.</div>
                </h1>

                <p className="hero-text-anim font-sans text-xl md:text-2xl text-text/70 max-w-2xl mb-12 leading-relaxed">
                    End-to-end mechanical fabrication, insulation, and HVAC systems tailored for operational excellence and long-term reliability.
                </p>

                <div className="flex flex-wrap gap-6">
                    <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hero-btn-anim magnetic-btn bg-accent text-white px-10 py-5 rounded-[2rem] font-bold text-sm tracking-widest uppercase font-mono shadow-[0_20px_40px_-15px_rgba(10,74,155,0.4)] hover:bg-blue-800 transition-colors">
                        Explore Services
                    </button>
                    <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hero-btn-anim magnetic-btn bg-white border border-black/10 text-text px-10 py-5 rounded-[2rem] font-bold text-sm tracking-widest uppercase font-mono shadow-sm hover:border-accent hover:text-accent transition-colors">
                        Our Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

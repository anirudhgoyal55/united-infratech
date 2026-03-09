import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo('.hero-anim',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.08, delay: 0.2 }
            );
        }, containerRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] w-full flex items-end justify-start pb-20 px-6 sm:px-12 md:px-24 bg-background"
        >
            {/* Background Image & Overlay - Brutalist Concrete Theme */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/images/hero_bg.png")'
                }}
            >
                {/* Harsh Black to Transparent gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl text-white">
                <div className="hero-anim flex items-center gap-4 mb-6">
                    <span className="w-12 h-px bg-accent"></span>
                    <h2 className="font-mono font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-accent">
                        Structural Vanguard
                    </h2>
                </div>

                <h1 className="hero-anim font-drama text-6xl sm:text-8xl md:text-[9rem] leading-[0.9] mb-10 text-white tracking-tighter">
                    <span className="italic">Engineer</span> <br /> the System.
                </h1>

                <div className="hero-anim flex flex-wrap gap-6 mt-8">
                    <button className="magnetic-btn bg-accent text-white px-10 py-5 rounded-[2rem] font-bold text-sm tracking-widest uppercase font-mono shadow-xl hover:bg-red-700 transition-colors">
                        Deploy Protocol
                    </button>
                    <button className="magnetic-btn bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-[2rem] font-bold text-sm tracking-widest uppercase font-mono hover:bg-white/10 transition-colors">
                        Verify Specs
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

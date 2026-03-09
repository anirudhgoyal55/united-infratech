import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // don't animate the last card out

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    endTrigger: containerRef.current,
                    end: 'bottom bottom',
                    animation: gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.3,
                        filter: 'blur(10px)',
                        ease: 'none',
                    }),
                    scrub: true,
                });
            });
        }, containerRef.current);

        return () => ctx.revert();
    }, []);

    const protocols = [
        {
            step: '01',
            title: 'Material Supply & Logistics',
            desc: 'Continuous and reliable supply chains for critical structural materials, PHE, and HVAC essentials. Absolute inventory precision.',
            svg: (
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
                    {/* Rotating gear/concentric motif */}
                    <g style={{ animation: 'spin 20s linear infinite', transformOrigin: 'center' }}>
                        <circle cx="50" cy="50" r="30" strokeDasharray="10 5" />
                        <circle cx="50" cy="50" r="40" strokeDasharray="4 8" />
                        <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" strokeWidth="4" />
                    </g>
                </svg>
            )
        },
        {
            step: '02',
            title: 'HVAC & Piping Deployment',
            desc: 'Thermodynamic modeling, massive-scale ducting, and industrial pipeline fabrication with surgical precision tolerances.',
            svg: (
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
                    {/* Grid and scanning laser */}
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                    <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="4" style={{ animation: 'scan 3s ease-in-out infinite alternate' }} />
                </svg>
            )
        },
        {
            step: '03',
            title: 'Structural E&A Fabrication',
            desc: 'End-to-end mechanical execution. Equipment support frameworks, heavy sheds, canopies, and hot & cold insulation systems.',
            svg: (
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
                    {/* Pulsing EKG waveform */}
                    <path d="M0 50 L20 50 L30 20 L40 80 L50 40 L60 60 L70 50 L100 50"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
                    />
                </svg>
            )
        }
    ];

    return (
        <div ref={containerRef} className="bg-background relative">
            {/* Global CSS for these specific animations */}
            <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes scan { 0% { transform: translateY(0); } 100% { transform: translateY(100px); } }
        @keyframes pulse { 0% { stroke-dashoffset: 200; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -200; } }
      `}</style>

            {protocols.map((proto, i) => (
                <section
                    key={proto.step}
                    className="protocol-card h-[100dvh] w-full flex items-center justify-center relative p-6 origin-top"
                    style={{
                        backgroundColor: i % 2 === 0 ? '#E8E4DD' : '#F5F3EE', // Paper vs Off-white
                        zIndex: i
                    }}
                >
                    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Animation Canvas */}
                        <div className="flex-1 bg-text rounded-[3rem] p-12 aspect-square flex items-center justify-center shadow-2xl relative overflow-hidden border-[16px] border-primary">
                            {proto.svg}
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="font-mono text-accent text-3xl font-bold tracking-tighter mb-4 block">[{proto.step}]</span>
                            <h2 className="font-drama text-5xl md:text-7xl text-text mb-6 tracking-tight leading-none">{proto.title}</h2>
                            <p className="font-sans text-xl text-text/80 tracking-tight font-medium">{proto.desc}</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Protocol;

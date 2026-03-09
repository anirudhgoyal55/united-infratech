import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const fullText = "SYSTEM_ON... Loading material manifests... HVAC inventory sync complete... Processing E&A equipment... Dispatching pipe & fittings...";

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.service-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 60,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    // Typewriter logic
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setTypedText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; setTypedText(''); }, 3000); // loop
            }
        }, 50);
        return () => clearInterval(typingInterval);
    }, []);

    // Shuffler logic
    const [cards, setCards] = useState(['HVAC Layout & Structure', 'Equipment Designing', 'Shed & Canopy']);
    useEffect(() => {
        const shuffler = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                newCards.unshift(newCards.pop());
                return newCards;
            });
        }, 3000);
        return () => clearInterval(shuffler);
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-24 px-6 sm:px-12 md:px-24 bg-background relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-accent font-bold text-sm uppercase tracking-widest mb-2 text-center">
                    System Architecture
                </h2>
                <h3 className="font-drama text-4xl md:text-6xl text-center mb-16 text-text">
                    Functional <span className="text-accent italic">Artifacts.</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Diagnostic Shuffler */}
                    <div className="service-card flex flex-col bg-primary rounded-[3rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5">
                        <h4 className="font-sans font-bold text-xl mb-2 text-text uppercase tracking-tight">Designing Solutions</h4>
                        <p className="text-sm text-text/60 mb-8 font-mono">Dynamic modeling for HVAC, support structures, and precise equipment layouts.</p>
                        <div className="relative h-48 w-full perspective-1000 mt-auto">
                            {cards.map((card, i) => (
                                <div
                                    key={card}
                                    className="absolute w-full bg-white rounded-2xl p-4 border border-black/5 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center font-mono text-sm font-bold text-text uppercase"
                                    style={{
                                        top: i * 20,
                                        scale: 1 - (i * 0.05),
                                        zIndex: 10 - i,
                                        opacity: 1 - (i * 0.2)
                                    }}
                                >
                                    {card}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Telemetry Typewriter */}
                    <div className="service-card flex flex-col bg-text rounded-[3rem] p-8 shadow-2xl border border-[#222222] text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-sans font-bold text-xl text-primary uppercase tracking-tight">Material Supply</h4>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                                <span className="text-accent text-xs font-mono font-bold tracking-widest">LIVE FEED</span>
                            </div>
                        </div>
                        <p className="text-sm text-[#888888] mb-6 font-mono">Continuous supply of Pipe & fittings, structure material, PHE, and HVAC essentials.</p>
                        <div className="bg-black border border-[#222222] rounded-2xl p-4 h-48 overflow-hidden font-mono text-sm mt-auto relative shadow-inner">
                            <span className="text-[#cccccc]">{typedText}</span>
                            <span className="text-accent animate-pulse font-bold">_</span>
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/80"></div>
                        </div>
                    </div>

                    {/* Card 3: Cursor Protocol Scheduler */}
                    <div className="service-card flex flex-col bg-primary rounded-[3rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden relative">
                        <h4 className="font-sans font-bold text-xl mb-2 text-text uppercase tracking-tight">Industrial Fabrication</h4>
                        <p className="text-sm text-text/60 mb-8 font-mono">Systematic fabrication of structural resources, pipelines, and hot & cold insulation.</p>

                        <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-text/40 mb-2 font-bold tracking-widest">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i}>{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1 h-32 relative">
                            {Array.from({ length: 21 }).map((_, i) => (
                                <div key={i} className={`rounded-lg p-1 border border-black/5 flex items-center justify-center ${i === 10 ? 'bg-accent border-accent text-white' : 'bg-white'}`}></div>
                            ))}

                            {/* SVG Cursor Animation Loop */}
                            <svg
                                className="absolute z-10 w-6 h-6 text-text pointer-events-none drop-shadow-md"
                                style={{
                                    top: '10px', left: '10px',
                                    animation: 'scheduleCursor 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite'
                                }}
                                viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                            </svg>

                            <style>{`
                @keyframes scheduleCursor {
                  0% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(110px, 50px) scale(1); }
                  45% { transform: translate(110px, 50px) scale(0.85); }
                  50% { transform: translate(110px, 50px) scale(1); }
                  80% { transform: translate(200px, 120px) scale(1); }
                  85% { transform: translate(200px, 120px) scale(0.85); opacity: 1; }
                  90% { transform: translate(200px, 120px) scale(1); opacity: 0; }
                  100% { transform: translate(0, 0) scale(1); opacity: 0; }
                }
              `}</style>
                        </div>

                        <button className="mt-4 magnetic-btn bg-text text-white hover:bg-black transition-colors w-full py-3 rounded-2xl text-[10px] tracking-widest font-bold font-mono uppercase border border-black/10 shadow-sm">
                            Schedule Operation
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;

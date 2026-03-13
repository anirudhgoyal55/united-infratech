import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        name: 'Food & Beverage',
        desc: 'Hygienic insulation and HVAC systems for controlled food-grade environments. Serving major FMCGs including Nestlé and HUL.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01.6 1.5 2.25 2.25 0 01-2.25 2.25H5.85A2.25 2.25 0 013.6 16.5a2.25 2.25 0 01.6-1.5m15.6 0H4.2" />
            </svg>
        )
    },
    {
        name: 'Pharmaceutical',
        desc: 'Precision fabric ducting and cleanroom-grade airflow systems meeting GMP standards for regulated manufacturing.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        name: 'Power & Energy',
        desc: 'High-temperature insulation systems for power plants and refineries. Maximising thermal efficiency and reducing energy loss.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    },
    {
        name: 'Chemical & Process',
        desc: 'Corrosion-resistant fabrication and cold insulation solutions for chemical processing plants and hazardous environments.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        )
    },
    {
        name: 'Commercial Buildings',
        desc: 'End-to-end HVAC and mechanical systems for offices, hotels, and large commercial facilities across India.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
        )
    },
];

const Industries = () => {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ind-anim',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out'
                }
            );
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="industries" className="py-32 px-6 sm:px-12 md:px-24 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="ind-anim text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Industries We Serve
                    </h2>
                    <h3 className="ind-anim font-drama text-5xl md:text-7xl text-text tracking-tighter leading-[0.9]">
                        Built for <span className="text-accent italic">demanding</span><br />environments.
                    </h3>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left/Top: list of industries */}
                    <div className="flex overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 gap-4 lg:gap-0 lg:flex-col lg:space-y-3 hide-scrollbar w-screen lg:w-full">
                        {industries.map((ind, i) => (
                            <button
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                onClick={() => setActive(i)}
                                className={`ind-anim flex-shrink-0 w-[280px] lg:w-full text-left flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 p-6 rounded-[2rem] border transition-all duration-300 group ${active === i ? 'bg-accent text-white border-accent shadow-xl shadow-accent/20' : 'bg-white border-black/5 text-text hover:border-accent/30'}`}
                            >
                                <span className={`flex-shrink-0 p-3 rounded-2xl ${active === i ? 'bg-white/20' : 'bg-background'}`}>
                                    <span className={active === i ? 'text-white' : 'text-accent'}>
                                        {ind.icon}
                                    </span>
                                </span>
                                <span className="font-sans font-bold text-lg tracking-tight block w-full">{ind.name}</span>
                                <svg className={`w-5 h-5 ml-auto flex-shrink-0 transition-transform lg:block hidden ${active === i ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        ))}
                    </div>

                    {/* Right/Bottom: active description */}
                    <div className="ind-anim lg:sticky lg:top-32 bg-text rounded-[3rem] p-10 sm:p-12 md:p-16 text-white min-h-[400px] flex flex-col justify-center w-full">
                        <div className="mb-6 lg:mb-8 p-4 bg-accent/10 rounded-2xl w-fit text-accent">
                            {industries[active].icon}
                        </div>
                        <h4 className="font-drama text-4xl md:text-5xl mb-6 tracking-tighter leading-none">
                            {industries[active].name}
                        </h4>
                        <p className="font-sans text-white/70 text-lg lg:text-xl leading-relaxed">
                            {industries[active].desc}
                        </p>
                        <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-white/10 font-mono text-white/30 text-xs uppercase tracking-widest">
                            {String(active + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Lightbulb, BadgeCheck, Users, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        title: 'Integrity',
        desc: 'We uphold the highest standards in every project, delivering on promises with transparency and professional accountability.',
        icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
    },
    {
        title: 'Innovation',
        desc: 'Cutting-edge technologies and advanced fabrication techniques drive superior outcomes for complex industrial challenges.',
        icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />
    },
    {
        title: 'Quality',
        desc: 'Stringent quality control and ISO-compliant processes ensure every deliverable meets international benchmarks.',
        icon: <BadgeCheck className="w-8 h-8" strokeWidth={1.5} />
    },
    {
        title: 'Customer Focus',
        desc: 'Deep collaboration with clients ensures tailored solutions that address specific operational goals and exceed expectations.',
        icon: <Users className="w-8 h-8" strokeWidth={1.5} />
    },
    {
        title: 'Sustainability',
        desc: 'Energy-efficient engineering solutions designed to minimise environmental impact while maximising long-term operational value.',
        icon: <Leaf className="w-8 h-8" strokeWidth={1.5} />
    },
];

const Quality = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.val-anim',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out'
                }
            );
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <section id="quality" ref={sectionRef} className="py-32 px-6 sm:px-12 md:px-24 bg-text relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="val-anim text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex justify-center items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Our Foundation
                        <span className="w-8 h-px bg-accent"></span>
                    </h2>
                    <h3 className="val-anim font-drama text-5xl md:text-7xl text-white tracking-tighter">
                        Core <span className="text-accent italic">Values.</span>
                    </h3>
                </div>

                {/* Top row: 3 cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                    {values.slice(0, 3).map((v, i) => (
                        <div key={i} className={`val-anim group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-2xl md:rounded-[2rem] p-6 md:p-10 transition-all duration-500 flex flex-col ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                            <div className="p-3 bg-accent/10 rounded-2xl w-fit mb-4 md:mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                {v.icon}
                            </div>
                            <h4 className="font-sans font-bold text-base md:text-xl text-white mb-2 md:mb-3 tracking-tight">{v.title}</h4>
                            <p className="font-sans text-white/50 text-xs md:text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom row: 2 cards, centered */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {values.slice(3).map((v, i) => (
                        <div key={i} className="val-anim group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-2xl md:rounded-[2rem] p-6 md:p-10 transition-all duration-500 flex flex-col">
                            <div className="p-3 bg-accent/10 rounded-2xl w-fit mb-4 md:mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                {v.icon}
                            </div>
                            <h4 className="font-sans font-bold text-base md:text-xl text-white mb-2 md:mb-3 tracking-tight">{v.title}</h4>
                            <p className="font-sans text-white/50 text-xs md:text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quality;

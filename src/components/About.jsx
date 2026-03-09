import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-anim', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 px-6 sm:px-12 md:px-24 bg-background relative selection:bg-accent selection:text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <h2 className="about-anim text-accent font-bold text-sm uppercase tracking-widest mb-6">
                        System Origins
                    </h2>
                    <h3 className="about-anim font-drama text-5xl md:text-6xl text-text mb-8 leading-[1.0] tracking-tighter">
                        Where raw power meets <span className="text-accent italic">precision.</span>
                    </h3>

                    <div className="space-y-6 text-[#444444] font-sans text-lg lg:text-xl leading-relaxed">
                        <p className="about-anim">
                            <strong className="text-text">United Infratech</strong> operates at the vanguard of industrial structural design. We execute massive-scale HVAC, PHE (Public Health Engineering), and mechanical fabrication ecosystems with absolute zero tolerance for failure.
                        </p>
                        <p className="about-anim">
                            We don't just build environments; we engineer atmospheres. From high-grade ducting to thermodynamic insulation, our methodology is rooted in harsh realities, forged into sustainable frameworks that outlast the generations they serve.
                        </p>
                        <p className="about-anim font-mono text-sm tracking-tight text-[#666666]">
                            // DEPLOYING SCALABLE SOLUTIONS ACROSS ALL TOPOGRAPHIES.
                        </p>
                    </div>
                </div>

                {/* Decorative Image */}
                <div className="about-anim relative flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative w-full max-w-[24rem] aspect-[4/5] rounded-[3rem] overflow-hidden border border-text/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] bg-primary">
                        <div className="w-full h-full rounded-[3rem] overflow-hidden">
                            <img
                                src="/images/about_img.png"
                                alt="Structural Engineering Blueprint"
                                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] mix-blend-darken"
                            />
                        </div>
                        {/* Indicator */}
                        <div className="absolute top-6 right-6 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-text/10">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="font-mono text-[10px] font-bold text-text uppercase tracking-widest">Active Model</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

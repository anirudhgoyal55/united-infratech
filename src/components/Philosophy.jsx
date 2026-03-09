import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Manual line reveal since SplitText isn't available
            const lines = gsap.utils.toArray('.phil-line');

            gsap.from(lines, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                y: 50,
                opacity: 0,
                rotationX: "-10deg",
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // Parallax bg
            gsap.to('.parallax-bg', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                y: '20%',
                ease: 'none'
            });
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 sm:px-12 md:px-24 bg-text relative overflow-hidden text-center min-h-[70vh] flex items-center justify-center">
            {/* Background Parallax */}
            <div
                className="parallax-bg absolute inset-0 bg-cover bg-center opacity-10 scale-125 mix-blend-luminosity grayscale"
                style={{
                    backgroundImage: 'url("/images/philosophy_bg.png")'
                }}
            ></div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="phil-line mb-12">
                    <p className="font-mono text-[#888888] text-sm md:text-base tracking-widest uppercase font-bold">
                        Most engineering focuses on:
                        <span className="block mt-2 text-white/60 font-sans font-medium text-lg md:text-xl tracking-tight">
                            standard execution and basic compliance.
                        </span>
                    </p>
                </div>

                <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent to-transparent mb-12 phil-line"></div>

                <div className="phil-line">
                    <h2 className="font-drama text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tighter">
                        We focus on: <br />
                        <span className="text-accent italic">innovative</span> solutions.
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;

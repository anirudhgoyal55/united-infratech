import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-anim',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out'
                }
            );
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 px-6 sm:px-12 md:px-24 bg-white relative selection:bg-accent selection:text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left: Huge Title + Image */}
                    <div className="lg:col-span-5 flex flex-col gap-12">
                        <div>
                            <h2 className="about-anim text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-accent"></span>
                                Company Profile
                            </h2>
                            <h3 className="about-anim font-drama text-5xl md:text-6xl text-text leading-[0.95] tracking-tighter">
                                Engineering <span className="text-accent italic">Excellence.</span><br />
                                Reliable Solutions.
                            </h3>
                        </div>

                        <div className="about-anim w-full aspect-square rounded-[3rem] overflow-hidden bg-background relative group">
                            <img
                                src="/images/about_img.png"
                                alt="Structural Engineering Mesh"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                            />
                            <div className="absolute inset-0 border border-black/5 rounded-[3rem] pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right: Intro, Mission, Vision from PDF */}
                    <div className="lg:col-span-7 lg:pt-24 space-y-16">

                        {/* Introduction */}
                        <div className="about-anim text-text/80 font-sans text-xl leading-relaxed">
                            <p className="mb-6">
                                <strong className="text-text font-bold">United Infratech</strong> is a premier provider of mechanical fabrication, hot and cold insulation services, and comprehensive engineering solutions across India.
                            </p>
                            <p>
                                We specialize in delivering end-to-end engineering and service solutions, meticulously designed to meet the most demanding industrial and commercial requirements. From concept to execution, our services ensure operational excellence and long-term reliability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Mission */}
                            <div className="about-anim bg-background p-10 rounded-[2.5rem] border border-black/5 hover:border-accent/20 transition-colors">
                                <h4 className="font-sans font-bold text-2xl text-text tracking-tight mb-4 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span> Mission
                                </h4>
                                <p className="text-text/70 leading-relaxed text-base">
                                    To deliver reliable, efficient, and innovative engineering solutions that create lasting value for our clients, partners, and communities. We execute every project with precision, safety, and sustainability at its core.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="about-anim bg-background p-10 rounded-[2.5rem] border border-black/5 hover:border-accent/20 transition-colors">
                                <h4 className="font-sans font-bold text-2xl text-text tracking-tight mb-4 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span> Vision
                                </h4>
                                <p className="text-text/70 leading-relaxed text-base">
                                    To become the most trusted and respected name in mechanical fabrication and insulation services globally. We aspire to lead through a relentless commitment to excellence, setting new benchmarks in quality.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: "01",
        title: "Mechanical Fabrication",
        desc: "Customized solutions for industrial structures, ducting systems, pipelines, supports, tanks, and equipment assemblies. Ensuring maximum operational performance.",
    },
    {
        id: "02",
        title: "Hot and Cold Insulation",
        desc: "Specialized insulation to optimize energy conservation. From high-temp pipelines preventing heat loss to cold insulation for refrigeration and chilled water systems.",
    },
    {
        id: "03",
        title: "Engineering Services",
        desc: "Comprehensive services spanning from project planning and design to on-site execution, structural support, and long-term maintenance planning.",
    },
    {
        id: "04",
        title: "Trading & Supply",
        desc: "Reliable sourcing of high-quality industrial products, insulation materials, fabrication accessories, and HVAC components. A true one-stop procurement solution.",
    },
    {
        id: "05",
        title: "Industrial HVAC Solutions",
        desc: "Robust, energy-efficient HVAC systems for demanding industrial environments. Precise temperature control, enhanced air quality, and rock-solid reliability.",
    },
    {
        id: "06",
        title: "Metal & Fabric Ducting",
        desc: "High-quality metal ducting for efficient air distribution, alongside lightweight, hygienic fabric ducting ideal for controlled environments like pharmaceuticals.",
    }
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-32 px-6 sm:px-12 md:px-24 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                            <span className="w-8 h-px bg-accent"></span>
                            Our Services
                        </h2>
                        <h3 className="font-drama text-5xl md:text-7xl text-text leading-[0.9] tracking-tighter">
                            Core <span className="text-accent italic">Competencies.</span>
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, i) => (
                        <div
                            key={service.id}
                            className="service-card group relative bg-white p-10 rounded-[2.5rem] border border-black/5 hover:border-accent/30 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden sticky md:static"
                            style={{ top: `calc(${i * 1.5}rem + 6rem)` }}
                        >
                            {/* Left accent bar on hover */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-l-[2.5rem]"></div>

                            {/* Hover Background Shift */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full bg-white">
                                <div className="font-mono text-accent/30 font-bold text-4xl mb-8 group-hover:text-accent/60 transition-colors">
                                    {service.id}
                                </div>
                                <h4 className="font-sans font-bold text-2xl text-text leading-tight mb-4 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-text/60 font-sans text-base leading-relaxed mt-auto">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

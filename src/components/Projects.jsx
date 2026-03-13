import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        client: 'Nestlé India Ltd.',
        scope: 'Comprehensive mechanical fabrication and specialized hot & cold insulation for food-grade processing units across multiple facilities.',
        tag: 'Food & Beverage',
        color: '#0A4A9B',
        stats: ['500+ MT Fabrication', 'ISO Certified', 'Multi-Site'],
        image: '/images/project-nestle.png',
    },
    {
        id: 2,
        client: 'Hindustan Unilever',
        scope: 'End-to-end HVAC deployment and fabric ducting systems ensuring precise temperature control and clean air quality for FMCG production.',
        tag: 'FMCG',
        color: '#1E40AF',
        stats: ['Full HVAC', 'Energy Efficient', 'Zero Downtime'],
        image: '/images/project-hul.png',
    },
    {
        id: 3,
        client: 'TVS Group',
        scope: 'Large-scale industrial structural supports, pipeline insulation, and mechanical installation for automotive manufacturing hubs.',
        tag: 'Automotive',
        color: '#0F766E',
        stats: ['Industrial Scale', 'Pipeline Systems', 'On-Time Delivery'],
        image: '/images/project-tvs.png',
    }
];

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.proj-anim',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out'
                }
            );
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-32 px-6 sm:px-12 md:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="proj-anim text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex justify-center items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Project Portfolio
                        <span className="w-8 h-px bg-accent"></span>
                    </h2>
                    <h3 className="proj-anim font-drama text-5xl md:text-7xl text-text tracking-tighter">
                        Execution at <span className="text-accent italic">Scale.</span>
                    </h3>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className="proj-anim group relative rounded-[2.5rem] overflow-hidden border-2 border-black/5 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 flex flex-col bg-background shadow-md min-h-[500px] sticky md:static"
                            style={{ top: `calc(${i * 2}rem + 6rem)` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img src={project.image} alt={project.client} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-text via-text/80 to-text/20 opacity-90 group-hover:opacity-80 transition-opacity duration-700"></div>
                            </div>

                            {/* Top colored accent bar */}
                            <div className="absolute top-0 left-0 h-2 w-full z-20" style={{ background: project.color }}></div>

                            <div className="relative z-20 p-10 lg:p-12 flex flex-col flex-grow">
                                {/* Tag */}
                                <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest font-mono text-white w-fit mb-auto" style={{ background: project.color }}>
                                    {project.tag}
                                </span>

                                <div className="mt-8">
                                    {/* Client Name */}
                                    <h4 className="font-drama text-3xl md:text-4xl text-white leading-tight mb-4 tracking-tight">
                                        {project.client}
                                    </h4>

                                    {/* Scope */}
                                    <p className="font-sans text-white/70 text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {project.scope}
                                    </p>

                                    {/* Stats chips */}
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/20">
                                        {project.stats.map((stat, j) => (
                                            <span key={j} className="px-3 py-1.5 bg-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-white font-bold backdrop-blur-md border border-white/10">
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional clients bar */}
                <div className="proj-anim mt-12 text-center">
                    <p className="font-sans text-text/40 text-sm">
                        Also serving <strong className="text-text/60">ITC Limited</strong>, <strong className="text-text/60">Barry Callebaut</strong>, <strong className="text-text/60">Reckitt Benckiser</strong>, <strong className="text-text/60">Zydus Cadila</strong>, <strong className="text-text/60">Trident Group</strong>, and more.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;

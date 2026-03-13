import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 10, suffix: '+', label: 'Years of Experience' },
    { value: 200, suffix: '+', label: 'Projects Completed' },
    { value: 50, suffix: '+', label: 'Industry Partners' },
    { value: 6, suffix: '', label: 'Core Service Lines' },
];

const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const triggered = useRef(false);

    useEffect(() => {
        const el = ref.current;
        const trigger = ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            onEnter: () => {
                if (triggered.current) return;
                triggered.current = true;
                let start = 0;
                const step = value / 60;
                const interval = setInterval(() => {
                    start += step;
                    if (start >= value) { setCount(value); clearInterval(interval); }
                    else setCount(Math.floor(start));
                }, 16);
            }
        });
        return () => trigger.kill();
    }, [value]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="px-6 sm:px-12 md:px-24 relative z-20 -mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 bg-text">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-text p-10 md:p-14 flex flex-col items-start gap-3 group hover:bg-[#111A2E] transition-colors duration-500 relative overflow-hidden">
                            {/* Hover accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-accent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                            <div className="font-drama text-5xl md:text-7xl text-white leading-none tracking-tighter">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="font-mono text-white/50 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

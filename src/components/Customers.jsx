const Customers = () => {
    const partnersRow1 = [
        { name: "Nestlé", logo: "https://logo.clearbit.com/nestle.com" },
        { name: "HUL", logo: "https://logo.clearbit.com/unilever.com" },
        { name: "ITC Limited", logo: "https://logo.clearbit.com/itcportal.com" },
        { name: "CONCOR", logo: "https://logo.clearbit.com/concorindia.co.in" },
        { name: "Barry Callebaut", logo: "https://logo.clearbit.com/barry-callebaut.com" },
        { name: "Reckitt Benckiser", logo: "https://logo.clearbit.com/reckitt.com" },
        { name: "TVS", logo: "https://logo.clearbit.com/tvsmotor.com" }
    ];

    const partnersRow2 = [
        { name: "Eastman Energy", logo: "https://logo.clearbit.com/eastmancasts.com" },
        { name: "Zydus Cadila", logo: "https://logo.clearbit.com/zyduslife.com" },
        { name: "Trident Group", logo: "https://logo.clearbit.com/tridentindia.com" },
        { name: "Parlé Agro", logo: "https://logo.clearbit.com/parleagro.com" },
        { name: "Nahar Group", logo: "https://logo.clearbit.com/nahargroup.co.in" },
        { name: "Luminous", logo: "https://logo.clearbit.com/luminous-global.com" },
        { name: "NPP Printing & Packaging", logo: "https://logo.clearbit.com/nppprinting.com" }
    ];

    const doubled1 = [...partnersRow1, ...partnersRow1, ...partnersRow1];
    const doubled2 = [...partnersRow2, ...partnersRow2, ...partnersRow2];

    return (
        <section id="customers" className="py-20 bg-background overflow-hidden relative">
            {/* Section Label */}
            <div className="text-center mb-12">
                <h2 className="text-accent font-bold text-xs uppercase tracking-[0.3em] flex justify-center items-center gap-4">
                    <span className="w-8 h-px bg-accent"></span>
                    Trusted Ecosystem Partners
                    <span className="w-8 h-px bg-accent"></span>
                </h2>
            </div>

            {/* Marquee Row 1 - left to right */}
            <div className="w-full relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-10">
                <div className="marquee-track flex items-center gap-24 py-4 px-4 whitespace-nowrap">
                    {doubled1.map((partner, i) => (
                        <div key={`r1-${i}`} className="flex-shrink-0 group flex items-center justify-center">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 md:h-12 w-auto object-contain filter grayscale contrast-0 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden font-drama font-bold text-3xl md:text-4xl text-text/20 group-hover:text-accent transition-colors duration-500 tracking-tight">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 - right to left */}
            <div className="w-full relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="marquee-track-reverse flex items-center gap-24 py-4 px-4 whitespace-nowrap">
                    {doubled2.map((partner, i) => (
                        <div key={`r2-${i}`} className="flex-shrink-0 group flex items-center justify-center">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 md:h-12 w-auto object-contain filter grayscale contrast-0 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden font-drama font-bold text-3xl md:text-4xl text-text/20 group-hover:text-accent transition-colors duration-500 tracking-tight">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee-ltr {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-rtl {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .marquee-track {
                    animation: marquee-ltr 50s linear infinite;
                }
                .marquee-track-reverse {
                    animation: marquee-rtl 60s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Customers;

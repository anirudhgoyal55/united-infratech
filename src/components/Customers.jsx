const Customers = () => {
    const brands = [
        "Nestlé", "ITC Limited", "CONCOR", "Barry Callebaut", "Reckitt Benckiser", "TVS",
        "Npp Printing", "Eastman Energy", "Zydus Cadila", "Trident Group", "Parlé Agro",
        "Nahar Group", "Luminous"
    ];

    return (
        <section id="customers" className="py-24 bg-background overflow-hidden flex flex-col items-center border-t border-black/5 selection:bg-accent selection:text-white">
            <h2 className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-16 text-center">
                Trusted Ecosystem Partners
            </h2>

            {/* Marquee Container with fade-out masks */}
            <div className="w-full relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-4 px-8">
                    {brands.concat(brands).map((brand, i) => (
                        <span key={i} className="font-drama text-4xl md:text-5xl text-black/20 hover:text-black transition-colors duration-500 cursor-default select-none tracking-tight">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Customers;

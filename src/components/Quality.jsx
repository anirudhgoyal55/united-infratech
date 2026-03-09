import React from 'react';

const Quality = () => {
    return (
        <section id="quality" className="py-32 px-6 sm:px-12 md:px-24 bg-text relative overflow-hidden text-white selection:bg-accent selection:text-white">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-accent font-mono font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-accent"></span>
                            Operational Mandate
                        </h2>
                        <h3 className="font-drama text-5xl md:text-7xl leading-[0.95] tracking-tighter">
                            Compliance is <span className="italic text-gray-400">not optional.</span>
                        </h3>
                    </div>
                    <p className="font-mono text-sm text-[#888888] pb-2 max-w-xs leading-relaxed uppercase tracking-widest">
                        We enforce protocol across all active sites. Zero deviations. Zero exceptions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {/* Quality Assurance */}
                    <div className="bg-[#111111] rounded-[3rem] p-10 md:p-14 hover:bg-[#161616] transition-colors duration-500 border border-[#222222] group relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 text-[12rem] font-drama text-[#1a1a1a] opacity-50 group-hover:text-[#222222] transition-colors z-0 select-none">
                            Q
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-10 border border-[#333333] group-hover:border-accent transition-colors duration-500">
                                <svg className="w-6 h-6 text-white group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-sans font-bold text-3xl mb-6 text-white tracking-tight uppercase">Absolute Assurance</h3>
                            <p className="text-[#888888] font-sans text-lg leading-relaxed mix-blend-screen">
                                Stringent tolerances measure every millimeter. From structural material procurement to HVAC execution, our protocols guarantee infrastructural longevity.
                            </p>
                        </div>
                    </div>

                    {/* Safety Standards */}
                    <div className="bg-[#111111] rounded-[3rem] p-10 md:p-14 hover:bg-[#161616] transition-colors duration-500 border border-[#222222] group relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 text-[12rem] font-drama text-[#1a1a1a] opacity-50 group-hover:text-[#222222] transition-colors z-0 select-none">
                            S
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-10 border border-[#333333] group-hover:border-accent transition-colors duration-500">
                                <svg className="w-6 h-6 text-white group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="font-sans font-bold text-3xl mb-6 text-white tracking-tight uppercase">Ironclad Safety</h3>
                            <p className="text-[#888888] font-sans text-lg leading-relaxed mix-blend-screen">
                                Protecting human capital is the primary directive. We drill exhaustive safety matrices and enforce absolute compliance on active terrains.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;

const CTA = () => {
    return (
        <section className="py-32 px-6 sm:px-12 md:px-24 bg-text text-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-accent font-mono font-bold text-xs uppercase tracking-[0.3em] mb-8 flex justify-center items-center gap-4">
                    <span className="w-8 h-px bg-accent"></span>
                    Initiate Project
                    <span className="w-8 h-px bg-accent"></span>
                </h2>

                <h3 className="font-drama text-5xl md:text-7xl mb-16 leading-[1.1] tracking-tighter max-w-4xl mx-auto">
                    "Precision engineering demands <br /><span className="text-accent italic font-light">perfect execution.</span> Let's build it."
                </h3>

                <div className="max-w-xl mx-auto bg-white/5 rounded-[3rem] p-10 md:p-12 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
                    {/* Hover slider effect for button */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-50 pointer-events-none"></div>

                    <h4 className="font-sans font-bold text-2xl text-white mb-4 tracking-tight">Schedule a Technical Consultation</h4>
                    <p className="text-white/60 mb-10 font-sans text-lg leading-relaxed">
                        Connect with our engineering team to outline specifications, timelines, and operational requirements for your next major facility.
                    </p>

                    <button onClick={() => window.location.href = 'mailto:sales@unitedinfratech.com'} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-10 font-medium text-white bg-accent shadow-2xl transition hover:scale-105 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] w-full sm:w-auto">
                        <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                            <div className="relative h-full w-8 bg-white/20" />
                        </span>
                        <span className="font-bold tracking-widest uppercase text-sm">Request a Quote</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;

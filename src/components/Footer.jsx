const Footer = () => {
    return (
        <footer className="bg-text text-white pt-24 pb-12 px-6 sm:px-12 md:px-24 rounded-t-[4rem] relative z-10 border-t-8 border-accent overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 relative z-10">

                {/* Contact Info */}
                <div>
                    <h2 className="font-drama text-6xl md:text-7xl mb-12 tracking-tighter leading-none">Contact Us.</h2>

                    <div className="space-y-8 font-sans text-lg text-white/70">
                        <div>
                            <span className="text-accent font-bold font-mono uppercase text-xs mb-2 tracking-widest block">Head Office</span>
                            <p>Santoshgarh Una Road, Jattpur</p>
                            <p>TEHSIL (UNA), HP-174301, India</p>
                        </div>

                        <div>
                            <span className="text-accent font-bold font-mono uppercase text-xs mb-2 tracking-widest block">Phone</span>
                            <p>+91-9465626699</p>
                        </div>

                        <div>
                            <span className="text-accent font-bold font-mono uppercase text-xs mb-2 tracking-widest block">Email</span>
                            <a href="mailto:amitbarda@unitedinfratech.com" className="hover:text-white transition-colors block">amitbarda@unitedinfratech.com</a>
                            <a href="mailto:sales@unitedinfratech.com" className="hover:text-white transition-colors block">sales@unitedinfratech.com</a>
                        </div>

                        <div>
                            <span className="text-accent font-bold font-mono uppercase text-xs mb-2 tracking-widest block">GSTIN</span>
                            <p>02DJUPB3196L1ZU</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                    <form className="space-y-4 font-sans text-sm" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="bg-text/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                            <input type="text" placeholder="Company" className="bg-text/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="email" placeholder="Email" className="bg-text/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                            <input type="tel" placeholder="Phone" className="bg-text/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                        </div>
                        <textarea placeholder="Message" rows="5" className="bg-text/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors resize-none"></textarea>

                        <button className="bg-accent text-white w-full py-5 rounded-2xl font-bold mt-4 hover:opacity-90 transition-opacity uppercase tracking-widest font-mono shadow-lg">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-accent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    </span>
                    <span className="font-bold text-xl tracking-tighter uppercase font-sans">United Infratech</span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="font-mono text-xs font-bold text-white/60 tracking-widest">SYSTEM OPERATIONAL</span>
                </div>

                <p className="text-xs text-white/40 font-sans font-medium uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} United Infratech.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

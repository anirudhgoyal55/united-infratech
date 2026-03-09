import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-text text-white pt-24 pb-12 px-6 sm:px-12 md:px-24 rounded-t-[4rem] relative -mt-8 z-10 border-t-8 border-accent">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                {/* Contact Info */}
                <div>
                    <h2 className="font-drama text-6xl md:text-7xl mb-12 tracking-tighter leading-none">Contact Us.</h2>

                    <div className="space-y-8 font-mono text-sm text-[#aaaaaa]">
                        <div>
                            <span className="text-accent font-bold font-sans uppercase text-xs mb-2 tracking-widest block">Head Office</span>
                            <p>Santoshgarh Una Road, Jattpur</p>
                            <p>TEHSIL (UNA), HP-174301, India</p>
                        </div>

                        <div>
                            <span className="text-accent font-bold font-sans uppercase text-xs mb-2 tracking-widest block">Phone</span>
                            <p>+91-9465626699</p>
                        </div>

                        <div>
                            <span className="text-accent font-bold font-sans uppercase text-xs mb-2 tracking-widest block">Email</span>
                            <a href="mailto:amit@unitedinframech.com" className="hover:text-white transition-colors block">amit@unitedinframech.com</a>
                            <a href="mailto:sales@unitedinframech.com" className="hover:text-white transition-colors block">sales@unitedinframech.com</a>
                        </div>

                        <div>
                            <span className="text-accent font-bold font-sans uppercase text-xs mb-2 tracking-widest block">GSTIN</span>
                            <p>02DJUPB3196L1ZU</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-[3rem] border border-[#333333]">
                    <form className="space-y-4 font-sans text-sm" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="bg-black border border-[#333333] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                            <input type="text" placeholder="Company" className="bg-black border border-[#333333] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="email" placeholder="Email" className="bg-black border border-[#333333] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                            <input type="tel" placeholder="Phone" className="bg-black border border-[#333333] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors" />
                        </div>
                        <textarea placeholder="Message" rows="5" className="bg-black border border-[#333333] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white w-full transition-colors resize-none"></textarea>

                        <button className="magnetic-btn bg-accent text-white w-full py-5 rounded-2xl font-bold mt-4 hover:bg-red-700 transition-colors uppercase tracking-widest font-mono">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-xl">⚙️</span>
                    <span className="font-bold text-xl tracking-tighter uppercase font-sans">United Inframech</span>
                </div>

                <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#333333]">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="font-mono text-xs font-bold text-[#aaaaaa] tracking-widest">SYSTEM OPERATIONAL</span>
                </div>

                <p className="text-xs text-[#888888] font-sans font-medium uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} United Inframech.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

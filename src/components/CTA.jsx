const CTA = () => {
    return (
        <section className="py-24 px-6 sm:px-12 md:px-24 bg-[#111111] text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-accent font-bold text-sm uppercase tracking-widest mb-6">
                    Join Us on Our Journey
                </h2>

                <h3 className="font-drama text-4xl md:text-6xl mb-12 leading-tight">
                    "We build <span className="italic">relationships</span> and communities. Let's create something exceptional together."
                </h3>

                <div className="max-w-2xl mx-auto bg-gray-900/50 rounded-[2rem] p-8 mt-12 border border-gray-800 backdrop-blur-sm">
                    <h4 className="font-sans font-bold text-xl text-primary mb-4">Schedule a Consultation</h4>
                    <p className="text-gray-400 mb-8 font-sans">
                        Contact us today to discuss your project needs and let us turn your engineering vision into reality.
                    </p>
                    <button className="magnetic-btn bg-accent text-text px-8 py-4 rounded-full font-bold text-base shadow-xl w-full sm:w-auto">
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;

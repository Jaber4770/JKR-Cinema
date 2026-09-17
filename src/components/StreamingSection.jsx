import featureImage from "../assets/feature.webp";

export default function StreamingSection() {
    return <>
        <section className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        See what’s new on Prime
                        <br />
                        Video, Netflix, & more.
                    </h2>

                    <p className="text-base sm:text-lg leading-7">
                        Select your favorite streaming services to discover more, search
                        faster, and get curated recommendations—all without ever leaving
                        Plex. Connect with friends to see who’s watching what, where.
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 sm:px-9 py-3 sm:py-4 rounded-full transition cursor-pointer">
                        Discover More Now
                    </button>
                </div>

                <div className="w-full lg:w-1/2">
                    <img
                        src={featureImage}
                        alt="Streaming services"
                        className="w-full"
                    />
                </div>

            </div>
        </section>
    </>
}
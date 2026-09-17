import featureImage from "../assets/feature.webp";

export default function StreamingSection() {
    return <>
        <section className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
            <div className="max-w-6xl mx-auto px-8 py-24 flex items-center gap-12">
                <div className="w-1/2 space-y-6">
                    <h2 className="text-5xl font-bold leading-tight">
                        See what’s new on Prime
                        <br />
                        Video, Netflix, & more.
                    </h2>

                    <p className="text-lg leading-7">
                        Select your favorite streaming services to discover more, search
                        faster, and get curated recommendations—all without ever leaving
                        Plex. Connect with friends to see who’s watching what, where.
                    </p>

                    <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-9 py-4 rounded-full transition cursor-pointer">
                        Discover More Now
                    </button>
                </div>
                <div className="w-1/2">
                    <img src={featureImage}
                        alt="Streaming services"
                        className="w-full"
                    />
                </div>

            </div>
        </section>
    </>
}
import featureImage from "../assets/watch-free-mobile.webp";

export default function WatchFreeSection() {
    return (
        <section className="bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-8 py-24 flex items-center gap-16">
                <div className="w-1/2">
                    <img
                        src={featureImage}
                        alt="Watch Plex on mobile"
                        className="w-full object-contain"
                    />
                </div>
                <div className="w-1/2 space-y-6">
                    <h2 className="text-5xl font-bold leading-tight">
                        It has never been easier to watch
                        <br />
                        free movies online.
                    </h2>

                    <p className="text-lg leading-7 text-gray-600">
                        Once you register for a free account with Plex, we’ll keep your
                        place from screen to screen as long as you’re signed in. No matter
                        what device you choose, your free movies will pick up where you
                        left off with ease.
                    </p>

                    <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-9 py-4 rounded-full transition cursor-pointer">
                        Watch Free
                    </button>
                </div>

            </div>
        </section>
    );
}
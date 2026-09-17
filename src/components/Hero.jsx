export default function Hero() {
    return <>
        <div className="bg-[url(./assets/hero-bg.webp)] text-white h-[70vh] flex items-center">
            <div className="max-w-7xl mx-auto w-full space-y-5 ps-10">
                <h1 className="text-6xl font-extrabold">Free Movies Online,<br></br> Watch Anytime Anywhere.</h1>
                <p>The search is over! Let Plex help you find the perfect movie to watch tonight for free.</p>
                <button className="font-bold border-2 p-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all cursor-pointer shadow-lg shadow-white">Explore Now</button>
            </div>
        </div>
    </>
}

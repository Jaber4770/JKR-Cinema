import { NavLink } from "react-router";

export default function Hero() {
    return <>
        <div className="bg-[url(./assets/hero-bg.webp)] bg-cover bg-center text-white h-[70vh] flex items-center">
            <div className="max-w-7xl mx-auto w-full space-y-5 px-5 sm:px-8 lg:ps-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Free Movies Online,<br></br> Watch Anytime Anywhere.
                </h1>

                <p className="max-w-xl text-sm sm:text-base md:text-lg">
                    The search is over! Let Plex help you find the perfect movie to watch tonight for free.
                </p>

                <NavLink to="movieSearch">
                    <button className="font-bold border-2 p-3 sm:p-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all cursor-pointer shadow-lg shadow-white">
                        Explore Now
                    </button>
                </NavLink>
            </div>
        </div>
    </>
}
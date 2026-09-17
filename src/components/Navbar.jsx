import { NavLink } from "react-router";

export default function Navbar() {
    return <>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-5 bg-black font-bold text-white text-xl lg:text-2xl py-4 lg:py-5 px-4">

            <div>
                <NavLink
                    className="hover:text-violet-500 px-4 transition-all"
                    to="/"
                >
                    JKR-Cinema
                </NavLink>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-5">
                <NavLink
                    className="hover:text-violet-500 px-3 sm:px-4 transition-all"
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink
                    className="hover:text-violet-500 px-3 sm:px-4 transition-all"
                    to="/movieSearch"
                >
                    Search Movie
                </NavLink>

                <NavLink
                    className="hover:text-violet-500 px-3 sm:px-4 transition-all"
                    to="/about"
                >
                    About
                </NavLink>
            </div>

            <div>
                <NavLink
                    className="hover:text-violet-500 px-4 transition-all"
                    to="/movieSearch"
                >
                    Movies
                </NavLink>
            </div>

        </div>
    </>
}
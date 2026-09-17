import { NavLink } from "react-router";

export default function Navbar() {
    return <>
        <div className="flex justify-between gap-5 bg-blue-900 font-bold text-white text-2xl py-5">
            <div className="flex gap-5">
                <NavLink className="hover:text-red-500 px-4 transition-all" to="/">Home</NavLink>
                <NavLink className="hover:text-red-500 px-4 transition-all" to="/movieSearch">Search Movie</NavLink>
                <NavLink className="hover:text-red-500 px-4 transition-all" to="/about">About</NavLink>
            </div>
            <div>
                <NavLink className="hover:text-red-500 px-4 transition-all" to="/movieSearch">Movies</NavLink>
            </div>
        </div>
    </>
}

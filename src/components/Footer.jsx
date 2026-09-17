import { NavLink } from "react-router";

export default function Footer() {
  return <>
        <div className="h-16 bg-blue-900 text-white flex justify-center">
            <ul className="flex justify-center items-center font-bold gap-6 px-5 ">
                <NavLink to="/"><li>JKR-CinemaDB</li></NavLink>
                <NavLink to="https://github.com/Jaber4770/JKR-Cinema"><li>Github</li></NavLink>
                <NavLink to="https://it.linkedin.com/in/jaber4770"><li>LinkedIn</li></NavLink>
            </ul>
        </div>
    </>
}

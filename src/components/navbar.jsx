import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md">
                <p className="blue-gradient_text">
                    AH
                </p>
            </NavLink>
            <nav className="flex gap-7 items-center text-lg font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    Projects
                </NavLink>
            </nav>
        </header>
    );
}
 
export default Navbar;
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../authProvider/AuthProvider";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleThemeToggle = e => {
        if(e.target.checked){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex items-center justify-between h-28">
                    {/* Website Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            {window.innerWidth < 768 ? (
                                // Wrap logo with motion.div for animation only on mobile devices
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <img className="h-32 w-auto" src={logo} alt="Logo" />
                                </motion.div>
                            ) : (
                                // Regular logo without animation on larger devices
                                <img className="h-32 w-auto" src={logo} alt="Logo" />
                            )}
                        </Link>
                    </div>
                    {/* Mobile and Tablet Menu Button */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            {/* Icon when menu is closed. */}
                            {isOpen ? (
                                // Icon when menu is open.
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Icon when menu is closed.
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Home</NavLink>
                            <NavLink to="/all-jobs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>All Jobs</NavLink>
                            <NavLink to="/applied-jobs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Applied Jobs</NavLink>
                            <NavLink to="/add-job" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Add Job</NavLink>
                            <NavLink to="/my-jobs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>My Jobs</NavLink>
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Blogs</NavLink>
                            <NavLink to="/user-profile" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>User Profile</NavLink>
                            {/* Conditional rendering for logged in user */}
                            {user ? (
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img title={user.displayName} alt="User Avatar" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li><Link to="/job-request">Job Request</Link></li>
                                        <li onClick={logOut}><Link>Logout</Link></li>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/login" className="text-white bg-green-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                            )}
                            <label className="swap swap-rotate text-white">

                                {/* this hidden checkbox controls the state */}
                                <input onClick={handleThemeToggle} type="checkbox" className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile and Tablet Menu (Hidden by Default) */}
            {isOpen && (
                <motion.div
                    className="md:hidden"
                    id="mobile-menu"
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col sm:px-3">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Home</NavLink>
                            <NavLink to="/all-jobs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>All Jobs</NavLink>
                            <NavLink to="/applied-jobs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Applied Jobs</NavLink>
                            <NavLink to="/add-job" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Add Job</NavLink>
                            <NavLink to="/my-jobs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>My Jobs</NavLink>
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Blogs</NavLink>
                            <NavLink to="/user-profile" className={({ isActive }) => isActive ? "text-white bg-gray-700 border-b-2 border-gray-200 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>User Profile</NavLink>
                        {user ? (
                            <Link className="text-white bg-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={logOut}>Logout</Link>
                        ) : (
                            <Link to="/login" className="text-white bg-green-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                        )}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default NavBar;

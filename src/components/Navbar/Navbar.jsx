import { useState, useEffect } from "react";
import { navLinks, logo } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null);
    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);
    return (
        <div className={`${active ? "shadow-lg bg-Solitude duration-300" : "duration-300"} fixed w-full top-0 left-0 z-20`}>
            <div>
                <div className={`${active ? "py-2 duration-300" : "duration-300 py-4"}  container  mx-auto flex items-center justify-between px-2`}>
                    <div className="flex items-center gap-4">
                        <HiMenuAlt1 onClick={() => setToggle(!toggle)} className="text-3xl sm:hidden cursor-pointer"></HiMenuAlt1>
                        <Link to="/">
                            <div className="text-lg xs:text-xl uppercase tracking-wide font-bold flex items-center justify-center">
                                <img src={logo} alt="" className="w-10 xs:w-14" /> India Space Week
                            </div>
                        </Link>
                    </div>
                    <div className="sm:flex items-center hidden">
                        {navLinks.map((navLink) => (
                            <NavLink key={navLink.id} {...navLink}></NavLink>
                        ))}
                    </div>
                    <div className="hidden sm:flex gap-4">
                        <button className="py-3 px-4 font-bold text-sm border-2 border-solid rounded-lg border-gray">Sign Up</button>
                        <button className="py-3 px-4 font-bold text-sm border-2 border-solid rounded-lg border-gray">Sign In</button>
                    </div>
                    {toggle && (
                        <div className="duration-300 fixed h-full w-2/3 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8">
                            <div className="flex justify-center items-center gap-4">
                                <button className="py-3 px-4 font-bold text-sm border-2 border-solid rounded-lg border-gray">Sign Up</button>
                                <button className="py-3 px-4 font-bold text-sm border-2 border-solid rounded-lg border-gray">Sign In</button>
                            </div>
                            {navLinks.map((navLink) => {
                                return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle}></MobileNavLinks>;
                            })}
                            <HiX onClick={() => setToggle(!toggle)} className="absolute left-10 top-10 text-xl cursor-pointer"></HiX>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

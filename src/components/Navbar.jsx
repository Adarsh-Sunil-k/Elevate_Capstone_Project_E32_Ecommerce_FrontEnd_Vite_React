import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        { path: "/", 
        element: "Home" },
        { path: "/about",
            element: "About" },
        { path: "/usersignup",
            element: "Signup" },
        { path: "/usersignin",
            element: "Signin" },
        { path: "/category",
            element: "Category" },
        { path: "/shipping",
            element: "Shipping" },
        { path: "/payment",
            element: "Payment" },
        { path: "/order",
            element: "Your Oders" },   
    ];

    return (
        <div>
            <ul className="flex justify-between shadow-lg p-5">
                {navLinks.map((link, i) => (
                    <li key={i}>
                        <Link to={link.path}>{link.element}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;

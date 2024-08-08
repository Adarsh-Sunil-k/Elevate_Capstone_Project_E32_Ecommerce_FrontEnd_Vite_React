import React from "react";

const Navbar = () => {
    const navLinks = [
        { path: "/", 
        element: "Home" },
        { path: "/about",
            element: "About" },
        { path: "/Signup",
            element: "SignUp" },
        { path: "/signin",
            element: "Sigin" },
        { path: "/signout",
            element: "Logout" },
        // { path: "/shipping",
        //     element: "Shipping" },
        // { path: "/payment",
        //     element: "Payment" }
    ];

    return (
        <div>
            <ul className="flex justify-between shadow-lg p-5">
                {navLinks.map((link, i) => (
                    <li key={i}>{link.element}</li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;

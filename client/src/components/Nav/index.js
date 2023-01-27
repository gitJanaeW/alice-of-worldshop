import { useEffect, useState } from "react";
import logo from "../../../public/logo.jpg";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    // useEffect(() => {
    //     const handleClick = (e) => {
    //         if (!e.target.closest('.nav-menu')) {
    //             setIsOpen(false);
    //         }
    //     };
    //     document.addEventListener('click', handleClick);
    //     return () => {
    //         document.removeEventListener('click', handleClick);
    //     };
    // }, [isOpen]);
    return(
        <header>
            <nav>
                <div className="beside logo">
                    <img className="logo" src={logo} alt="a simplistic, white shopping cart on a pink background"/>
                    <h1>ALICE OF SHOPWORLD</h1>
                </div>
                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <li className="nav-link">Products</li>
                    <li className="nav-link">My Cart</li>
                </ul>
                <div onClick={toggleNav} onBlur={toggleNav} className={`hamburger ${isOpen ? "active" : ""}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
        
    );
};
import { useEffect, useState, lazy } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo2.jpg";
import cartIcon from "../../../public/cart.png";

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
                    <Link to={"/"}>
                        <li className="nav-link">Home</li>
                    </Link>
                    <Link to={"/products"}>
                        <li className="nav-link">Products</li>
                    </Link>
                    <li className="nav-link">
                        <Link to={"/checkout"}>
                            <img className="cart-icon" src={cartIcon}/>
                        </Link>
                    </li>
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
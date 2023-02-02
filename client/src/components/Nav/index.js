import { useEffect, useState, lazy } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.jpg";
import cartIcon from "../../../public/cart.png";
import cartBubble from "../../../public/cartOccupied.png";
import garbage from "../../../public/garbage.png";
import { useShopContext } from "../../utils/GlobalState";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setHidden] = useState(true);
    const [state, dispatch] = useShopContext();
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    const clearAlert = (e) => {
        e.preventDefault();
        if(e.target.innerHTML==="╳"){
            setHidden(true);
        }
    };
    useEffect(() => {
        if (state.products[0]) {
                setHidden(false);
            setTimeout(() => {
                setHidden(true);
            }, 10000)
        }
    }, [state.products]);
    return(
        <header>
            <nav>
                <Link to={"/"} className="beside-center logo">
                    <img className="logo" src={logo} alt="a simplistic, white shopping cart on a pink background"/>
                    <h1>ALICE OF SHOPWORLD</h1>
                </Link>
                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <Link to={"/"}>
                        <li className="nav-link">Home</li>
                    </Link>
                    <Link to={"/products"}>
                        <li className="nav-link">Products</li>
                    </Link>
                    <li className="nav-link">
                        <Link to={"/checkout"}>
                            <img className="cart-icon" src={state.products[0] ? cartBubble : cartIcon}/>
                        </Link>
                    </li>
                </ul>
                {!isHidden && (
                <div className="notification">
                    <p>Cart has been updated!</p>
                    <Link to={"/checkout"}>Edit</Link>
                    <p onClick={clearAlert}>╳</p>
                </div>
                )}
                    <div onClick={toggleNav} onBlur={toggleNav} className={`hamburger ${isOpen ? "active" : ""}`}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
            </nav>
        </header>
        
    );
};
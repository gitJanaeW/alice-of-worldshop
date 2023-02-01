import { useEffect, useState, lazy } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo2.jpg";
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
                    {/* {<img src={state.products[state.products.length - 1].image}/>} */}
                    {/* {state.products ? console.log(state.products[0]) : console.log("not yet")} */}
                    <p>Added to cart!</p>
                    <Link to={"/checkout"}>Edit</Link>
                    {/* <input type="number" value="0" id="input"/> */}
                    <img src={garbage}/>
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
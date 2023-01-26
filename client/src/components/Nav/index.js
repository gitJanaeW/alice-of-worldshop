import logo from "../../../public/logo.jpg";

export default function Nav() {
    return(
        <nav>
            <div className="beside">
                <img className="logo" src={logo} alt="a simplistic, white shopping cart on a pink background"/>
                <h1>ALICE OF SHOPWORLD</h1>
            </div>
            <ul>
                <li>Products</li>
                <li>My Cart</li>
            </ul>
        </nav>
    );
};
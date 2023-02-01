import { Link } from "react-router-dom";
import { useShopContext } from "../../utils/GlobalState";

export default function Cart() {
    const [{products}, dispatch] = useShopContext();
    const [cart, setCart] = JSON.parse(localStorage.getItem("cart") || []);
    return (
        <section id="cart">
            <h2>Shopping Cart</h2>
            {products[0] && (
                <>
                    <p className="cart-price">Price</p>
                    <hr/>
                </>
            )}
            
            {
                products[0] ? products.map((product) => (
                    <div className="item">
                        <div className="beside">
                            <div className="img-box">
                                <img className="cart-img" src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt=""/>
                            </div>
                            <div className="item-info">
                                <div className="beside">
                                    <h3>Item Name Goes Here</h3>
                                    <h3 className="item-price">$109.95</h3>
                                </div>
                                <p>In stock</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu odio id neque sollicitudin congue. Vestibulum sollicitudin ac metus semper hendrerit.</p>
                                <select name="qty">
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                    <option value="four">4</option>
                                    <option value="five">5</option>
                                    <option value="six">6</option>
                                    <option value="seven">7</option>
                                    <option value="eight">8</option>
                                    <option value="nine">9</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))  
                : <h3>You have no items in your cart. <Link to={"/products"}>Get shopping!</Link></h3>
            }
            {products[0] && (
                <>
                    <hr/>
                    <h3>Total:</h3>
                    <button>Checkout</button>
                </>
            )
            }
        </section>
    )
}
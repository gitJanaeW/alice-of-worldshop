import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../utils/GlobalState";
import { DELETE_PRODUCT } from "../../utils/actions";

export default function Cart() {
    const [{products}, dispatch] = useShopContext();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const deleteFromCart = (cartItem) => {
        const updatedCart = cart.filter(product => product.id !== cartItem.id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        dispatch({type: DELETE_PRODUCT, payload: cartItem});
    };

    return (
        <section id="cart">
            {console.log(products)}
            <h2>Shopping Cart</h2>
            {products !== [] && (
                <>
                    <p className="cart-price">Price</p>
                    <hr/>
                </>
            )}
            {
                products[0] ? products.map((product) => (
                    <div key={product.id} className="item">
                        {console.log("cart from ls", JSON.parse(localStorage.getItem("cart"))[0])}
                        <div className="beside">
                            <div className="img-box">
                                <img className="cart-img" src={product.image} alt={product.title}/>
                            </div>
                            <div className="item-info">
                                <div className="beside">
                                    <h3>{product.title}</h3>
                                    <h3 className="item-price">${product.price}</h3>
                                </div>
                                <p>In stock</p>
                                <p>{product.description}</p>
                                <div className="beside-center">
                                    <select name="qty">
                                        <option value="currentQty">
                                            {cart.find(item => item.id == product.id).qty}
                                            <hr/>
                                        </option>
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
                                    <p onClick={() => deleteFromCart(product)}>Delete</p>
                                </div>
                                
                            </div>
                        </div>
                        <hr/>
                    </div>
                ))  
                : <h3>You have no items in your cart. <Link to={"/products"}>Get shopping!</Link></h3>
            }
            {products[0] && (
                <>
                    <h3>Total:</h3>
                    <button>Checkout</button>
                </>
            )
            }
        </section>
    )
}
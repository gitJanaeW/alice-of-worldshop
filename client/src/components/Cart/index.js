import { useState } from "react";
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

    const updateStorage = (cartItem, eventValue) => {
        const qty = eventValue;
        const updatedCart = cart.map(product => {
            if (product.id === cartItem.id) {
                return { ...product, qty };
            }
            return product;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalCart = (cart) => {
        let total = 0;
        cart.forEach(item => {
            const product = products.find(product=> product.id === item.id);
            total += product.price * item.qty;
        });
        return total.toFixed(2);
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
                                    <select onChange={(e) => updateStorage(product, e.target.value)} name="qty">
                                        <option value="currentQty">
                                            {cart.find(item => item.id == product.id).qty}
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
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
                    <h3>Total: ${totalCart(cart)}</h3>
                    <Link to="/order"><button>Checkout</button></Link>
                </>
            )
            }
        </section>
    )
}
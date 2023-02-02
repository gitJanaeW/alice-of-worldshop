import { useState } from "react";
import { useShopContext } from "../../utils/GlobalState";

export default function Cart() {
    const [{products}, dispatch] = useShopContext();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

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
            <h2>Your order has been placed!</h2>
            <h3>Total: ${totalCart(cart)}</h3>
        </section>
    )
}
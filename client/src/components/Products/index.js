import { useEffect, useState } from "react";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../../utils/actions";
import { useShopContext } from "../../utils/GlobalState";

const fetchStore = async  () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json();
};

export default function Products() {
    const [products, setProducts] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [state, dispatch] = useShopContext();

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    async function fetchProducts() {
        const data = await fetchStore();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    
    const addToCart = (newProduct) => {
        const existingProduct = cart.find(product => product.id == newProduct.id);
        if (existingProduct) {
            setCart([
                ...cart.filter(product => product.id !== existingProduct.id),
                {
                    id: existingProduct.id,
                    qty: existingProduct.qty + 1
                }
            ]);
            console.log("No dispatch. Current state (should be the same):", state.products);
        } else {
            setCart([
                ...cart,
                {
                    id: newProduct.id,
                    qty: 1
                }
            ]);
            console.log("About to dispatch...");
            dispatch({type: ADD_PRODUCT, payload: newProduct});
            console.log("New prod added", state.products)
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    
    return (
        <section id="products">
            <h2>RESULTS</h2>
            <div className="products-list">
                {products ? products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="item-box">
                            <img className="cart-img" src={product.image} alt={product.title}/>
                        </div>
                        <div className="product-text">
                            <p className="category">{product.category}</p>
                            <p className="product-name text-overflow">{product.title.trim()}</p>
                            <p className="price">${product.price}</p>
                        </div>
                        <button className="add-button" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                )) : null}
            </div>
        </section>
    );
};
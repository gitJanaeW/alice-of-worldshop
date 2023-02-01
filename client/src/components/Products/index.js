import { useEffect, useState } from "react";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../../utils/actions";
import { useShopContext } from "../../utils/GlobalState";
// const fetchChimoney = async () => {
//     const assets = null;
//     const sdk = require("api")('@chimoney/v0.2.1#2w2jenlbc6ubix');
//     sdk.auth("5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262");
//     try {
//         return assets = await sdk.getV02InfoAssets();
//     } catch (err) {
//         console.log(err);
//     }
// };

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
            console.log("in existing prod", state.products);
        } else {
            setCart([
                ...cart,
                {
                    id: newProduct.id,
                    qty: 1
                }
            ]);
            dispatch({type: ADD_PRODUCT, payload: [...state.products, newProduct]});
            console.log("in new prod", state.products)
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    
    const removeFromCart = (product) => {
        // const existingProduct = cart.find(product => product.id == product.id);
        // if (existingProduct.qty > 1) {
        //     dispatch({type: ADD_PRODUCT, payload: })
        // } else {
        //     dispatch({type: DELETE_PRODUCT, payload: product});
        //     localStorage.setItem("cart", JSON.stringify(state.products));
        // }
        console.log("product to delete", product);
        console.log("cart after producted deleted", cart)
        dispatch({type: DELETE_PRODUCT, payload: product});
        localStorage.setItem("cart", JSON.stringify(...cart));
    }
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
                            <p>{product.title.trim()}</p>
                            <p className="price">${product.price}</p>
                        </div>
                        <button className="add-button" onClick={() => addToCart(product)}>Add to Cart</button>
                        <button onClick={() => removeFromCart(product)}>Delete</button>
                    </div>
                )) : null}
            </div>
        </section>
    );
};
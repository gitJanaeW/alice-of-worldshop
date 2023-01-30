import { useEffect, useState } from "react";

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
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const addToCart = (newProduct) => {
        const existingProduct = cart.find(product => product.id == newProduct.id);
        if (existingProduct) {
            existingProduct.qty++;
        } else {
            setCart([
                ...cart, 
                {
                    id: newProduct.id,
                    title: newProduct.title,
                    price: newProduct.price,
                    image: newProduct.image,
                    qty: 1
                }
            ]);
        }
    };
    useEffect(() => {
        async function fetchProducts() {
            const data = await fetchStore();
            setProducts(data);
        }
        fetchProducts();
    }, []);
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
                    </div>
                )) : null}
            </div>
            
        </section>
    );
};
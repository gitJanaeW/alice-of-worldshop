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
    useEffect(() => {
        async function fetchProducts() {
            const data = await fetchStore();
            setProducts(data);
        }
        fetchProducts();
    }, []);
    return (
        <section id="products">
            {products ? products.map((product) => (
                <div key={product.id} className="product">
                    <p className="product-text">{product.title.trim()}</p>
                    <img className="product-img" src={product.image} alt={product.title}/>
                    <p className="product-text">${product.price}</p>
                </div>
            )) : null}
        </section>
    );
};
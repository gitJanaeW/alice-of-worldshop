import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {BeatLoader} from "react-spinners";
import {ShopProvider} from "./utils/GlobalState";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Order from "./components/Order";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <ShopProvider>
                <Nav/>
                    <Routes>
                        <Route path="/" element={<Landing/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/checkout" element={<Cart/>}/>
                        <Route path="/order" element={<Order/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
            </ShopProvider>
        </BrowserRouter>
    );
}

export default App;
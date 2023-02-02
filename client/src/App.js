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

// const Products = lazy(() => import("./components/Products"));

function App() {
    return (
        <BrowserRouter>
            <ShopProvider>
                <Nav/>
                {/* <Suspense fallback={<BeatLoader color={"#123abc"} loading={true}/>}> */}
                    <Routes>
                        <Route path="/" element={<Products/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/checkout" element={<Cart/>}/>
                        <Route path="/order" element={<Order/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                {/* </Suspense> */}
            </ShopProvider>
        </BrowserRouter>
    );
}

export default App;
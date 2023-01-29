import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {BeatLoader} from 'react-spinners';
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Cart from "./components/Cart";

// const Products = lazy(() => import("./components/Products"));

function App() {
    return (
        <BrowserRouter>
            <Nav/>
            {/* <Suspense fallback={<BeatLoader color={"#123abc"} loading={true}/>}> */}
                <Routes>
                    <Route path="/" element={<Cart/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/checkout" element={<Cart/>}/>
                </Routes>
            {/* </Suspense> */}
        </BrowserRouter>
    );
}

export default App;
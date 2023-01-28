import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {BeatLoader} from 'react-spinners';
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Products from "./components/Products";

// const Products = lazy(() => import("./components/Products"));

function App() {
    return (
        <BrowserRouter>
            <Nav/>
            {/* <Suspense fallback={<BeatLoader color={"#123abc"} loading={true}/>}> */}
                <Routes>
                    <Route path="/products" element={<Landing/>}/>
                    <Route path="/products" element={<Products/>}/>
                </Routes>
            {/* </Suspense> */}
        </BrowserRouter>
    );
}

export default App;
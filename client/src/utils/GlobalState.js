import { createContext, useContext } from "react";
import {productReducer} from "./reducers";

const ShopContext = createContext();
const {Provider} = ShopContext;

const ShopProvider = ({value = [], ...props}) => {
    const [state, dispatch] = productReducer({products: []});
    return <Provider value={[state, dispatch]} {...props}/>;
};

const useShopContext = () => {
    return useContext(ShopContext);
};

export {ShopProvider, useShopContext};
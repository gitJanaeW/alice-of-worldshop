import {useReducer} from "react";
import {ADD_PRODUCT, DELETE_PRODUCT} from "../utils/actions";

export const productReducer = () => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case ADD_PRODUCT:
                    return {
                        ...state,
                        products: [...state.products, action.payload]
                    };
                case DELETE_PRODUCT:
                    return {
                        ...state,
                        products: state.products.filter(
                            (product) => {
                                product.id !== action.payload.id;
                                console.log("action.payload", action.payload);
                            }
                        )
                    };
                default:
                    return state;
            }
        },
        {products: []}
    );
    return [state, dispatch];
}
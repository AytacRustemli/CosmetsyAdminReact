import { CREATE_PRODUCT, GET_PRODUCTS} from "../Constats/ProductConstants";

export const ProductReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}


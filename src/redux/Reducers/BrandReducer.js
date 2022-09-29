import { GET_BRAND } from "../Constats/BrandConstant"


export const BrandReducer = (state = { brands: [] }, action) => {
    switch (action.type) {
        case GET_BRAND:
            return {
                ...state,
                brands: action.payload
            }
        default:
            return state
    }
}
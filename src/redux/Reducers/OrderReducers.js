import { GET_ORDERS } from "../Constats/OrderConstants";

export const OrderReducers = (state = {orders: []},action) =>{
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload
            }
    
        default:
            return state;
    }
}
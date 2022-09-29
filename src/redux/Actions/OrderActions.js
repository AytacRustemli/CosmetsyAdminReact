import { GET_ORDERS } from '../Constats/OrderConstants';
import { BASE_URL } from './../../api/Config';

export const GetAllOrders = () =>async (dispatch,getState) =>{
    let orders = await (await fetch(`${BASE_URL}order/allorders`)).json()
    dispatch({
        type: GET_ORDERS,
        payload: orders.message
    })
}
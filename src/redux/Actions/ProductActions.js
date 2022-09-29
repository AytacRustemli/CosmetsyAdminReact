import { BASE_URL } from "../../api/Config";
import { CREATE_PRODUCT, GET_PRODUCTS } from "../Constats/ProductConstants";

export const getProductsAction  = () => async (dispatch,getState) =>{
    let products = await (await fetch(`${BASE_URL}Product/productlist`)).json()
    dispatch({
        type: GET_PRODUCTS,
        payload: products.message
    })

}

export const createProductAction = (productName,brand,category,sku,description,summary,isSLider,coverPhoto,productPicture,price,salePrice) => async (dispatch, getState) =>{
    let newProduct = await fetch(`${BASE_URL}product/add`,{
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: productName,
            price: price,
            salePrice : salePrice,
            brand: brand,
            description:description,
            summary:summary,
            sku:sku,
            categoryId:category,
            coverPhoto: coverPhoto,
            isSlider: isSLider,
            productPicture: [{
                photoUrl: "ajdahdkashdkl"
            }]
        })
    }).then(res => res.json())

    dispatch({
        type: CREATE_PRODUCT,
        payload: newProduct
    })
}



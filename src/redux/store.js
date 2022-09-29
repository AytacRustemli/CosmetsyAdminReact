import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { BlogReducer } from './Reducers/BlogReducer'
import { BrandReducer } from './Reducers/BrandReducer'
import { CategoryReducer } from './Reducers/CategoryReducer'
import { CommentReducers } from './Reducers/CommentReducers'
import { OrderReducers } from './Reducers/OrderReducers'
import { ProductReducers } from './Reducers/ProductReducers'
import { UploadReducer } from './Reducers/UploadReducer'
import { UserReducer } from './Reducers/UserReducer'



const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
    category : CategoryReducer,
    products : ProductReducers,
    upload : UploadReducer,
    blog: BlogReducer,
    user: UserReducer,
    orders: OrderReducers,
    comments : CommentReducers,
    brand : BrandReducer
})

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState = {
    category : [],
    products : [],
    upload : [],
    blog : [],
    user: {userInfo: userInfoFromLocalStorage},
    orders: [],
    comments : [],
    brand : []
}

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;
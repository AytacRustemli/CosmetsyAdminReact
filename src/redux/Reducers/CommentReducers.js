import { GET_COMMENTS } from "../Constats/CommentConstants";


export const CommentReducers = (state = {comments: []},action) =>{
    switch (action.type) {
        case GET_COMMENTS:
            return{
                ...state,
                comments: action.payload
            }
    
        default:
            return state;
    }
}
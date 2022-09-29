import { BASE_URL } from "../../api/Config"
import { GET_COMMENTS } from "../Constats/CommentConstants"


export const GetAllComments = () =>async (dispatch,getState) =>{
    let comments = await (await fetch(`${BASE_URL}comment/allcomments`)).json()
    dispatch({
        type: GET_COMMENTS,
        payload: comments.message
    })
}
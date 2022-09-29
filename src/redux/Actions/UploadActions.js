import { BASE_URL } from "../../api/Config"
import { UPLOAD_FILES } from "../Constats/UploadConstats"


export const uploadAction = (image) => async (dispatch, getState) =>{
    let file = await fetch(`${BASE_URL}product/uploadphoto`,{
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data',
            'file' : image
        },
        
    }).then(res => res.json())

    dispatch({
        type: UPLOAD_FILES,
        payload: file
    })
}
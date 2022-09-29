import { UPLOAD_FILES } from "../Constats/UploadConstats";

export const UploadReducer = (state = {uploadFiles: []},action) =>{
    switch (action.type) {
        case UPLOAD_FILES:
            return {
                ...state,
                uploadFiles: action.payload
            }
    
        default:
            return state;
    }
}
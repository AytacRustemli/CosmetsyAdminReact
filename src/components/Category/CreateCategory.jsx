import { TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCategoryAction } from '../../redux/Actions/CategoryAction';

const CreateCategory = () => {
    const navigate = useNavigate()
    const [categoryName, setCategoryName] = useState();
    const [photourl,setPhotourl] = useState();
    const [ispopular,setispopular] = useState();
    const dispatch = useDispatch()
    const createCat = () => {
      dispatch(createCategoryAction(categoryName,photourl,ispopular))
      navigate("/category")
    }
    return (
      <div className='container my-5'>
          <div className="col-lg-6 my-2">
            <TextField fullWidth id="outlined-basic" onChange={(e) => setCategoryName(e.target.value)} label="Category name" variant="outlined" />
          </div> <br />
          <div className="col-lg-6 my-2">
            <TextField fullWidth id="outlined-basic" onChange={(e) => setPhotourl(e.target.value)} label="PhotoUrl" variant="outlined" />
          </div>
        <div className="row">
          <div className="col-lg-6 my-2">
            <Button
              fullWidth
              variant="contained"
              component="label"
              color='success'
              onClick={() => createCat()}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    )
}

export default CreateCategory
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../api/Config';

const UpdateCategory = () => {
  const [Name, setName] = useState("");
  const [photoUrl,setPhotoUrl] = useState("");
  const [ispopula,setIsPopula] = useState(false);
  const [id, setID] = useState(null);
  const navigate = useNavigate();
  
  const updateAPIData = async () => {
    fetch(`${BASE_URL}category/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        photoURL : photoUrl,
        isPopular : ispopula
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/category");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('Name'));
    setPhotoUrl(localStorage.getItem('PhotoUrl'));
  }, []);

  return (
    <div className='container my-5'>
          <div className="col-lg-6 my-2">
            <TextField fullWidth id="outlined-basic" value={Name} onChange={(e) => setName(e.target.value)} label="Category name" variant="outlined" />
          </div>
          <div className="col-lg-6 my-2">
            <TextField fullWidth id="outlined-basic" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} label="PhotoUrl" variant="outlined" />
          </div>
        <div className="row">
          <div className="col-lg-6 my-2">
            <Button
              fullWidth
              variant="contained"
              component="label"
              color='success'
              onClick={updateAPIData}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
  )
}

export default UpdateCategory
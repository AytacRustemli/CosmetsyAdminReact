import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './../../api/Config';
import { useEffect } from 'react';
import { Form } from 'semantic-ui-react';

const UpdateBrand = () => {
  const [Name, setName] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();
  
  const updateAPIData = async () => {
    fetch(`${BASE_URL}brand/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/brand");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('Name'));
  }, []);



  return (
    <div>
    <Form className="create-form">
      <Form.Field>
        <label>Name</label>
        <input style={{marginLeft: "22px"}} placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
      </Form.Field>
      <button type="submit" className='btn btn-outline-warning' onClick={updateAPIData} style={{marginTop:"10px", marginLeft:"30px"}}>Update</button>
    </Form>
  </div>
  )
}

export default UpdateBrand
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from './../../api/Config';
import '../Brand/create.scss'

const CreateBrand = () => {
  const [Name, setName] = useState("");
  const navigate = useNavigate();
  
  const postData = async () => {
    fetch(`${BASE_URL}brand/add`, {
      method: "POST",
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
        navigate('/brand')
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input style={{marginLeft: "22px"}} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <button className='btn btn-outline-success' type="submit" onClick={postData} style={{marginTop:"10px", marginLeft:"30px"}}>Submit</button>
      </Form>
    </div>
  );
};

export default CreateBrand
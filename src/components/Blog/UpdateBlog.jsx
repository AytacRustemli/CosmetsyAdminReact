import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BASE_URL } from '../../api/Config';


const UpdateBlog = () => {
  const [Name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [tag, setTag] = useState("");
  const [style, setStyle] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();
  
  const updateAPIData = async () => {
    fetch(`${BASE_URL}blog/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        picture: picture,
        tags: tag,
        style: style,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/blog");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('Name'));
    setPicture(localStorage.getItem('Picture'));
    setTag(localStorage.getItem('Tags'));
    setStyle(localStorage.getItem('Style'));
  }, []);



  return (
    <div>
    <Form className="create-form">
      <Form.Field>
        <label>Name</label>
        <input style={{marginLeft: "22px"}} placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Picture</label>
        <input
          placeholder="Picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input style={{marginLeft: "32px"}}  placeholder="Tags" value={tag} onChange={(e) => setTag(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Style</label>
        <input
          style={{marginLeft: "32px"}}
          placeholder="Style" value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
      </Form.Field>
      <button type="submit" className='btn btn-outline-warning' onClick={updateAPIData} style={{marginTop:"10px", marginLeft:"30px"}}>Update</button>
    </Form>
  </div>
  )
}

export default UpdateBlog
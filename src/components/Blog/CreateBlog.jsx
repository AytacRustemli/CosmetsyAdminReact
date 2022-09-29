import React, { useState } from "react";
import "../Blog/create.scss";
import { Form } from "semantic-ui-react";
import { BASE_URL } from "../../api/Config";
import { Link, Navigate, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [Name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [tag, setTag] = useState("");
  const [style, setStyle] = useState("");
  const navigate = useNavigate();
  
  const postData = async () => {
    fetch(`${BASE_URL}blog/add`, {
      method: "POST",
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
        Navigate('/blog')
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input style={{marginLeft: "22px"}} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Picture</label>
          <input
            placeholder="Picture"
            onChange={(e) => setPicture(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <input style={{marginLeft: "32px"}} placeholder="Tags" onChange={(e) => setTag(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Style</label>
          <input style={{marginLeft: "32px"}}
            placeholder="Style"
            onChange={(e) => setStyle(e.target.value)}
          />
        </Form.Field>
        <button className='btn btn-outline-success' type="submit" onClick={postData} style={{marginTop:"10px", marginLeft:"30px"}}>Submit</button>
      </Form>
    </div>
  );
};

export default CreateBlog;

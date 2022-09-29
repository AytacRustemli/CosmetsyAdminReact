import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";
import axios from "axios";
import { BASE_URL } from "../../api/Config";
import "../Blog/create.scss";

const Blog = () => {
  const [Name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [tag, setTag] = useState("");
  const [style, setStyle] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();

  const [APIData, setAPIData] = useState([]);

  const getBlog = async () => {
    axios.get(BASE_URL + "blog/getall").then((response) => {
      setAPIData(response.data);
    });
  };

  const setData = (data) => {
    let { id, name, picture, tags, style } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Picture", picture);
    localStorage.setItem("Tags", tags);
    localStorage.setItem("Style", style);
  };

  const onDelete = (id) => {
    fetch(`${BASE_URL}blog/remove/${id}`, {
      method: "DELETE",
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
        navigate('/blog')
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div id="blog" className="my-5">
      <Link to="/blog/create">
        <button className="btn btn-outline-success">Create</button>
      </Link>
      <Table singleLine className="my-4">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Picture</Table.HeaderCell>
            <Table.HeaderCell>Tags</Table.HeaderCell>
            <Table.HeaderCell>Style</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData &&
            APIData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>
                    <img width="50px" src={data.picture} alt="" />
                  </Table.Cell>
                  <Table.Cell>{data.tags}</Table.Cell>
                  <Table.Cell>{data.style}</Table.Cell>
                  <Link to={`/blog/update/${data.id}`}>
                    <Table.Cell>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => setData(data)}
                        style={{ marginTop: "5px" }}
                      >
                        Update
                      </button>
                    </Table.Cell>
                  </Link>
                  <Table.Cell>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDelete(data.id)}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Blog;

import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BASE_URL } from './../../api/Config';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import '../Brand/create.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getBrandAction } from './../../redux/Actions/BrandAction';

const Brand = () => {
  const [Name, setName] = useState("");
  const [id, setID] = useState(null);
  const { brands } = useSelector((state) => state.brand)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [APIData, setAPIData] = useState([]);


  const setData = (data) => {
    let { id, name} = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
  };

  const onDelete = (id) => {
    fetch(`${BASE_URL}brand/remove/${id}`, {
      method: "DELETE",
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

  useEffect(() => {
    dispatch(getBrandAction())
  }, []);

  return (
    <div id="brand" className="my-5">
      <Link to="/brand/create">
        <button className="btn btn-outline-success">Create</button>
      </Link>
      <Table singleLine className="my-4">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {brands &&
            brands.map((data) => {
              return (
                <Table.Row key={data.id}>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Link to={`/brand/update/${data.id}`}>
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

export default Brand
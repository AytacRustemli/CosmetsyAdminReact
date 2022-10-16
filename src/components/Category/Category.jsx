import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';
import { getCategoryAction } from './../../redux/Actions/CategoryAction';

const Category = () => {
  const [Name, setName] = useState("");
  const [photoUrl,setPhotoUrl] = useState("");
  const [ispopula,setIsPopula] = useState(false);
  const { categories } = useSelector((state) => state.category)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const setData = (data) => {
    let { id, name,photoURL,isPopular} = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("PhotoUrl",photoURL);
    localStorage.setItem("isPopular",isPopular);
  };

  const onDelete = (id) => {
    fetch(`${BASE_URL}category/remove/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        photoURL : photoUrl,
        isPopular: ispopula
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate('/category')
      });
  };

  useEffect(() => {
    dispatch(getCategoryAction())
  }, [])

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-4 col-md-6 my-4">
          <Link to="/category/create">
            <button className='btn btn-outline-success'>Create</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {
          categories &&
          categories.map((cat) => (
            <div key={cat.id} className="col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img width='100%' src={cat.photoURL} alt="" />
                  <h5 className="card-title text-center">
                    {cat.name}
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="row text-center">
                    <div className="col-lg-6">
                      <button className='btn btn-outline-danger w-100' onClick={() => onDelete(cat.id)}>Delete</button>
                    </div>
                    <div className="col-lg-6">
                      <Link to={`/category/update/${cat.id}`}>
                        <button className='btn btn-outline-warning w-100' onClick={() => setData(cat)}>Edit</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))
        }




      </div>
    </div>
  )
}

export default Category
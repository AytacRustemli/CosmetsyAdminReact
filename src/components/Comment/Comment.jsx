import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../api/Config";
import { GetAllComments } from "./../../redux/Actions/CommentActions";

const Comment = () => {
  const { comments } = useSelector((state) => state.comments);
  const [userName,setUserName] = useState("");
  const [userEmail,setUserEmail] = useState("");
  const [review,setReview] = useState("");
  const [rating,setRating] = useState(0);
  const [productName,setProductName] = useState("");
  const [productId,setProductId] = useState("");
  // const [id, setID] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onDelete = (id) => {
    fetch(`${BASE_URL}comment/remove/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        userEmail: userEmail,
        review: review,
        ratings: rating,
        productName : productName
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate('/comment')
      });
  };

  

  useEffect(() => {
    dispatch(GetAllComments());
  }, [dispatch]);

  return (
    <div className="my-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserEmail</th>
            <th scope="col">UserName</th>
            <th scope="col">Review</th>
            <th scope="col">Ratings</th>
            <th scope="col">ProductName</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {comments &&
            comments.map((comment) => (
              <tr>
                <th scope="row">{comment.id}</th>
                <td>{comment.userEmail}</td>
                <td>{comment.userName}</td>
                <td>{comment.review}</td>
                <td>{comment.ratings}</td>
                <td>{comment.productName}</td>
                <td><button className="btn btn-outline-danger" onClick={() => onDelete(comment.id)}>Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comment;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logoutUserAction } from "../../redux/Actions/UserAction";
import "./sideBar.scss";

const SideBar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    if (userInfo.status === 200) {
      dispatch(logoutUserAction());
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addProduct = () => {
    if (userInfo.status === 200) {
      navigate("/product");
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addCategory = () => {
    if (userInfo.status === 200) {
      navigate("/category");
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addBlog = () => {
    if (userInfo.status === 200) {
      navigate("/blog");
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addOrder = () => {
    if (userInfo.status === 200) {
      navigate("/order");
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addComment = () => {
    if (userInfo.status === 200) {
      navigate("/comment");
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addDashboard = () => {
    if (userInfo.status === 200) {
      navigate("/dashboard");
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addBrand = () => {
    if (userInfo.status === 200) {
      navigate("/brand");
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  return (
    <div className="sideBar">
      <ul>
        <li className="dashboard" onClick={() => addDashboard()}>
          <a>Dashboard</a>
        </li>
        <li className="product" onClick={() => addProduct()}>
          <a>Product</a>
        </li>
        <li className="category" onClick={() => addCategory()}>
          <a>Category</a>
        </li>
        <li className="blog" onClick={() => addBlog()}>
          <a>Blog</a>
        </li>
        <li className="order" onClick={() => addOrder()}>
          <a>Order</a>
        </li>
        <li className="comment" onClick={() => addComment()}>
          <a>Comment</a>
        </li>
        <li className="brand" onClick={() => addBrand()}>
          <a>Brand</a>
        </li>

        {userInfo.status !== 200 ? (
          <></>
        ) : (
          <li className="logout" onClick={() => logOut()}>
            <a>Log Out</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;

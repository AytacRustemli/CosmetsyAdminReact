import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { loginUserAction } from './../../redux/Actions/UserAction';
import  Swal  from 'sweetalert2';
import './login.scss'


const Login = () => {
  const { userInfo } = useSelector((state) => state.user)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispach = useDispatch() 

  const loginHandler = () => {
    dispach(loginUserAction(email, password))
  }

  useEffect(() => {
    if (userInfo.status) {
      if (userInfo.status === 200) {
        navigate("/dashboard")
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Bir xəta baş verdi.',
          text: 'Emailiniz və ya şifrəniz yanlışdır!'
        })
        navigate("/")
      }
    }
  }, [userInfo])


  return (
    <div id='login'>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <img width='100%' src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733__340.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="well">
              <p><strong>Email</strong></p>
              <input type="text" name="email" placeholder="example@gmail.com" id="input-email" class="form-control" onChange={(e) => setEmail(e.target.value)} />
              <p style={{marginTop:"10px"}}><strong>Password</strong></p>
              <input type="password" name="password" placeholder="Password" id="input-password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
              <div class="comment-submit">
                <button type="submit" class="cart-btn" onClick={() => loginHandler()}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
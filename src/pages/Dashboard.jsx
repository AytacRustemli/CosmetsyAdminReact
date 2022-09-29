import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-3 my-2">
              <div className="card">
                <Link to='/product' style={{textDecoration: "none"}}>
                  <div className="card-body">
                    <h3 className="card-title text-center my-5">
                      Product
                    </h3>
                  </div>
                </Link>
              </div>
        </div>
        <div className="col-lg-3 my-2">
          <div className="card">
                <Link to='/category' style={{textDecoration: "none"}}>
                  <div className="card-body">
                    <h3 className="card-title text-center my-5">
                      Category
                    </h3>
                  </div>
                </Link>
          </div>
        </div>
        <div className="col-lg-3 my-2">
          <div className="card">
            <Link to='/blog' style={{textDecoration: "none"}}>
              <div className="card-body">
                <h3 className="card-title text-center my-5">
                  Blog
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 my-2">
          <div className="card">
            <Link to='/order' style={{textDecoration: "none"}}>
              <div className="card-body">
                <h3 className="card-title text-center my-5">
                  Order
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 my-2">
          <div className="card">
            <Link to='/comment' style={{textDecoration: "none"}}>
              <div className="card-body">
                <h3 className="card-title text-center my-5">
                  Comment
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 my-2">
          <div className="card">
            <Link to='/brand' style={{textDecoration: "none"}}>
              <div className="card-body">
                <h3 className="card-title text-center my-5">
                  Brand
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
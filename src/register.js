import React, { Component } from 'react';

class Register extends Component{
  





    render(){
        return(
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-7 mx-auto">
        <div className="card card-signin my-5 mx-5">
          <div className="card-body ">
            <h5 className="card-title text-center">Sign Up</h5>
            <form className="form-signin ">
              <div className="form-label-group">
              <label >Username</label>
                <input type="text" id="inputUsername" className="form-control mb-2" placeholder="Username" required /> 
              </div>
      

              <div className="form-label-group">
              <label>Password</label>
                <input type="password" id="inputPassword" className="form-control mb-2 " placeholder="Password" required/>
              </div>
              <div className="form-label-group">
              <label >Confirm Password</label>
                <input type="password" id="inputPassword2" className="form-control mb-2 " placeholder="Confirm Password" required/>
              </div>
              <button className="btn btn-lg btn-primary btn-block my-4" type="submit">Sign Up</button>
              <div className=" text-info">
                  <a href="/login"> Go to Login page </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  </div>
  )
  }

}

export default Register
import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

class Login extends Component{



    render(){
        return(
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin " onSubmit={this.handleSubmit}>
              <div className="form-label-group">
              <label>Username</label>
                <input type="text" id="inputUsername" className="form-control mb-2 mt-1" placeholder="Username" required />
               
              </div>

              <div className="form-label-group">
              <label >Password</label>
                <input type="password" id="inputPassword" className="form-control mb-2 mt-1" placeholder="Password" required/>
               
              </div>
              <button className="btn btn-lg btn-info btn-block my-4 k" type="submit">Sign in</button>
              <div className=" text-info">
                  <a href="/signup"> Go to Register page </a>
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

export default Login
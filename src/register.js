import React, { Component } from 'react';

class Register extends Component{
  





    render(){
        return(
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-7 mx-auto">
        <div class="card card-signin my-5 mx-5">
          <div class="card-body ">
            <h5 class="card-title text-center">Sign Up</h5>
            <form class="form-signin ">
              <div class="form-label-group">
              <label for="inputUsername">Username</label>
                <input type="text" id="inputUsername" class="form-control mb-2" placeholder="Username" required autofocus/> 
              </div>
      

              <div class="form-label-group">
              <label for="inputPassword">Password</label>
                <input type="password" id="inputPassword" class="form-control mb-2 " placeholder="Password" required/>
              </div>
              <div class="form-label-group">
              <label for="inputPassword2">Confirm Password</label>
                <input type="password" id="inputPassword2" class="form-control mb-2 " placeholder="Confirm Password" required/>
              </div>
              <button class="btn btn-lg btn-primary btn-block my-4" type="submit">Sign Up</button>
              <div class=" text-info">
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
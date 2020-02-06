import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import '../Styles/SignUp.css';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>

                <Container>
              <div className="signin-form" id = "signUpForm">
                <form>
                <div className="signin-text">
                 <h2 className="free-account">Get a Free Account Now</h2>
                 
                 </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Firstname" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Lastname" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <Link to="/dashboard">
                    <button type="submit" className="btn btn-danger btn-lg btn-block" id="signin-button">Sign Up</button>
                  </Link>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" defaultChecked/>
                    <label className="form-check-label" for="exampleCheck1">Remember Me?</label>
                  </div>
                  
                  
                  <div id="continue-buttons">
                  <button type="submit" className="btn btn-light btn-lg btn-block" >Continue with Google</button>
                  <button type="submit" className="btn btn-primary btn-lg btn-block" >Continue with Facebook</button>
                  </div>

                  <p>Already have an account? <Link to="/register"><a id="signup">Sign in here</a></Link></p>
                </form>
              </div>
            </Container>

            </React.Fragment>
         );
    }
}
 
export default SignUp;
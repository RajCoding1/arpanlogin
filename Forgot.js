import React from 'react';
import './stylesheet.css'; // Make sure to import your custom stylesheet

function Forgot() {
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            {/* Background Image */}
          </div>
          <div className="col-md-6 right">
            <div className="input-box">
              <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/2560px-Standard_Chartered_%282021%29.svg.png" alt="logo" />
              <header><h3>Find Your Password</h3></header>
              <p>Enter your registered emailid to recover your password</p><br />
              <div className="input-field">
                <input type="email" className="input" id="emailid" required title="Enter correct Email Id" />
                <label htmlFor="emailid">Enter Registered Email id</label>
              </div>
              {/* <div className="input-field">
                <input type="password" className="input" id="pass" required pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Password should contain at least 8 characters including one uppercase letter, one lowercase letter, one digit, and one special character" />
                <label htmlFor="pass">Password</label>
              </div> */}
              <div className="input-field">
                <input type="submit" className="submit" value="Submit" />
              </div>
              <div className="Forgot">
                <span><a href="loginmain.html">Back to Login Page</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;

import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const ForgotPasswordPage = () => {
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            {/* <!-- background Image --> */}
          </div>
          <div className="col-md-6 right">
            <div className="input-box">
              <header>
                <h3>Find Your Password</h3>
              </header>
              <div className="content-left">
                <h>Enter your registered emailid to recover your password</h>
                <div className="input-field">
                  <input
                    type="email"
                    className="input"
                    id="emailid"
                    required
                    placeholder="Enter Regestered Email id"
                    title="Enter correct Email Id"
                  />
                </div>
                <div className="input-field">
                  <Link to="/back-to-login">
                    <input type="submit" className="submit" value="Submit" />
                  </Link>
                </div>
                <div className="Forgot">
                  <span>
                    <Link to="/back-to-login">Back to Login Page</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;


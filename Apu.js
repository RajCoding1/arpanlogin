import React from 'react';
import './stylesheet.css'; // Make sure to import your custom stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            {/* BG Image */}
          </div>
          <div className="col-md-6 right">
            <div className="input-box">
              <header>
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/2560px-Standard_Chartered_%282021%29.svg.png" alt="logo" />
                <h3>LOGIN</h3>
              </header>
              <div className="input-field">
                <input type="text" className="input" id="employeeId" required pattern="[a-zA-Z0-9]{1,7}" title="Employee ID should be 1 to 7 characters long and contain only alphabets and numbers" />
                <label htmlFor="employeeId">Employee ID</label>
              </div>
              <div className="input-field">
                <input type="password" className="input" id="pass" required pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Password should contain at least 8 characters including one uppercase letter, one lowercase letter, one digit, and one special character" />
                <label htmlFor="pass">Password</label>
              </div>
              <div className="input-field">
                <input type="submit" className="submit" value="Sign IN" />
              </div>
              <div className="Forgot">
                <span><a href="forgot.html">Forgot Password?</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

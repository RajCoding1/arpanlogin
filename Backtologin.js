import React from 'react';
import './stylesheet.css'; // Make sure to import your custom stylesheet

function Backtologin() {
  const redirectToLogin = () => {
    window.location.href = "Apu.js";
  };

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
              <header><h3>Congratulations!</h3></header>
              <p>One password recovery link already sent to your Registered Emailid. Please visit that link to recover your password. <br /> If there are still issues, please contact the IT Team.</p><br />
              <div className="input-field">
                <input type="button" className="submit" onClick={redirectToLogin} value="Back to Login Page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backtologin;

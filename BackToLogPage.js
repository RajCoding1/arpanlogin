import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const BackToLogPage = () => {
 

  return (
    
    <div className="wrapper">
      {/* Your existing JSX content */}
      <div class="container main">
            <div class="row">
                <div class="col-md-6 side-image">
                   {/* <!--background Image -->*/}   
                </div>
                <div class="col-md-6 right">
                    <div class="input-box">
                        <header>
                            <h3>Congratulations!</h3>
                        </header>
                        <div> 
                        <p>One passwordrecovery link alreadt sent to your Regestered Emailid.</p> 
                        <p>please visit that link to recover your password.</p> 
                        <p>If still there is some issues then please contact with IT Team.</p> 
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
    )
};

export default BackToLogPage;
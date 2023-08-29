import React from 'react';
import './App.css'; // Import your CSS file

class RejectedMessage extends React.Component {
  render() {
    return (
      <div className="bigbox">
        <a href="#" class="button_msg">&laquo;&laquo;</a>
        <h3> Sorry! </h3>
        <div className="msg">
          <p>
            Dear <b>Prabhat Kumar</b> <span>[application no: CC1012358]</span>,<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I hope this message finds you well. We appreciate your interest in applying for a credit card with <b>STANDARD CHATTERED BANK INDIA</b>. We have carefully reviewed your application and understand the importance of obtaining a credit card for your financial needs.
            Regrettably, we must inform you that your application for <b><a>Standard Chattered Ease My Trip Credit Card</a></b> has not been accepted at this time. Our decision is primarily based on your credit history, which does not meet the criteria required for approval. We understand that financial circumstances can be challenging, and we sincerely empathize with your situation.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although your application was not approved this time, we encourage you to focus on rebuilding your credit. Taking appropriate steps, such as making timely payments, reducing outstanding debts, and managing credit responsibly, can significantly improve your credit profile over time.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you have any questions about our decision or need guidance on improving your credit, our customer support team is here to assist you. We remain committed to helping you achieve your financial goals and providing support in any way we can.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for considering <b>STANDARD CHATTERED BANK INDIA</b>  for your credit card needs. We value your interest in our services and hope to have the opportunity to serve you in the future.<br />
            <br />       
            Best regards,<br />
            <b>Pranjal</b><br />
            Relationship Manager <br />
            STANDARD CHATTERED BANK INDIA <br />
            Mail Id: <a href="mailto:pranjal.sinde@sc.com">pranjal.sinde@sc.com</a>
          </p>
        </div>
        <a href="#" className="button_msg" id="send"> Send </a>
      </div>
    );
  }
}

export default RejectedMessage;

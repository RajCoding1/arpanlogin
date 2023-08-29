import React from 'react';
import './App.css'; 


class App extends React.Component {
  render() {
    return (
      <div className="bigbox">
        <a href="#" class="button_msg">&laquo;&laquo;</a>
        <h3> Congratulations! </h3>
        <div className="msg">
          <p>
            Dear <b>Prabhat Kumar</b> <span>[application no: CC1012358]</span>,<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are delighted to share some fantastic news with you! Your credit card application with <b>STANDARD CHATTERED BANK INDIA</b> has been upgraded to a superior credit card <a><b>Standard Chattered Manhattan Platinum Credit Card</b></a> due to your exceptional credit score. Congratulations on this well-deserved recognition!
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your strong creditworthiness and responsible financial history have impressed us, making you eligible for our premium <a><b>Standard Chattered Manhattan Platinum Credit Card</b></a>. This upgraded card offers an array of exclusive benefits, enhanced rewards, and additional privileges that cater to your financial needs and lifestyle.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With <a><b>Standard Chattered Manhattan Platinum Credit Card</b></a>, you can enjoy higher credit limits, special discounts on select purchases, exclusive access to events, and various other perks that come with being part of our distinguished cardholder community.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To ensure the security of your card, it will be dispatched to your registered mailing address within the next 5-7 Days [your tracking id on <a><b>#BlueDart = 25896314702</b></a>]. Upon receiving your card, please remember to activate it following the enclosed instructions before making your first purchase.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We sincerely value your trust and loyalty in <b>STANDARD CHATTERED BANK INDIA</b>. Should you have any questions about your upgraded credit card, its features, or any other banking-related inquiries, our dedicated customer support team is always available to assist you.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for choosing <b>STANDARD CHATTERED BANK INDIA</b>  as your preferred financial partner. We look forward to continuing our fruitful relationship and supporting you on your financial journey.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once again, congratulations on your upgraded credit card, and we wish you prosperity and success in all your endeavors! <br />
            <br />
            <br />Best regards,
            <br /><b>Pranjal</b><br />
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

export default App;

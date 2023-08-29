import React from 'react';
import './App.css'; // Import your CSS file

class App extends React.Component {
  render() {
    return (
      <div className="bigbox">
        <a href="#" class="button_msg">&laquo;&laquo;</a>
        <h3> Congratulations! </h3>
        <div className="msg">
          <p>
            Dear <b> <a>Prabhat Kumar</a> <a>[application no: CC1012358]</a></b>,<br />
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are delighted to inform you that your application for{' '}
            <a><b>Standard Chattered Ease My Trip Credit Card</b></a> with <b>STANDARD CHATTERED BANK INDIA</b> has been approved!
            Congratulations on this exciting news!
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your financial history and creditworthiness have met our criteria, making you eligible for
            this credit card you applied for. We believe this card will offer you numerous benefits and convenience in managing your
            financial needs.
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To ensure the security of your card, it will be dispatched to your registered mailing
            address within the next 5-7 Days[your tracking id on <a><b>#BlueDart = 25896314702</b></a>]. Upon receiving your card,
            please remember to activate it following the enclosed instructions before making your first purchase.
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once again, congratulations on being approved for the credit card. Thank you for
            choosing <b>STANDARD CHATTERED BANK INDIA</b> as your trusted financial partner. We look forward to serving you and helping
            you achieve your financial goals.    <br />
            <br />
            <br />Best regards,
            <br /><b><a>Pranjal</a><br />
            Relationship Manager <br />
            STANDARD CHATTERED BANK INDIA <br />
            Mail Id: <a>pranjal.sinde@sc.com</a></b>
          </p>
        </div>
        <a href="#" className="button_msg" id="send"> Send </a>
      </div>
    );
  }
}

export default App;


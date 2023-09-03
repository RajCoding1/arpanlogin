import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    applicationId: '',
    customerName: '',
    customerMobile: '',
    customerEmail: '',
    cibilScore: '',
    appliedCard: '',
    appliedLimit: '',
    availableCard: '',
    availableLimit: '',
  });

  const [isEligible, setIsEligible] = useState(false);
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    // Replace with your backend API endpoint
    const apiUrl = 'https://your-backend-api-url.com/data';

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;

        setBackendData(data);

        // Check if the customer is eligible based on CIBIL score
        setIsEligible(data.cibilScore > 750);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="App">
    <h1>Credit Card Application</h1>
    {backendData && (
      <form>
        <label>
          Application ID:
          <input
            type="text"
            name="applicationId"
            value={formData.applicationId}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Customer Name:
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Customer Mobile No:
          <input
            type="text"
            name="customerMobile"
            value={formData.customerMobile}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Customer Email ID:
          <input
            type="text"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          CIBIL Score:
          <input
            type="number"
            name="cibilScore"
            value={formData.cibilScore}
            onChange={handleInputChange}
            readOnly
          />
        </label>
        <br />

        <label>
          Applied Card:
          <input
            type="text"
            name="appliedCard"
            value={formData.appliedCard}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Applied Limit:
          <input
            type="text"
            name="appliedLimit"
            value={formData.appliedLimit}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {isEligible && (
          <>
            <label>
              Available Card:
              <select
                name="availableCard"
                value={formData.availableCard}
                onChange={handleInputChange}
              >
                {backendData.availableCards.map((card) => (
                  <option key={card} value={card}>
                    {card}
                  </option>
                ))}
              </select>
            </label>
            <br />

            <label>
              Available Limit:
              <select
                name="availableLimit"
                value={formData.availableLimit}
                onChange={handleInputChange}
              >
                {backendData.availableLimits.map((limit) => (
                  <option key={limit} value={limit}>
                    {limit}
                  </option>
                ))}
              </select>
            </label>
            <br />
          </>
        )}

        <button type="button" onClick={handleSubmit}>
          Complete
        </button>
        <button type="button">Reject</button>
        <button type="button">Back</button>
      </form>
    )}
  </div>
  );
};

export default App;

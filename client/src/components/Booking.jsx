import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the backend API
    fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Do something with the response from the backend
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section>
      <section className="section-padding" id="booking">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <div className="booking-form">
                <h2 className="text-center mb-lg-3 mb-2">Book an appointment</h2>

                <form role="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Phone: 123-456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="form-control"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="message"
                        name="message"
                        placeholder="Additional Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6 mx-auto">
                      <button type="submit" className="form-control" id="submit-button">
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Booking;
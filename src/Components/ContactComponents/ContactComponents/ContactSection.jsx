import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, contact, message } = formData;

    axios.post('http://localhost:3001/save', { username, email, contact, message })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-5 mb-md-0">
            {/* Google Map */}
          </div>
          <div className="col-md-7">
            <h3 className="section-title">Contact Form</h3>
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <input
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control border-1 rounded-2 box-shadow mb-4"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="form-control border-1 rounded-2 box-shadow mb-4"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  required
                  onChange={handleChange}
                  className="form-control border-1 rounded-2 box-shadow mb-4"
                  placeholder="Contact Number"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control border-1 rounded-2 box-shadow mb-4"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

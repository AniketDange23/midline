import React, { useState } from "react";
import axios from "axios";


const ContactSection = () => {
  const initialState = {
    username: "",
    email: "",
    contact: "",
    companyName: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error message when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const notifySuccess = () =>
   alert("Thanks for visiting! Have a great day.");

  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.contact.trim()) {
      errors.contact = "Contact Number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      errors.contact = "Contact Number is invalid";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      axios
        .post("http://localhost:3001/save", formData)
        .then((result) => {
          console.log(result);
          // Clear form data
          setFormData(initialState);
          // Show success toast message
          notifySuccess();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="section " id="form">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.921367173562!2d79.03546697471671!3d21.115700884787824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9fc666f94677e53%3A0x325fefc473b236c3!2sMidline%20Media%20Solution!5e0!3m2!1sen!2sin!4v1713786939510!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6" >
            <h3 className="section-title">Contact Form</h3>
            <div className="row">
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
                {errors.username && (
                  <div className="text-danger">{errors.username}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control border-1 rounded-2 box-shadow mb-4"
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-control border-1 rounded-2 box-shadow mb-4"
                  placeholder="Contact Number"
                />
                {errors.contact && (
                  <div className="text-danger">{errors.contact}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-control border-1 rounded-2 box-shadow mb-4"
                  placeholder="Company Name"
                />
              </div>
              <div className="col-12 ">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control border-1 rounded-2 box-shadow mb-4 py-3"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="button"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

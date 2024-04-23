import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const initialState = {
    username: "",
    email: "",
    contact: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const notifySuccess = () => toast.success("Thanks for visiting! Have a great day.");

  const handleSubmit = async () => {
    const { username, email, contact, message } = formData;

    axios
      .post("http://localhost:3001/save", { username, email, contact, message })
      .then((result) => {
        console.log(result);
        // Clear form data
        setFormData(initialState);
        // Show success toast message
        notifySuccess();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="section">
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
          <div className="col-md-6">
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
                <button type="button" onClick={handleSubmit} className="button">
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

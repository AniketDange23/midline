import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='section'>
      <div className='container'>
        <div className='row'>
          {/* google map */}
          <div className='col-md-5 mb-5 mb-md-0' data-aos="zoom-out-right">
            <div
              id='map_canvas'
              style={{ position: "relative", overflow: "hidden" }}
            >
              <iframe
                title='Google Maps'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.664760208734!2d79.03100019329301!3d21.115907255891358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9fc666f94677e53%3A0x325fefc473b236c3!2sMidline%20Media%20Solution!5e0!3m2!1sen!2sin!4v1713257898460!5m2!1sen!2sin'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>{" "}
            </div>
          </div>
          <div className='col-md-7' data-aos="fade-up"
     data-aos-duration="3000" id='form'>
            <h3 className='section-title'>Contact Form</h3>
            <form className='row'>
              <div className='col-md-6'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='form-control border-0 rounded-0 box-shadow mb-4'
                  placeholder='Name'
                />
              </div>
              <div className='col-md-6'>
                <input
                  type='email'
                  name='mail'
                  id='mail'
                  className='form-control border-0 rounded-0 box-shadow mb-4'
                  placeholder='Email'
                />
              </div>
              <div className='col-md-6'>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  className='form-control border-0 rounded-0 box-shadow mb-4'
                  placeholder='Phone'
                />
              </div>
              <div className='col-md-6'>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  className='form-control border-0 rounded-0 box-shadow mb-4'
                  placeholder='Subject'
                />
              </div>
              <div className='col-12'>
                <textarea
                  name='message'
                  id='message'
                  className='form-control border-0 rounded-0 box-shadow mb-5 py-3 px-4'
                  placeholder='Your Message'
                ></textarea>
              </div>
              <div className='col-12'>
                <button type='submit' value='send' className='button'>
                  send message
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

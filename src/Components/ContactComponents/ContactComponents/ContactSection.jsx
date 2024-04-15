const ContactSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {/* google map */}
          <div className="col-md-5 mb-5 mb-md-0">
            <div id="map_canvas" style={{position: 'relative', overflow: 'hidden'}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.918221444872!2d79.03522421083777!3d21.11582628047427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c105be93e64b%3A0x633455db6ed2def4!2sELIORA%20TECHNOLOGY%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1712573514770!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-md-7">
            <h3 className="section-title">Contact Form</h3>
            <form action="#" className="row">
              <div className="col-md-6">
                <input type="text" name="name" id="name" className="form-control border-0 rounded-0 box-shadow mb-4" placeholder="Name" />
              </div>
              <div className="col-md-6">
                <input type="email" name="mail" id="mail" className="form-control border-0 rounded-0 box-shadow mb-4" placeholder="Email" />
              </div>
              <div className="col-md-6">
                <input type="text" name="phone" id="phone" className="form-control border-0 rounded-0 box-shadow mb-4" placeholder="Phone" />
              </div>
              <div className="col-md-6">
                <input type="text" name="subject" id="subject" className="form-control border-0 rounded-0 box-shadow mb-4" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea name="message" id="message" className="form-control border-0 rounded-0 box-shadow mb-5 py-3 px-4" placeholder="Your Message"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" value="send" className="button">send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



const HeroSlider = () => {

  return (
    <section className="hero-slider">
    <div className="video-wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        className="img-fluid"
        style={{ width: "100%"}}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>

    </section>
  );
};

export default HeroSlider;

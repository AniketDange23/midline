
const FeatureSection = () => {
  return (
    <section className="translate-top">
      <div className="container mt-5 ">
        <div className="row">
          {/* Feature item 1 */}
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark active">
              <div className="icon-bg mb-4 water-wave">
              <h3 className="text-white mb-0"><span className="count icon" data-count="3">0</span></h3>    
                  </div>
              <h4 className="mb-4">Years Experience
</h4>
            </div>
          </div>
          {/* Feature item 2 */}
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
              <div className="icon-bg mb-4 water-wave">
              <h3 className="text-white mb-0"><span className="count icon" data-count="70">0</span></h3>    
              </div>
              <h4 className="mb-4">Expert Worker
</h4>
            </div>
          </div>
          {/* Feature item 3 */}
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
              <div className="icon-bg mb-4 water-wave">
              <h3 className="text-white mb-0"><span className="count icon" data-count="9">0</span></h3>    
              </div>
              <h4 className="mb-4">Happy Clients
</h4>
            </div>
          </div>
          {/* Feature item 4 */}
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
              <div className="icon-bg mb-4 water-wave">
              <h3 className="text-white mb-0"><span className="count icon" data-count="250">0</span></h3>    
              </div>
              <h4 className="mb-4">Best Calling Service
</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

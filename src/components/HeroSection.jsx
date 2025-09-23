import heroGlow from "../assets/images/ai-studio/ai-hero-glow.png";

const HeroSection = () => {

  return (
    <section
      id=""
      className="particals py-md-10 py-5"
      style={{
        background: `url(${heroGlow}) no-repeat center/cover`,
      }}
      //   data-cue="fadeIn"
    >
      <canvas id="starCanvas"></canvas>
      <div className="container py-xl-10">
        <div className="row py-xl-4">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
            <div
              className="text-center d-flex flex-column gap-6"
              //   data-cue="zoomIn"
            >
              <div className="d-flex flex-column gap-3">
                <h1 className="display-5 mb-0">
                  <span className="gradient-text">
                    AI tools that accelerate your business
                  </span>
                </h1>
                <p className="mb-0 lead px-xxl-8">
                  From customer growth, to hiring, our MicroAgent will take care
                  of the hard work so you can focus on running your business.
                </p>
              </div>
              <div className="d-flex flex-row gap-3 justify-content-center">
                <a href="#demo" className="btn btn-primary">
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

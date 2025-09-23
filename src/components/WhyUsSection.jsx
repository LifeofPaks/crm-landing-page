const WhyUsSection = () => {
  const features = [
    {
      image: "./src/assets/images/mobile-app/feature-2.svg",
      title: "Save Time",
      description: "Automate repetitive tasks so you can focus on customers.",
    },
    {
      image: "./src/assets/images/mobile-app/feature-1.svg",
      title: "Grow Faster",
      description: "Turn leads into loyal clients with smart followup.",
    },
    {
      image: "./src/assets/images/mobile-app/feature-3.svg",
      title: "Work Smarter",
      description:
        "Insights and actions delivered instantly, without the guesswork.",
    },
  ];

  return (
    <section
      className="py-xl-9 py-6"
      //   data-cue="fadeIn"
    >
      <div className="container">
        <div className="row mb-6">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
            <div className="d-flex flex-column gap-4 text-center">
              <div className="d-flex justify-content-center">
                <span className="badge bg-white text-muted border border-light-subtle rounded-pill text-uppercase fw-semibold py-2 px-3 small ls-md">
                  Why Us
                </span>
              </div>
              <div className="d-flex flex-column gap-2">
                <h2 className="mb-0 display-6 gradient-text">
                  Why our customers love MicroAgent
                </h2>
                <p className="mb-0">
                  Our mission at{" "}
                  <span className="text-primary">MicroAgent AI</span> is to make
                  advanced AI tools accessible and affordable for small
                  businesses
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-lg-6 gy-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              // data-cue="zoomIn"
            >
              <div className="d-flex flex-column gap-5 p-xxl-6 text-center p-3 card card-lift">
                <div className="d-flex justify-content-center">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title.toLowerCase()}
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 className="h4">{feature.title}</h3>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up & Choose a Plan",
      description:
        "Tell us your goal (e.g. get more leads, support ticket management, hire faster…)",
      duration: "1000",
    },
    {
      number: "2",
      title: "Access AI Tools & Customize",
      description:
        "We integrate and set up your MicroAgent AI tools in minutes.",
      duration: "1500",
    },
    {
      number: "3",
      title: "Grow & Transform your Business",
      description:
        "You start seeing results - and we keep improving them automatically.",
      duration: "2000",
    },
  ];

    return (
      <>
        <div className="pattern-square"></div>

        <section
          id="work"
          className="py-xl-9 py-lg-7 py-5"
          data-cue="fadeIn"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center mb-xl-7 mb-5 d-flex flex-column gap-2">
                  <h2 className="mb-0">
                    <span className="gradient-text">How It Works</span>
                  </h2>
                  <p className="mb-0 lead">3 Simple steps</p>
                </div>
              </div>
            </div>
            <div className="row gy-5 gy-md-0 process-step gx-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 col-12"
                    data-cue="fadeIn"
                    data-duration={step.duration}
                >
                  <div className="d-flex flex-column gap-6 p-xxl-6 p-md-4 text-center">
                    <div className="line">
                      <div className="icon-shape icon-md text-dark fw-semibold fs-4 mx-auto border-gradient-mix-color">
                        {step.number}
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <h3 className="fs-4 mb-0">{step.title}</h3>
                      <p className="mb-0">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default HowItWorksSection;

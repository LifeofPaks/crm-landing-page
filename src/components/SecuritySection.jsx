const SecuritySection = () => {
  const securityFeatures = [
    {
      image: "./src/assets/images/mobile-app/security.svg",
      title: "Bank-Level Security",
      description:
        "256-bit encryption to protect your data. We use 256-bit TLS encryption and advanced security features including JWT token.",
    },
    {
      image: "./src/assets/images/mobile-app/privacy.svg",
      title: "Privacy Protection",
      description:
        "Your data is private and secure. We never share your data with any other parties without your consent.",
    },
    {
      image: "./src/assets/images/mobile-app/authentication.svg",
      title: "Multi-Factor Authentication",
      description:
        "A multi-step account login process that requires users to provide more than just a password to access",
    },
  ];

  return (
    <section
      className="py-xl-9 py-6"
      // data-cue="fadeIn"
    >
      <div className="container">
        <div className="row mb-6">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
            <div className="d-flex flex-column gap-4 text-center">
              <div className="d-flex justify-content-center">
                <span className="badge bg-white text-muted border border-light-subtle rounded-pill text-uppercase fw-semibold py-2 px-3 small ls-md">
                  Security
                </span>
              </div>
              <div className="d-flex flex-column gap-2">
                <h2 className="mb-0 display-6 gradient-text">
                  Your Security is Our Priority
                </h2>
                <p className="mb-0">
                  Your security and privacy at the heart of{" "}
                  <span className="text-primary">MicroAgent AI</span> because we
                  know there's no room for compromise when it comes to data
                  access and agentic actions. We use a combination of Profile
                  and Role based access control to retrieve agentic actions and
                  data access for MicroAgent.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-lg-6 gy-4">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              // data-cue="zoomIn"
            >
              <div className="d-flex flex-column gap-5 p-xxl-6 text-center p-3 card card-lift">
                <div className="d-flex justify-content-center">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title.toLowerCase().replace(/\s+/g, "-")}
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

export default SecuritySection;

import React, { useState, useEffect, useRef } from "react";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    jobTitle: "",
    company: "",
    country: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Please enter first name.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Please enter last name.";
    if (!formData.email.trim()) newErrors.email = "Please enter email.";
    if (!formData.mobile.trim()) newErrors.mobile = "Please enter phone.";
    if (!formData.jobTitle) newErrors.jobTitle = "Please select job title.";
    if (!formData.country) newErrors.country = "Please select country.";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree before submitting.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, submit to Salesforce
      const form = e.target;
      form.submit();
    }
  };

  // open/close modal helpers
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // close on Escape and click outside
  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // disable body scroll when modal open
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <>
      {/* KEEP the pattern-square and the section exactly as you provided */}
      <div className="pattern-square"></div>

      <section
        id="demo"
        data-cue="fadeIn"
        className="py-lg-9 py-md-8 py-5"
        style={{
          background:
            "url(./src/assets/images/ai-studio/cta-glows.png) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-12">
              <div className="d-flex flex-column gap-6">
                <div
                  className="text-center d-flex flex-column gap-2"
                  data-cue="zoomOut"
                >
                  <h2 className="mb-0 display-6">Ready to see it in action?</h2>
                  <p className="mb-0 px-xl-5 lead">
                    Join thousands of creators and businesses using our AI to
                    work smarter, faster, and more creatively.
                  </p>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h2 className="h3">Schedule a free estimate call</h2>
                          <p className="mb-0">
                            Schedule a short 20-min discovery call and get a
                            look inside the way we design, develop and scale
                            websites.
                          </p>
                        </div>
                      </div>

                      <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                        aria-modal="true"
                        data-cue="fadeIn"
                        style={{ background: "rgba(0,0,0,0.6)" }}
                        onMouseDown={onBackdropClick}
                      >
                        <div
                          className="modal-dialog modal-lg modal-dialog-centered"
                          role="document"
                          data-cue="zoomOut"
                          style={{ maxWidth: 920 }}
                        >
                          <div
                            className="modal-content shadow-lg"
                            ref={modalRef}
                            onMouseDown={(e) => e.stopPropagation()}
                          >
                            <div className="modal-header">
                              <h5 className="modal-title">
                                Schedule a free estimate call
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={closeModal}
                              />
                            </div>

                            <div className="modal-body">
                              <p className="mb-3">
                                Schedule a short 20-min discovery call and get a
                                look inside the way we design, develop and scale
                                websites.
                              </p>

                              <form
                                className="row g-3 needs-validation"
                                noValidate
                                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8c000004uWvt"
                                method="POST"
                                onSubmit={handleSubmit}
                              >
                                {/* keep hidden fields exactly */}
                                <input
                                  type="hidden"
                                  name="oid"
                                  value="00D8c000004uWvt"
                                />
                                <input
                                  type="hidden"
                                  name="retURL"
                                  value="https://microagent.services"
                                />

                                {/* 2-column layout: first + last */}
                                <div className="col-md-6">
                                  <label
                                    htmlFor="first_name"
                                    className="form-label"
                                  >
                                    First Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errors.firstName ? "is-invalid" : ""
                                    }`}
                                    id="first_name"
                                    name="firstName"
                                    maxLength="40"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                  />
                                  {errors.firstName && (
                                    <div className="invalid-feedback">
                                      {errors.firstName}
                                    </div>
                                  )}
                                </div>

                                <div className="col-md-6">
                                  <label
                                    htmlFor="last_name"
                                    className="form-label"
                                  >
                                    Last Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errors.lastName ? "is-invalid" : ""
                                    }`}
                                    id="last_name"
                                    name="lastName"
                                    maxLength="80"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                  />
                                  {errors.lastName && (
                                    <div className="invalid-feedback">
                                      {errors.lastName}
                                    </div>
                                  )}
                                </div>

                                {/* 2-column layout: email + phone */}
                                <div className="col-md-6">
                                  <label htmlFor="email" className="form-label">
                                    Email <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="email"
                                    className={`form-control ${
                                      errors.email ? "is-invalid" : ""
                                    }`}
                                    id="email"
                                    name="email"
                                    maxLength="80"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                  />
                                  {errors.email && (
                                    <div className="invalid-feedback">
                                      {errors.email}
                                    </div>
                                  )}
                                </div>

                                <div className="col-md-6">
                                  <label
                                    htmlFor="mobile"
                                    className="form-label"
                                  >
                                    Phone Number{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="tel"
                                    className={`form-control ${
                                      errors.mobile ? "is-invalid" : ""
                                    }`}
                                    id="mobile"
                                    name="mobile"
                                    maxLength="40"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                  />
                                  {errors.mobile && (
                                    <div className="invalid-feedback">
                                      {errors.mobile}
                                    </div>
                                  )}
                                </div>

                                {/* 2-column layout: jobTitle + company */}
                                <div className="col-md-6">
                                  <label
                                    htmlFor="jobTitle"
                                    className="form-label"
                                  >
                                    Job Title{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    className={`form-select ${
                                      errors.jobTitle ? "is-invalid" : ""
                                    }`}
                                    id="jobTitle"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleInputChange}
                                    required
                                  >
                                    <option value="">Job Title</option>
                                    <option value="1">
                                      CEO / President / Decision Maker / Small
                                      Business Owner
                                    </option>
                                    <option value="2">
                                      Software Developer / Technical or Solution
                                      Architect
                                    </option>
                                    <option value="3">
                                      Sales Agent / Prospective Partner /
                                      Affiliate Marketer
                                    </option>
                                    <option value="4">
                                      Potential Customer / User
                                    </option>
                                    <option value="5">Others not stated</option>
                                  </select>
                                  {errors.jobTitle && (
                                    <div className="invalid-feedback">
                                      {errors.jobTitle}
                                    </div>
                                  )}
                                </div>

                                <div className="col-md-6">
                                  <label
                                    htmlFor="company"
                                    className="form-label"
                                  >
                                    Company or Business Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="company"
                                    name="company"
                                    maxLength="40"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                  />
                                </div>

                                {/* Country — kept full-width exactly as original options */}
                                <div className="col-md-12">
                                  <label
                                    htmlFor="country"
                                    className="form-label"
                                  >
                                    Country{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    className={`form-select ${
                                      errors.country ? "is-invalid" : ""
                                    }`}
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    required
                                  >
                                    <option value="">Country</option>
                                    <option value="Africa">Africa</option>
                                    <option value="North America">
                                      North America
                                    </option>
                                    <option value="South America">
                                      South America
                                    </option>
                                    <option value="Europe">
                                      Europe, United Kingdom & Australia
                                    </option>
                                    <option value="Asia">
                                      Asia, West Indies & Caribbean
                                    </option>
                                    <option value="Others">Others</option>
                                  </select>
                                  {errors.country && (
                                    <div className="invalid-feedback">
                                      {errors.country}
                                    </div>
                                  )}
                                </div>

                                <div className="col-md-12">
                                  <div className="form-check">
                                    <input
                                      className={`form-check-input ${
                                        errors.agreeTerms ? "is-invalid" : ""
                                      }`}
                                      type="checkbox"
                                      id="agreeTerms"
                                      name="agreeTerms"
                                      checked={formData.agreeTerms}
                                      onChange={handleInputChange}
                                      required
                                    />
                                    <label
                                      className="form-check-label ms-2 fs-6"
                                      htmlFor="agreeTerms"
                                    >
                                      By continuing, you agree to Black{" "}
                                      <a href="#">Terms of Use</a> Read our{" "}
                                      <a href="#">Privacy Policy</a>
                                    </label>
                                    {errors.agreeTerms && (
                                      <div className="invalid-feedback">
                                        {errors.agreeTerms}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="d-grid">
                                  <button
                                    className="btn btn-primary"
                                    type="submit"
                                  >
                                   Continue with stripe
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentForm;

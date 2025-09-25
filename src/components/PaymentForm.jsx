import React, { useState, useEffect, useRef } from "react";
import usePaymentStore from "../store/PaymentStore";
// Adjust the path below to where your zustand file actually lives

const PaymentForm = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    licence: "",
    company: "",
    country: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);

  // Zustand-controlled modal state & actions
  const showPaymentModal = usePaymentStore((s) => s.showPaymentModal);
  const closePaymentModal = usePaymentStore((s) => s.closePaymentModal);

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
    if (!formData.licence) newErrors.licence = "Please select job title.";
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

  // Close on Escape (uses store close action)
  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === "Escape" && showPaymentModal) closePaymentModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showPaymentModal, closePaymentModal]);

  // disable body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showPaymentModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPaymentModal]);

  const onBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closePaymentModal();
    }
  };

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        style={{ background: "rgba(0,0,0,0.6)" }}
        onMouseDown={onBackdropClick}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
          style={{ maxWidth: 680 }}
        >
          <div
            className="modal-content shadow-lg"
            ref={modalRef}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h5 className="modal-title">Join MicroAgentAI</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closePaymentModal}
              />
            </div>

            <div className="modal-body">
              {/* <p className="mb-3">
                Become part of the MicroAgentAI community. Sign up to explore
                our AI-powered tools, streamline your workflows, and unlock
                smarter automation for your business.
              </p> */}
              <form
                className="row g-3 needs-validation"
                noValidate
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8c000004uWvt"
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* keep hidden fields exactly */}
                <input type="hidden" name="oid" value="00D8c000004uWvt" />
                <input
                  type="hidden"
                  name="retURL"
                  value="https://microagent.services"
                />

                <div className="form-control">
                  <strong>Selected Plan:</strong> {selectedPlan?.name} –{" "}
                  {selectedPlan?.priceLabel} {selectedPlan?.period}
                </div>

                {/* 2-column layout: first + last */}
                <div className="col-md-6">
                  <label htmlFor="first_name" className="form-label">
                    First Name <span className="text-danger">*</span>
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
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="last_name" className="form-label">
                    Last Name <span className="text-danger">*</span>
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
                    <div className="invalid-feedback">{errors.lastName}</div>
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
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="mobile" className="form-label">
                    Phone Number <span className="text-danger">*</span>
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
                    <div className="invalid-feedback">{errors.mobile}</div>
                  )}
                </div>

                {/* 2-column layout: jobTitle + company */}
                {/* <div className="col-md-6">
                  <label htmlFor="jobTitle" className="form-label">
                    Job Title <span className="text-danger">*</span>
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
                      CEO / President / Decision Maker / Small Business Owner
                    </option>
                    <option value="2">
                      Software Developer / Technical or Solution Architect
                    </option>
                    <option value="3">
                      Sales Agent / Prospective Partner / Affiliate Marketer
                    </option>
                    <option value="4">Potential Customer / User</option>
                    <option value="5">Others not stated</option>
                  </select>
                  {errors.jobTitle && (
                    <div className="invalid-feedback">{errors.jobTitle}</div>
                  )}
                </div> */}
                <div className="col-md-6">
                  <label htmlFor="mobile" className="form-label">
                    Number of Licenses<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.licence ? "is-invalid" : ""
                    }`}
                    id="licence"
                    name="licence"
                    maxLength="40"
                    value={formData.licence}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.licence && (
                    <div className="invalid-feedback">{errors.licence}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="company" className="form-label">
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
                  <label htmlFor="country" className="form-label">
                    Country <span className="text-danger">*</span>
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
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Europe">
                      Europe, United Kingdom & Australia
                    </option>
                    <option value="Asia">Asia, West Indies & Caribbean</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.country && (
                    <div className="invalid-feedback">{errors.country}</div>
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
                  <button className="btn btn-primary" type="submit">
                    Continue with stripe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;

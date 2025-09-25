import React, { useState, useEffect, useRef } from "react";
import usePaymentStore from "../store/PaymentStore";

const PaymentForm = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    licence: "1", // default value is 1
    country: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);

  const showPaymentModal = usePaymentStore((s) => s.showPaymentModal);
  const closePaymentModal = usePaymentStore((s) => s.closePaymentModal);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

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
    if (!formData.licence)
      newErrors.licence = "Please select number of licenses.";
    if (!formData.country) newErrors.country = "Please select country.";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree before submitting.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      e.target.submit();
    }
  };

  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === "Escape" && showPaymentModal) closePaymentModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showPaymentModal, closePaymentModal]);

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
        style={{ maxWidth: 500 }}
      >
        <div
          className="modal-content shadow-lg p-3"
          ref={modalRef}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2 className="modal-title w-full text-center">Join MicroAgent</h2>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closePaymentModal}
            />
          </div>

          <div className="modal-body">
            <form
              className="row g-3 needs-validation"
              noValidate
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8c000004uWvt"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="oid" value="00D8c000004uWvt" />
              <input
                type="hidden"
                name="retURL"
                value="https://microagent.services"
                          />
                          <div className="col-12">
                              

              <div className="form-control">
                <strong>Selected Plan:</strong> {selectedPlan?.name} –{" "}
                {selectedPlan?.priceLabel} {selectedPlan?.period}
              </div>
                          </div>

              {/* Number of Licenses dropdown */}
              <div className="col-12">
                <label htmlFor="licence" className="form-label">
                  Number of Licenses <span className="text-danger">*</span>
                </label>
                <select
                  className={`form-select ${
                    errors.licence ? "is-invalid" : ""
                  }`}
                  id="licence"
                  name="licence"
                  value={formData.licence}
                  onChange={handleInputChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6,7,8,9,10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                {errors.licence && (
                  <div className="invalid-feedback">{errors.licence}</div>
                )}
              </div>

              {/* First Name */}
              <div className="col-12">
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
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              {/* Last Name */}
              <div className="col-12">
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
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>

              {/* Email */}
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Phone */}
              <div className="col-12">
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
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
                {errors.mobile && (
                  <div className="invalid-feedback">{errors.mobile}</div>
                )}
              </div>

              {/* Country */}
              {/* <div className="col-12">
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
              </div> */}

              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Continue with Stripe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

import React, { useState, useEffect, useRef } from "react";
import usePaymentStore from "../store/PaymentStore";
import { notifyError } from "../utils/Toastify";

const PaymentForm = ({ selectedPlan, currency }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    noOfUsers: 1,
    currency: currency || "USD",
    subscription: selectedPlan ? selectedPlan.key : "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  const showPaymentModal = usePaymentStore((s) => s.showPaymentModal);
  const closePaymentModal = usePaymentStore((s) => s.closePaymentModal);
  const openPaymentSuccess = usePaymentStore((s) => s.openPaymentSuccess);
  const closePaymentSuccess = usePaymentStore((s) => s.closePaymentSuccess);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "noOfUsers" ? Number(value) : value,
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
    if (!formData.phone.trim()) newErrors.phone = "Please enter phone.";
    if (!formData.noOfUsers)
      newErrors.noOfUsers = "Please select number of licenses.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/stripe-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to start checkout");
      }

      const data = await res.json();
      openPaymentSuccess();
      closePaymentModal()

      // if (data?.url) {
      //   // Redirect user to Stripe Checkout
      //   window.location.href = data.url;
      // } else {
      //   notifyError("Something went wrong. Please try again.");
      // }
    } catch (err) {
      console.error("Checkout error:", err);
      notifyError("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
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
              onSubmit={handleSubmit}
            >
              <div className="col-12">
                <div className="form-control">
                  <strong>Selected Plan:</strong> {selectedPlan?.name} –{" "}
                  {selectedPlan?.priceLabel} {selectedPlan?.period}
                </div>
              </div>

              {/* Number of Licenses */}
              <div className="col-12">
                <label htmlFor="noOfUsers" className="form-label">
                  Number of Licenses <span className="text-danger">*</span>
                </label>
                <select
                  className={`form-select ${
                    errors.noOfUsers ? "is-invalid" : ""
                  }`}
                  id="noOfUsers"
                  name="noOfUsers"
                  value={formData.noOfUsers}
                  onChange={handleInputChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                {errors.noOfUsers && (
                  <div className="invalid-feedback">{errors.noOfUsers}</div>
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
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  className={`form-control ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <div className="d-grid">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Continue with Stripe"}
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

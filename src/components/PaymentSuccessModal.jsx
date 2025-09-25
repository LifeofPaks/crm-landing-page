import React, { useState, useEffect, useRef } from "react";
import usePaymentStore from "../store/PaymentStore";

const SuccessIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-success mx-auto mb-3"
  >
    <circle cx="12" cy="12" r="10" stroke="green" />
    <path d="M9 12l2 2 4-4" stroke="green" />
  </svg>
);

const PaymentSuccessModal = () => {
  const modalRef = useRef(null);
  const redirectUrl = usePaymentStore((s) => s.redirectUrl);


  const paymentSuccess = usePaymentStore((s) => s.paymentSuccess);
  const closePaymentSuccess = usePaymentStore((s) => s.closePaymentSuccess);

  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === "Escape" && paymentSuccess) closePaymentSuccess();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [paymentSuccess, closePaymentSuccess]);

  useEffect(() => {
    document.body.style.overflow = paymentSuccess ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [paymentSuccess]);

  const onBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closePaymentSuccess();
    }
  };

  if (!paymentSuccess) return null;

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
          className="modal-content shadow-lg p-4 text-center"
          ref={modalRef}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closePaymentSuccess}
            />
          </div>

          <div className="modal-body">
            <SuccessIcon />
            <h4 className="mb-2 ">Payment Successful!</h4>
            <p className="text-muted">
              We're redirecting you to single login to complete your onboarding.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;

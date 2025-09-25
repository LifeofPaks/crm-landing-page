import { useEffect, useState } from "react";
import usePaymentStore from "../store/PaymentStore";
import PaymentForm from "./PaymentForm";

// --- Currency symbol ---
const getSymbol = (currency) => {
  switch (currency) {
    case "USD":
      return "$";
    case "NGN":
      return "₦";
    case "CAD":
      return "C$";
    default:
      return "$";
  }
};

// --- Icons ---
const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#4997e58d)">
      <path
        d="M5.83333 9.99992L9.99999 14.1666L18.3333 5.83325"
        stroke="#6FDB93"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M1.66667 9.99992L5.83334 14.1666M10 9.99992L14.1667 5.83325"
        stroke="#6FDB93"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath>
        <rect width="20" height="20" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

const CrossIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#4997e58d)">
      <path
        d="M5 5L15 15"
        stroke="#FF4444"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15 5L5 15"
        stroke="#FF4444"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="4997e58d">
        <rect width="20" height="20" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

// --- PricingCard ---
const PricingCard = ({ plan, isPopular, cueDirection, openPaymentModal }) => (
  <div className="col-xl-4 col-md-6 col-12" data-cue={cueDirection}>
    <div
      className={`card ${
        isPopular
          ? "position-relative bg-gray-950 border-gradient-mix-color"
          : "bg-gray-950"
      }`}
    >
      <div
        className={`card-body d-flex flex-column gap-6 p-5 ${
          isPopular ? "z-2" : ""
        }`}
      >
        <div className="d-flex flex-column gap-3">
          {isPopular && (
            <div className="position-absolute top-0 end-0 translate-middle">
              <span className="badge bg-primary rounded-pill fw-medium border border-dark border-2">
                Most Popular
              </span>
            </div>
          )}
          <div className="d-flex flex-column gap-1">
            <h3 className="mb-0">{plan.name}</h3>
            <p className="mb-0">{plan.description}</p>
          </div>
          <div className="d-flex flex-row align-items-center gap-2">
            <h3 className="fs-1 fw-bold mb-0">{plan.priceLabel}</h3>
            <span>{plan.period}</span>
          </div>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className="d-flex flex-row gap-2 align-items-center"
              >
                {feature.included ? <CheckIcon /> : <CrossIcon />}
                <span>{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={() => openPaymentModal(plan)}>
          <a className="btn btn-primary">Start Free Trial</a>
        </div>
      </div>
    </div>
  </div>
);

// --- Section ---
const PricingSection = () => {
  const showPaymentModal = usePaymentStore((s) => s.showPaymentModal);
  const openPaymentModal = usePaymentStore((s) => s.openPaymentModal);
  const selectedPlan = usePaymentStore((s) => s.selectedPlan);

  const [currency, setCurrency] = useState("USD");

  // --- Mock API response for prices ---
  const prices = {
    starter: {
      usd: 10,
      cad: 13.77,
      ngn: 15560, // fixed your sample (comma was typo)
    },
    standard: {
      usd: 20,
      cad: 27.54,
      ngn: 31120,
    },
    enterprise: {
      usd: null, // custom pricing
      cad: null,
      ngn: null,
    },
  };

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.country_code === "NG") {
          setCurrency("NGN");
        } else if (data.country_code === "CA") {
          setCurrency("CAD");
        } else {
          setCurrency("USD");
        }
      } catch (err) {
        console.error("Location detection failed, defaulting to USD");
        setCurrency("USD");
      }
    };
    detectLocation();
  }, []);

  const plans = [
    {
      key: "starter",
      name: "Starter",
      description: "Basic access to essential AI tools",
      period: "per month",
      features: [
        { name: "MicroAgent CRM", included: true },
        { name: "MicroAgent Chat Bot", included: true },
        { name: "MicroAgent Voice Facilitator", included: false },
        { name: "Bespoke Agentic Actions", included: true },
        { name: "Limited Tokens for Agentic Actions", included: true },
        { name: "AI Only Support Agents", included: true },
        { name: "Custom Agent Actions & Integration", included: false },
        { name: "Custom Domain & LLM Hosting", included: false },
        { name: "Multitenancy & Whitelabel Solutions", included: false },
      ],
    },
    {
      key: "standard",
      name: "Standard",
      description: "Advanced features for growing business",
      period: "per month",
      features: [
        { name: "MicroAgent CRM", included: true },
        { name: "MicroAgent Chat Bot", included: true },
        { name: "MicroAgent Voice Facilitator", included: true },
        { name: "Bespoke Agentic Actions", included: true },
        { name: "10x more tokens than starter", included: true },
        { name: "AI + Dedicated Human Support", included: true },
        { name: "Custom Agent Actions & Integration", included: false },
        { name: "Custom Domain & LLM Hosting", included: false },
        { name: "Multitenancy & Whitelabel Solutions", included: false },
      ],
    },
    {
      key: "enterprise",
      name: "Enterprise",
      description: "Custom solutions for established businesses",
      period: "pricing",
      features: [
        { name: "MicroAgent CRM", included: true },
        { name: "MicroAgent Chat Bot", included: true },
        { name: "MicroAgent Voice Facilitator", included: true },
        { name: "Bespoke Agentic Actions", included: true },
        { name: "20x more tokens than starter", included: true },
        { name: "AI + Dedicated Human Support", included: true },
        { name: "Custom Agent Actions & Integration", included: true },
        { name: "Custom Domain & LLM Hosting", included: true },
        { name: "Multitenancy & Whitelabel Solutions", included: true },
      ],
    },
  ];

  // Attach pricing to plans
  const enrichedPlans = plans.map((p) => {
    const priceData = prices[p.key];
    let priceLabel = "Custom";

    if (priceData && priceData[currency.toLowerCase()]) {
      priceLabel = `${getSymbol(currency)}${priceData[
        currency.toLowerCase()
      ].toLocaleString()}/user`;
    }

    return {
      ...p,
      priceLabel,
      currency,
    };
  });

  return (
    <>
      <section id="pricing" className="py-xl-9 py-lg-7 py-5" data-cue="fadeIn">
        <div className="container pb-xl-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-xl-7 mb-5 d-flex flex-column gap-2">
                <h2 className="mb-0">
                  <span className="gradient-text">Pricing Plans</span>
                </h2>
                <p className="mb-0 lead">
                  Choose the perfect plan for your needs
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-5 gy-xl-0">
            {enrichedPlans.map((plan, i) => (
              <PricingCard
                key={i}
                plan={plan}
                isPopular={i === 1}
                cueDirection={
                  i === 0 ? "slideInLeft" : i === 1 ? "zoomOut" : "slideInRight"
                }
                openPaymentModal={(plan) =>
                  openPaymentModal({ ...plan, currency })
                }
              />
            ))}
          </div>
        </div>
      </section>
      {showPaymentModal && <PaymentForm selectedPlan={selectedPlan} />}
    </>
  );
};

export default PricingSection;

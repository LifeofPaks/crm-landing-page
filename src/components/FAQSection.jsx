

import { useRef, useEffect, useState } from "react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border mb-2 rounded-3 p-3">
      <h2 className="h5 mb-0">
        <a
          href="#"
          className="text-reset d-flex justify-content-between align-items-center"
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
          aria-expanded={isOpen}
        >
          {question}
          <span className="chevron-arrow">
            <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`}></i>
          </span>
        </a>
      </h2>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="mt-3">{answer}</div>
      </div>
    </div>
  );
};



const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      question: "What are MicroAgents?",
      answer:
        "MicroAgents are revolutionary AI-driven micro-applications designed to automate specific business functions. Each MicroAgent is a specialized powerhouse that handles distinct tasks - from managing customer relationships to streamlining case resolution - all working together in harmony to transform your business operations.",
    },
    {
      question:
        "How does MicroAgents differ from traditional automation tools?",
      answer:
        "Unlike traditional automation tools, MicroAgents combines intelligent AI capabilities with a unified ecosystem approach. Our platform doesn't just automate tasks; it injects AI intelligence to optimize your entire business operations, providing AI capabilities while reducing costs and boosting productivity by up to 10X.",
    },
    {
      question: "What is the Single Login System?",
      answer:
        "At the core of MicroAgents lies our secure, unified login system. This isn't just a login portal - it's your central command center. Through this single access point, you can manage all your intelligent agents, control permissions, and gain a holistic view of your automated operations from one intuitive dashboard.",
    },
    {
      question: "Is MicroAgents available 24/7?",
      answer:
        "Yes! Your business doesn't sleep, and neither do we. MicroAgents operate round-the-clock, ensuring your automated processes never miss a beat and your customers receive support whenever they need it.",
    },
    {
      question: "How secure is the MicroAgents platform?",
      answer:
        "Security is paramount at MicroAgents. We leverage robust Profile and Role-based Access Control (RBAC) to ensure that every user has precisely the right level of access to applications and sensitive data. Our platform uses enterprise-grade encryption and security protocols to protect your business data.",
    },
    {
      question: "What is Profile-Based Access Control?",
      answer:
        "Profile-Based Access Control allows you to define custom roles for your teams and assign specific profiles to users. This granular control system ensures that your data remains secure while your agents operate with optimal efficiency, empowering your business without compromising integrity.",
    },
    {
      question: "Can I control which team members access specific MicroAgents?",
      answer:
        "Absolutely. You can create custom permission levels, assign specific profiles to different team members, and ensure that sensitive data and critical functions are only accessible to authorized personnel.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="pattern-square"></div>

      <section
        className="py-xl-9 pb-md-8 pt-lg-8 pb-lg-10 py-5"
        //   data-cue="fadeIn"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-12"
              //   data-cue="zoomIn"
            >
              <div className="mb-7 mb-md-0 me-lg-7 text-md-center text-lg-start">
                <div className="mb-4">
                  <h2 className="mb-3">
                    <span className="gradient-text">
                      Frequently asked questions
                    </span>
                  </h2>
                  <p className="mb-0 lead">
                    Can't find any answer for your question?
                    <br />
                    Ask our{" "}
                    <a href="./contact-1.html" className="text-primary">
                      customer support
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-12"
              //   data-cue="zoomIn"
            >
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;

import { useEffect } from "react";

const ProductCard = ({ icon, title, description, delay }) => (
  
  <div
    className="col-lg-4 col-md-6 col-12"
    data-cue="fadeIn"
    data-cue-delay={delay}
  >
    <a href="#!">
      <div className="card border-gradient bg-transparent">
        <div className="card-body d-flex flex-column gap-6 p-5">
          <div className={`${icon} icon-shape icon-xl rounded-3`}>
            {icon === "bg-pink-gradient" && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#9ed2b4d4)">
                  <path
                    d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 21V17C14 16.4696 14.2107 15.9609 14.5858 15.5858C14.9609 15.2107 15.4696 15 16 15C16.5304 15 17.0391 15.2107 17.4142 15.5858C17.7893 15.9609 18 16.4696 18 17V21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 19H18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 15V21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath>
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            {icon === "bg-info-gradient" && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#6e6bd9ef)">
                  <path
                    d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V11.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 13H15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 17H12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 22.5C19.2053 21.6513 19.6406 20.8755 20.2581 20.2581C20.8755 19.6406 21.6513 19.2053 22.5 19C21.6513 18.7947 20.8755 18.3594 20.2581 17.7419C19.6406 17.1245 19.2053 16.3487 19 15.5C18.7947 16.3487 18.3594 17.1245 17.7419 17.7419C17.1245 18.3594 16.3487 18.7947 15.5 19C16.3487 19.2053 17.1245 19.6406 17.7419 20.2581C18.3594 20.8755 18.7947 21.6513 19 22.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath>
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            {icon === "bg-success-gradient" && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#71372fdc)">
                  <path
                    d="M6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 16C10 16.667 11 17 12 17C13 17 14 16.667 15 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 7L8 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 7L16 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12V11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 12V11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath>
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          <div className="d-flex flex-column gap-2">
            <h3 className="mb-0 fs-4">{title}</h3>
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
);

const ProductsSection = () => {
  useEffect(() => {
    scrollCue.init({
      duration: 700, // ms
      interval: 800, // stagger children
      percentage: 0.85, // trigger when element is 85% visible
    });
  }, []);

  const products = [
    {
      icon: "bg-pink-gradient",
      title: "MicroAgent CRM",
      status: "(Available Now)",
      description:
        "Turn clicks into customers with automated lead tracking and AI-powered follow-ups. Perfect for growing businesses who want more sales without more admin.",
      delay: "0",
    },
    {
      icon: "bg-info-gradient",
      title: "Voice Facilitator",
      status: "(Coming Soon)",
      description:
        "Transform every call into opportunity with AI voice assistants that understand context. Perfect for businesses ready to scale support without scaling headcount.",
      delay: "200",
    },
    {
      icon: "bg-success-gradient",
      title: "MicroAgent Chatbot",
      status: "(Coming Soon)",
      description:
        "Deploy intelligent chat assistants in seconds that learn your business instantly. The smartest way to deliver 24/7 support that customers actually love.",
      delay: "400",
    },
    {
      icon: "bg-pink-gradient",
      title: "MicroAgent LMS",
      status: "(Coming Soon)",
      description:
        "Create personalized learning that adapts to each student's pace and style. Education technology that makes teaching impactful and learning more engaging.",
      delay: "600",
    },
    {
      icon: "bg-info-gradient",
      title: "Performance Tracker",
      status: "(Coming Soon)",
      description:
        "Get real-time visibility into team productivity with AI-powered analytics and insights. The smarter way to build high-performing teams without micromanaging.",
      delay: "800",
    },
    {
      icon: "bg-success-gradient",
      title: "MicroAgent Quiz App",
      status: "(Coming Soon)",
      description:
        "Master any certification with AI practice questions that adapt to your knowledge gaps. Your personal AI tutor that guarantees you're ready for exam day.",
      delay: "1000",
    },
  ];

  return (
    <>
      <div className="pattern-square"></div>
      <section
        id="product"
        className="py-xl-9 pb-lg-9 pt-5 pb-6"
        data-cue="fadeIn"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-xl-7 mb-5 d-flex flex-column gap-2">
                <h2 className="mb-0">
                  <span className="gradient-text">Our Products</span>
                </h2>
                <p className="mb-0 lead">
                  Powerful AI tools to enhance your creativity and productivity
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 mb-5">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={`${product.title} `}
                description={product.description}
                delay={product.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;

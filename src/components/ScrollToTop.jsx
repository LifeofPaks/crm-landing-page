
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`btn-scroll-top ${isVisible ? "active-progress" : ""}`}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <svg
        className="progress-square svg-content"
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
      >
        <path
          d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z"
          fill="none"
          stroke="var(--bs-primary)"
          strokeWidth="2"
          style={{
            strokeDasharray: "150",
            strokeDashoffset: `${150 - (scrollProgress * 150) / 100}`,
            transition: "stroke-dashoffset 0.1s ease",
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;

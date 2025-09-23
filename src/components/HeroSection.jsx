

import { useEffect } from "react";
import HeroGlow from "../assets/images/ai-studio/ai-hero-glow.png";

const HeroSection = () => {
  useEffect(() => {
    // Star canvas animation
    const canvas = document.getElementById("starCanvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const stars = [];
      const numStars = 100;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          opacity: Math.random(),
          speed: Math.random() * 0.5,
        });
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();

          star.opacity += star.speed * (Math.random() > 0.5 ? 1 : -1);
          if (star.opacity <= 0 || star.opacity >= 1) {
            star.speed *= -1;
          }
        });

        requestAnimationFrame(animate);
      }

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section
      id=""
      className="particals py-md-10 py-5"
      style={{
        background: `url(${HeroGlow}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-cue="fadeIn"
    >
      <canvas id="starCanvas"></canvas>
      <div className="container py-xl-10">
        <div className="row py-xl-4">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
            <div
              className="text-center d-flex flex-column gap-6"
              data-cue="zoomIn"
            >
              <div className="d-flex flex-column gap-3">
                <h1 className="display-5 mb-0">
                  <span className="gradient-text">
                    AI tools that accelerate your business
                  </span>
                </h1>
                <p className="mb-0 lead px-xxl-8">
                  From customer growth, to hiring, our MicroAgent will take care
                  of the hard work so you can focus on running your business.
                </p>
              </div>
              <div className="d-flex flex-row gap-3 justify-content-center">
                <a href="#demo" className="btn btn-primary">
                  Request a Demo
                </a>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center gap-3 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

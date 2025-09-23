import { useEffect } from "react";
import heroGlow from "../assets/images/ai-studio/ai-hero-glow.png";

const HeroSection = () => {
  useEffect(() => {
    const i = document.getElementById("starCanvas");
    if (!i) return; // safety

    const h = i.getContext("2d");

    function resizeCanvas() {
      const section = document.querySelector("section.particals");
      if (section) {
        i.width = section.clientWidth;
        i.height = section.clientHeight;
      }
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * i.width;
        this.y = Math.random() * i.height;
        this.radius = 2 * Math.random();
        this.dy = 0.5 * Math.random() + 0.2;
      }
      draw() {
        h.beginPath();
        h.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        h.fillStyle = "white";
        h.fill();
      }
      update() {
        this.y += this.dy;
        if (this.y > i.height) {
          this.y = 0;
          this.x = Math.random() * i.width;
        }
        this.draw();
      }
    }

    let particles = [];
    for (let t = 0; t < 70; t++) {
      particles.push(new Particle());
    }

    function animate() {
      h.clearRect(0, 0, i.width, i.height);
      particles.forEach((p) => p.update());
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      className="particals py-md-10 py-5"
      style={{
        background: `url(${heroGlow}) no-repeat center/cover`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        id="starCanvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></canvas>
      <div
        className="container py-xl-10 position-relative"
        style={{ zIndex: 1 }}
      >
        <div className="row py-xl-4">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
            <div className="text-center d-flex flex-column gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

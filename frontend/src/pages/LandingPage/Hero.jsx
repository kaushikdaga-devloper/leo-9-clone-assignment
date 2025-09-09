import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center justify-content-center">

          {/* Left Side - 3D Bangle Animation */}
          <div className="col-lg-6 col-md-8 text-center mb-5 mb-lg-0">
            <div className="image-ring-wrapper mx-auto">
              <div className="image-ring">
                <img
                  src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=250&h=250&q=80"
                  alt="A modern laptop on a white desk"
                />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Team collaborating around a laptop"
                />
                <img
                  src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Laptop showing code with a colorful background"
                />
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=250&h=250&q=80"
                  alt="People working in a modern office"
                />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Desk setup with multiple monitors showing code"
                />
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Woman typing on a laptop in a cafe"
                />
              </div>
            </div>
            <div className="row align-items-center justify-content-center mt-5">
                <p>Your trusted UI UX design agency.</p>
            </div>
          </div>

          {/* Right Side - Text + Buttons */}
          <div className="col-lg-6 col-md-10 text-center text-lg-start">
            <h1 className="hero-title">We Design. We Build. We Innovate.</h1>
            <p className="hero-subtext">
              Creating digital experiences that leave a lasting impact.
            </p>
            <div className="mt-4">
              <button className="btn btn-primary me-3">Get Started</button>
              <button className="btn btn-outline-secondary">Learn More</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
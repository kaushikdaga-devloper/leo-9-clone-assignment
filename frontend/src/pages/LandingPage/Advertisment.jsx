import React from "react";
import "./Advertisement.css";

 function Advertisement() {
  return (
    <section className="advertisement-section">
      <div className="container">
        <h2 className="section-title">Our Latest Campaigns</h2>
        <p className="section-description">
          Explore innovative solutions and creative concepts designed to elevate brands.
        </p>

        <div className="card-grid">
          {/* Advertisement Card 1 */}
          <div className="advertisement-card">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&h=400&q=80"
              alt="Creative team working on a project"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">Digital Marketing Strategy</h3>
              <p className="card-text">
                Developing data-driven strategies to reach your target audience and maximize ROI.
              </p>
              <a href="#" className="card-link">Learn More &rarr;</a>
            </div>
          </div>

          {/* Advertisement Card 2 */}
          <div className="advertisement-card">
            <img
              src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=600&h=400&q=80"
              alt="Person using a laptop with charts"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">UI/UX Revamp Project</h3>
              <p className="card-text">
                Transforming user experiences with modern, intuitive, and engaging interface designs.
              </p>
              <a href="#" className="card-link">Discover Insights &rarr;</a>
            </div>
          </div>

          {/* Advertisement Card 3 */}
          <div className="advertisement-card">
            <img
    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400&q=80"
    alt="Team collaborating around a table with laptops and notes"
    className="card-image"
/>
            <div className="card-content">
              <h3 className="card-title">Innovative Product Launch</h3>
              <p className="card-text">
                Crafting compelling narratives and visuals for successful product introductions.
              </p>
              <a href="#" className="card-link">View Case Study &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Advertisement;
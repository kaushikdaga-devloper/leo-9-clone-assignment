import React from "react";
import "./Founder.css";

function FounderSection() {
  return (
    <section className="founder-section">
      <div className="container">
        <p className="section-subtitle">MEET THE MAKERS</p>
        <h2 className="section-title">A team of brave, curious, and smart people.</h2>
        <div className="founder-grid">
          {/* Founder Card 1: Leo */}
          <div className="founder-card">
            <img
  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80"
  alt="Leo, Founder & CEO"
  className="founder-image"
/>
            <h3 className="founder-name">Leo</h3>
            <p className="founder-title">Founder & CEO</p>
            <div className="founder-socials">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="#" aria-label="Dribbble">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM8.23 6.41c.026.047.05.096.074.144 1.48 2.813 3.14 5.834 3.585 6.585-1.92-.01-3.83-.01-5.74 0-1.33.25-2.06 1.63-1.63 2.92.51 1.52 2.18 2.59 3.79 2.59h3.29c-.31.62-.64 1.22-.98 1.8-1.06 1.77-2.31 3.29-4.32 4.1-1.35.54-1.73 2.29-.8 3.22.95.93 2.65.68 3.59-.44 2.25-2.67 3.82-5.74 4.88-8.91.07-.21.13-.41.19-.62.37-1.25.75-2.5 1.13-3.75 1.14-.07 2.28-.13 3.42-.18.72-.03 1.4-.29 1.95-.78.93-.82.93-2.18 0-3-.55-.49-1.23-.74-1.95-.71-1.29.06-2.58.12-3.87.18-.08-.24-.16-.48-.25-.71-.78-2.14-1.93-4.11-3.56-5.83-1.07-1.13-2.8-1.13-3.87 0-.44.44-.72 1.05-.72 1.69zm6.75 5.56c-.09.28-.19.55-.29.82-.67 1.85-1.35 3.69-2.02 5.54.49 0 .97.01 1.46 0 1.69-.07 3.01-1.52 2.87-3.23-.13-1.62-1.5-2.84-3.15-2.84h-1.01c.71-1.29 1.42-2.58 2.14-3.87.27-.47.53-.94.8-1.41-1.12.06-2.24.12-3.36.18-.32.96-.64 1.92-.96 2.88.11 0 .22.01.32.01h2.99z"></path></svg>
              </a>
            </div>
          </div>

          {/* Founder Card 2: Princy */}
          <div className="founder-card">
          <img
  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80"
  alt="Princy, Co-founder & COO"
  className="founder-image"
/>
            <h3 className="founder-name">Princy</h3>
            <p className="founder-title">Co-founder & COO</p>
             <div className="founder-socials">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>

          {/* Founder Card 3: Dhoni */}
          <div className="founder-card">
           <img
  src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto.format&fit=crop&w=400&h=400&q=80"
  alt="Dhoni, The Finisher"
  className="founder-image"
/>
            <h3 className="founder-name">Dhoni</h3>
            <p className="founder-title">The Finisher</p>
             <div className="founder-socials">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
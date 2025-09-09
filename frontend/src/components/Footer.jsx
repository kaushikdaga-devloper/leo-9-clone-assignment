
import "./Footer.css";

// This is the Footer component you can integrate into your project.
function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Call-to-Action Section */}
      <div className="footer-cta">
        <div className="container">
          <h2>Let's build something beautiful together.</h2>
          <p>Have a project in mind? We'd love to hear about it.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: About */}
            <div className="footer-column">
              <a href="#home" className="footer-logo">Leo9Studio</a>
              <p className="footer-about-text">
                A creative studio crafting digital experiences that blend design and technology to inspire.
              </p>
            </div>

            {/* Column 2: Explore Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">App Development</a></li>
                <li><a href="#">Branding & Identity</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Digital Marketing</a></li>
              </ul>
            </div>

            {/* Column 4: Social Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-social-links">
                <a href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" aria-label="Instagram">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                 <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-bottom-text">© {new Date().getFullYear()} Leo9Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

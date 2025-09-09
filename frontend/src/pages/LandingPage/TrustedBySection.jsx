import React from "react";
import "./TrustedBySection.css";

export default function TrustedBySection() {
    return (
        <section className="trusted-by-section">
            <div className="container">
                <h2 className="section-title">Trusted by the world's best</h2>
                <div className="logo-grid">
                    <div className="logo-item" title="Company One">
                        <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fontWeight="bold">COMPANY</text></svg>
                    </div>
                    <div className="logo-item" title="Brand Two">
                        <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" fontFamily="Georgia, serif" fontSize="16" textAnchor="middle" fontStyle="italic">Brand</text></svg>
                    </div>
                    <div className="logo-item" title="Service Three">
                         <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" fontFamily="Courier New, monospace" fontSize="14" textAnchor="middle" fontWeight="600">SERVICE</text></svg>
                    </div>
                    <div className="logo-item" title="Studio Four">
                        <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" fontFamily="Verdana, sans-serif" fontSize="15" textAnchor="middle">Studio</text></svg>
                    </div>
                    <div className="logo-item" title="Agency Five">
                        <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" fontFamily="Arial Black, sans-serif" fontSize="16" textAnchor="middle">AGENCY</text></svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
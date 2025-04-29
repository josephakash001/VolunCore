// Footer.jsx
import React from "react";
import '/custom.scss';

export default function Footer() {
  return (
    <footer className="py-0 bg-secondary">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-4 text-white text-nowrap">
          © 2025 VolunCore. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white fs-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white fs-4">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white fs-4">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <div className="d-flex gap-3 mb-4">
          <a href="/terms" className="text-white text-decoration-none">Terms</a>
          <a href="/privacy" className="text-white text-decoration-none">Privacy</a>
          <a href="/contact" className="text-white text-decoration-none">Contact</a>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";
import cv from "./assets/Abdullah_Musharraf.pdf";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  // Scroll karne par active link khud badal jaye
  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = links.find(({ href }) => href === `#${entry.target.id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={() => setActive("Home")}>
          <img className="nav__logo" src={logo} alt="AM logo" />
          <span className="nav__title">
            <strong>Abdullah Musharraf</strong>
            <small>Web Developer</small>
          </span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={active === label ? "is-active" : ""}
              aria-current={active === label ? "page" : undefined}
              onClick={() => {
                setActive(label);
                setOpen(false);
              }}
            >
              {label}
            </a>
          ))}
          <a
            className="nav__cv nav__cv--mobile"
            href={cv}
            download="Abdullah_Musharraf_CV.pdf"
          >
            Download CV
          </a>
        </nav>

        <a
          className="nav__cv nav__cv--desktop"
          href={cv}
          download="Abdullah_Musharraf_CV.pdf"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12" />
            <path d="M7 11l5 5 5-5" />
            <path d="M5 20h14" />
          </svg>
          Download CV
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

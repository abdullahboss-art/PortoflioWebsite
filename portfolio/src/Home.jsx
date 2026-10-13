import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import logo from "./assets/logo.png";
import profile from "./assets/Hero.png";
import aboutLaptop from "./assets/About.jpg";
import cv from "./assets/Abdullah_Musharraf.pdf";
import quickbite from "./assets/quickbite.jpg";
import hotel from "./assets/HotelManagement.jpg";
import alrman from "./assets/Alrman-Advertising.png";

import html from "./assets/Html.png";
import css from "./assets/css.png";
import js from "./assets/javascript.png";
import react from "./assets/react.png";
import next from "./assets/nextjs.png";
import tailwind from "./assets/tailwind.png";
import node from "./assets/nodejs.png";
import mongo from "./assets/mongodb.png";
import express from "./assets/express.png";
import firebase from "./assets/firebase.png";
import python from "./assets/python.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import hotelVideo from "./assets/Demo Video.mp4";
import Alrman from "./assets/AlrmanAdvertising.mp4";
import OnlineFoodApp from "./assets/OnlineFood.mp4";
import Sustinability from "./assets/Sustinablity.mp4";

const IMAGES = {
  logo,
  profile,
  about: aboutLaptop,
  projects: {
    quickbite,
    hotel,
    alrman: alrman,
    sustimability: Sustinability,
  },
  skills: { html, css, js, react, next, tailwind, node, mongo, express, firebase, python, git, github },
};

/* ================= CONFIG ================= */
const EMAIL = "abdullahmusharraf576@gmail.com";
const WEBSITE = "https://alrmanadvertising.com";
const APP_SITE = "https://alrmanapp.netlify.app/";

// Footer me logo ke neeche dikhne wale website links
const SITES = [
  { label: "alrmanadvertising.com", url: WEBSITE },
  { label: "alrmanapp.netlify.app", url: APP_SITE },
];

const VIDEOS = {
  quickbite: OnlineFoodApp,
  hotel: hotelVideo,
  alrman: Alrman,
  sustimability: Sustinability,
};

// Social links — apne asli links yahan daalo
const LINKS = {
  linkedin: "https://linkedin.com/in/abdullah-musharraf-4a0454326/",
  github: "https://github.com/abdullahboss-art",
  x: "", // X (Twitter) ka link mil jaye to yahan daalo, khali hoga to icon hide ho jayega
};

// Contact form ko email bananay ke liye:
// 1) https://formspree.io par free form banao
// 2) Wahan se mila endpoint yahan paste karo, e.g. "https://formspree.io/f/xxxxxxx"
// Agar khali chhoda to form mail app (mailto) khol dega.
const FORM_ENDPOINT = "";

/* ================= DATA ================= */
const NAV = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "HTML", imgs: [IMAGES.skills.html] },
  { name: "CSS", imgs: [IMAGES.skills.css] },
  { name: "JavaScript", imgs: [IMAGES.skills.js] },
  { name: "React", imgs: [IMAGES.skills.react] },
  { name: "Next.js", imgs: [IMAGES.skills.next] },
  { name: "Tailwind CSS", imgs: [IMAGES.skills.tailwind] },
  { name: "Node.js", imgs: [IMAGES.skills.node] },
  { name: "MongoDB", imgs: [IMAGES.skills.mongo] },
  { name: "Express.js", imgs: [IMAGES.skills.express] },
  { name: "Firebase", imgs: [IMAGES.skills.firebase] },
  { name: "Python", imgs: [IMAGES.skills.python] },
  { name: "Git & GitHub", imgs: [IMAGES.skills.git, IMAGES.skills.github] },
];

const PROJECTS = [
  {
    title: "QuickBite – Food Delivery App",
    img: IMAGES.projects.quickbite,
    tags: ["Flutter", "Firebase", "AI Chatbot"],
    desc: "A complete food delivery app with AI chatbot, Firebase integration, voice support and modern UI.",
    live: "https://foodfleet-app.netlify.app/",
    video: VIDEOS.quickbite,
  },
  {
    title: "Hotel Management System",
    img: IMAGES.projects.hotel,
    tags: ["React", "Node.js", "MongoDB", "Vercel"],
    desc: "A complete hotel management system with booking, rooms, guests, payments and admin panel.",
    live: "https://hotelmanagment-website.netlify.app/",
    video: VIDEOS.hotel,
  },
  {
    title: "Alrman Advertising",
    img: IMAGES.projects.alrman,
    tags: ["Flutter", "Firebase", "JSON"],
    desc: "Official website and app for Alrman Advertising with services, portfolio and contact features.",
    live: "https://alrmanapp.netlify.app",
    video: VIDEOS.alrman,
  },
  {
    title: "Sustimability – Environmental Awareness App",
    img: IMAGES.projects.sustimability,
    tags: ["Flutter", "Firebase", "JSON"],
    desc: "An app to raise awareness about environmental issues and promote sustainable practices.",
    // live: WEBSITE,
    video: VIDEOS.sustimability,
  },
];

const WHY = [
  { icon: "code", title: "Clean & Maintainable Code", text: "Well-structured and scalable solutions." },
  { icon: "devices", title: "Responsive Design", text: "Works perfectly on all devices." },
  { icon: "clock", title: "On-time Delivery", text: "Committed to deadlines and quality." },
  { icon: "cap", title: "Always Learning", text: "Exploring new technologies every day." },
];

/* ================= ICONS ================= */
const PATHS = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z" fill="currentColor" stroke="none" />
  ),
  github: (
    <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" fill="currentColor" stroke="none" />
  ),
  x: <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" fill="currentColor" stroke="none" />,
  download: <><path d="M12 3v12" /><path d="M7 11l5 5 5-5" /><path d="M5 20h14" /></>,
  arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
  external: <><path d="M7 17L17 7" /><path d="M8 7h9v9" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" /><path d="M12 12v2" /></>,
  code: <><path d="M8 8l-4 4 4 4" /><path d="M16 8l4 4-4 4" /><path d="M13.5 6l-3 12" /></>,
  devices: <><rect x="3" y="4" width="13" height="16" rx="2" /><rect x="12" y="10" width="9" height="10" rx="2" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  cap: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></>,
  tag: <><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.2" /></>,
  message: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" /></>,
  send: <><path d="M21 3L10 14" /><path d="M21 3l-7 18-4-7-7-4z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>,
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
  up: <><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></>,
  check: <path d="M5 13l4 4L19 7" />,
  alert: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6" /><path d="M12 16.5v.5" /></>,
};

const Icon = ({ name, size = 18, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {PATHS[name]}
  </svg>
);

const Logo = () => (
  <a href="#home" className="am-logo">
    <img
      src={IMAGES.logo}
      alt="AM"
      className="am-logo-img"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
    <span className="am-logo-text">
      <strong>Portofolio Website</strong>
      <small>Web & Application  Developer</small>
    </span>
  </a>
);

const d = (ms) => ({ "--d": `${ms}ms` });

const SectionLabel = ({ children }) => <span className="am-label">{children}</span>;

const Socials = ({ size = 24, xSize = 22 }) => (
  <>
    {LINKS.linkedin && (
      <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Icon name="linkedin" size={size} />
      </a>
    )}
    {LINKS.github && (
      <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <Icon name="github" size={size} />
      </a>
    )}
    {LINKS.x && (
      <a href={LINKS.x} target="_blank" rel="noreferrer" aria-label="X">
        <Icon name="x" size={xSize} />
      </a>
    )}
  </>
);

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Caveat:wght@500;600&display=swap');

html{scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}

.am-root{
  --bg:#050e18;
  --card:#08131f;
  --line:#12293f;
  --cyan:#00c6ee;
  --text:#ffffff;
  --muted:#b6c2cf;
  --pad:clamp(20px, 5vw, 90px);
  background:var(--bg);
  color:var(--text);
  font-family:'Inter',system-ui,sans-serif;
  min-height:100vh;
  width:100%;
}
.am-root *{box-sizing:border-box;margin:0;padding:0}
.am-root a{color:inherit;text-decoration:none}
.am-root img{max-width:100%;display:block}
.am-root .am-cyan{color:var(--cyan)}

/* ---------- ONE CONTAINER ---------- */
.am-root .am-container{
  width:100%;
  max-width:1800px;
  margin:0 auto;
  padding:0;
  background:
    radial-gradient(700px 400px at 85% 0%, rgba(0,198,238,.10), transparent 60%),
    var(--bg);
  border-left:1px solid var(--line);
  border-right:1px solid var(--line);
  overflow:clip;
}
@media (max-width:1400px){
  .am-root .am-container{border-left:0;border-right:0}
}

/* ---------- Buttons ---------- */
.am-root .am-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  padding:14px 26px;border-radius:999px;font-weight:600;font-size:14px;
  cursor:pointer;border:1.5px solid var(--cyan);transition:.2s;font-family:inherit;
}
.am-root .am-btn-fill{background:var(--cyan);color:#03121c}
.am-root .am-btn-fill:hover{box-shadow:0 0 22px rgba(0,198,238,.55)}
.am-root .am-btn-fill:disabled{opacity:.6;cursor:not-allowed;box-shadow:none}
.am-root .am-btn-outline{background:transparent;color:#fff}
.am-root .am-btn-outline:hover{background:rgba(0,198,238,.12)}
.am-root .am-btn-sm{padding:11px 20px;font-size:13px}
.am-root .am-btn-block{width:100%;padding:13px}
.am-root .am-btn:focus-visible,.am-root a:focus-visible,.am-root input:focus-visible,.am-root textarea:focus-visible,.am-root button:focus-visible{outline:2px solid var(--cyan);outline-offset:2px}

/* ---------- Navbar ---------- */
.am-root .am-nav{
  position:sticky;top:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;padding:0 var(--pad);height:78px;gap:20px;
  border-bottom:1px solid var(--line);
  background:rgba(5,14,24,.88);
  -webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
}
.am-root [id]{scroll-margin-top:78px}
.am-root .am-logo{display:flex;align-items:center;gap:10px}
.am-root .am-logo-img{height:34px;width:auto}
.am-root .am-logo-text{display:flex;flex-direction:column;line-height:1.15}
.am-root .am-logo-text strong{font-size:16px;font-weight:700}
.am-root .am-logo-text small{font-size:11px;color:var(--muted)}
.am-root .am-nav-links{display:flex;gap:40px}
.am-root .am-nav-links a{font-size:13px;display:flex;align-items:center;height:78px;position:relative;color:#e4ebf2;transition:color .2s}
.am-root .am-nav-links a.am-active{color:var(--cyan);font-weight:600}
.am-root .am-nav-links a.am-active::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--cyan)}
.am-root .am-nav-links a:hover{color:var(--cyan)}
.am-root .am-nav-cta{display:inline-flex}
.am-root .am-burger{
  display:none;background:transparent;border:1px solid var(--line);color:#fff;
  width:42px;height:42px;border-radius:10px;cursor:pointer;align-items:center;justify-content:center;
}

/* Mobile menu */
.am-root .am-mobile-menu{
  display:none;position:fixed;top:78px;left:0;right:0;z-index:99;
  background:rgba(5,14,24,.97);border-bottom:1px solid var(--line);
  -webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
  padding:10px var(--pad) 22px;flex-direction:column;
}
.am-root .am-mobile-menu.am-open{display:flex}
.am-root .am-mobile-menu a.am-mlink{
  padding:15px 0;border-bottom:1px solid var(--line);font-size:15px;color:#e4ebf2;
}
.am-root .am-mobile-menu a.am-mlink.am-active{color:var(--cyan);font-weight:600}
.am-root .am-mobile-menu .am-btn{margin-top:18px}

/* ---------- Hero ---------- */
.am-root .am-hero{
  display:grid;grid-template-columns:1fr 1fr;align-items:center;
  min-height:520px;margin:0;padding:0 var(--pad);
  border-bottom:1px solid var(--line);
}
.am-root .am-hello{font-size:22px;color:#cfd8e1;font-weight:400;margin-bottom:4px}
.am-root .am-hero h1{font-size:clamp(40px,5.5vw,60px);line-height:1.05;font-weight:800;letter-spacing:-.5px}
.am-root .am-hero h1 .am-cyan{display:block}
.am-root .am-hero h2{font-size:22px;font-weight:600;margin:18px 0 12px}
.am-root .am-hero-desc{max-width:440px;color:var(--muted);font-size:14px;line-height:1.7}
.am-root .am-hero-btns{display:flex;gap:16px;margin:30px 0 28px;flex-wrap:wrap}
.am-root .am-socials{display:flex;gap:26px;align-items:center}
.am-root .am-socials a{color:#fff;transition:.2s}
.am-root .am-socials a:hover{color:var(--cyan)}
.am-root .am-socials-sm{gap:22px}
.am-root .am-hero-visual{position:relative;height:100%;min-height:520px;display:flex;justify-content:center;align-items:flex-end}
.am-root .am-hero-img{position:relative;z-index:2;max-height:500px;width:auto;object-fit:contain}
.am-root .am-shape{position:absolute;z-index:1}
.am-root .am-shape-a{
  right:-10px;bottom:0;width:62%;height:62%;
  background:linear-gradient(135deg,rgba(0,198,238,.0) 0%,rgba(0,198,238,.55) 100%);
  clip-path:polygon(100% 0,100% 100%,0 100%);
}
.am-root .am-shape-b{
  left:6%;bottom:0;width:38%;height:50%;
  background:linear-gradient(45deg,rgba(0,198,238,.7),rgba(0,198,238,0));
  clip-path:polygon(0 100%,100% 0,100% 100%);
}
.am-root .am-script{
  position:absolute;top:38px;right:0;z-index:3;font-family:'Caveat',cursive;
  color:var(--cyan);font-size:26px;line-height:1.1;transform:rotate(-8deg);text-align:left;
}

/* ---------- Generic section ---------- */
.am-root .am-section{padding:56px var(--pad);border-bottom:1px solid var(--line);margin:0}
.am-root .am-label{
  display:inline-flex;align-items:center;gap:8px;color:var(--cyan);
  font-size:11px;font-weight:600;margin-bottom:14px;
}
.am-root .am-label::before,.am-root .am-label::after{content:"";width:14px;height:2px;background:var(--cyan)}
.am-root .am-title{font-size:clamp(26px,3vw,34px);font-weight:700;line-height:1.2;margin-bottom:14px}
.am-root .am-muted{color:var(--muted);font-size:14px;line-height:1.7}

/* ---------- About ---------- */
.am-root .am-about{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
.am-root .am-about-text .am-muted{max-width:420px}
.am-root .am-info-row{display:flex;gap:34px;margin-top:34px;flex-wrap:wrap}
.am-root .am-info{display:flex;align-items:center;gap:12px}
.am-root .am-info svg{flex:none}
.am-root .am-info small{display:block;font-size:11px;color:var(--muted);margin-bottom:3px}
.am-root .am-info b{font-size:12px;font-weight:600}
.am-root .am-info a:hover{color:var(--cyan)}
.am-root .am-about-img{border-radius:16px;overflow:hidden;border:1px solid var(--line);height:290px}
.am-root .am-about-img img{width:100%;height:100%;object-fit:cover}

/* ---------- Skills ---------- */
.am-root .am-marquee{
  margin-top:34px;overflow:hidden;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
}
.am-root .am-track{display:flex;gap:16px;width:max-content;animation:am-scroll 28s linear infinite}
.am-root .am-marquee:hover .am-track{animation-play-state:paused}
@keyframes am-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 8px))}}
/* Skills carousel hamesha chalti hai (reduce-motion me bhi) */
.am-root .am-skill{
  flex:none;width:150px;
  background:var(--card);border:1px solid var(--line);border-radius:12px;
  height:110px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;
  font-size:12px;font-weight:500;transition:.2s;
}
.am-root .am-skill:hover{border-color:var(--cyan);box-shadow:0 0 18px rgba(0,198,238,.2)}
.am-root .am-skill-icons{display:flex;gap:12px;align-items:center;height:42px}
.am-root .am-skill-icons img{height:40px;width:40px;object-fit:contain}

/* ---------- Projects ---------- */
.am-root .am-section-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:28px}
.am-root .am-section-head .am-muted{max-width:340px}
.am-root .am-view-all{display:inline-flex;align-items:center;gap:8px;color:var(--cyan);font-size:12px;font-weight:600;white-space:nowrap}
.am-root .am-view-all:hover{text-decoration:underline}
.am-root .am-projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.am-root .am-project{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 12px 16px;transition:border-color .2s}
.am-root .am-project:hover{border-color:rgba(0,198,238,.5)}
.am-root .am-project-img{height:150px;border-radius:8px;overflow:hidden;background:#0c1c2c}
.am-root .am-project-img img{width:100%;height:100%;object-fit:cover}
.am-root .am-project-title{display:flex;justify-content:space-between;align-items:center;margin:14px 0 8px}
.am-root .am-project-title h4{font-size:13px;font-weight:600}
.am-root .am-round-arrow{
  width:28px;height:28px;border-radius:50%;border:1px solid var(--cyan);color:var(--cyan);
  display:flex;align-items:center;justify-content:center;transition:.2s;flex:none;
}
.am-root .am-round-arrow:hover{background:var(--cyan);color:#03121c}
.am-root .am-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
.am-root .am-tags span{background:#10243a;color:#c7d3df;font-size:10px;padding:4px 9px;border-radius:5px}
.am-root .am-project-desc{font-size:12px;color:var(--muted);line-height:1.6;min-height:58px}
.am-root .am-project-links{display:flex;gap:20px;margin-top:12px;font-size:12px}
.am-root .am-project-links a{display:inline-flex;align-items:center;gap:6px}
.am-root .am-project-links a:first-child{color:#e7eef5}
.am-root .am-project-links a:hover{color:var(--cyan)}

/* ---------- Why ---------- */
.am-root .am-why{display:grid;grid-template-columns:1fr 1.1fr;gap:50px;align-items:center}
.am-root .am-why-text .am-muted{max-width:340px;margin-bottom:22px}
.am-root .am-why-grid{display:grid;grid-template-columns:1fr 1fr;gap:34px 30px}
.am-root .am-why-item{display:flex;gap:16px;align-items:center}
.am-root .am-why-icon{
  flex:none;width:56px;height:56px;border-radius:50%;background:#0b2234;border:1px solid var(--line);
  display:flex;align-items:center;justify-content:center;color:var(--cyan);
}
.am-root .am-why-item h5{font-size:12px;font-weight:600;margin-bottom:6px}
.am-root .am-why-item p{font-size:11px;color:var(--muted);line-height:1.5}

/* ---------- Contact ---------- */
.am-root .am-contact{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.am-root .am-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px 24px;margin-top:30px}
.am-root .am-contact-grid .am-info b{font-size:11px;word-break:break-all}
.am-root .am-form{
  background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;
  display:flex;flex-direction:column;gap:10px;
}
.am-root .am-field{
  display:flex;align-items:center;gap:12px;color:var(--cyan);
  border:1px solid var(--line);border-radius:6px;padding:0 12px;background:#06101a;
}
.am-root .am-field:focus-within{border-color:var(--cyan)}
.am-root .am-field input,.am-root .am-field textarea{
  flex:1;background:transparent;border:0;outline:0;color:#fff;font-family:inherit;font-size:12px;padding:12px 0;
}
.am-root .am-field input::placeholder,.am-root .am-field textarea::placeholder{color:#b6c2cf}
.am-root .am-field-area{align-items:flex-start;padding-top:12px}
.am-root .am-field-area svg{margin-top:2px}
.am-root .am-field-area textarea{height:70px;resize:vertical;padding:0}
.am-root .am-status{font-size:12px;line-height:1.5;padding:2px 2px 0}
.am-root .am-status-ok{color:#4ade80}
.am-root .am-status-err{color:#ff7a85}

/* ---------- Form validation + thank you ---------- */
.am-root .am-fgroup{display:flex;flex-direction:column;gap:6px}
.am-root .am-field.am-field-err{border-color:#ff7a85;background:rgba(255,122,133,.05)}
.am-root .am-err{
  display:flex;align-items:center;gap:6px;font-size:11px;line-height:1.4;color:#ff7a85;padding-left:2px;
  animation:am-fade .2s ease;
}
.am-root .am-thanks{
  align-items:center;justify-content:center;text-align:center;gap:14px;
  padding:44px 28px;min-height:340px;
  animation:am-pop .55s cubic-bezier(.2,.7,.2,1);
}
.am-root .am-thanks-icon{
  width:76px;height:76px;border-radius:50%;margin-bottom:6px;
  display:flex;align-items:center;justify-content:center;
  color:var(--cyan);background:rgba(0,198,238,.12);border:1.5px solid var(--cyan);
  box-shadow:0 0 0 10px rgba(0,198,238,.07),0 0 32px rgba(0,198,238,.28);
}
.am-root .am-thanks h4{font-size:26px;font-weight:700;line-height:1.2}
.am-root .am-thanks p{font-size:13px;line-height:1.7;color:var(--muted);max-width:360px}
.am-root .am-thanks .am-btn{margin-top:10px}
@keyframes am-pop{from{opacity:0;transform:scale(.94) translateY(12px)}to{opacity:1;transform:none}}

/* ---------- Footer ---------- */
.am-root .am-footer{padding:56px var(--pad) 24px;background:linear-gradient(180deg,transparent,rgba(0,198,238,.05))}
.am-root .am-footer-main{
  display:grid;grid-template-columns:1.6fr 1fr 1.2fr;gap:50px;
  padding-bottom:36px;border-bottom:1px solid var(--line);
}
.am-root .am-footer-about{color:var(--muted);font-size:13px;line-height:1.7;max-width:340px}
.am-root .am-footer-col{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.am-root .am-footer-col h6{
  font-size:13px;font-weight:700;margin-bottom:6px;position:relative;padding-bottom:10px;
}
.am-root .am-footer-col h6::after{content:"";position:absolute;left:0;bottom:0;width:28px;height:2px;background:var(--cyan)}
.am-root .am-footer-col > a,.am-root .am-footer-contact{
  font-size:13px;color:#cfd8e1;transition:color .2s,transform .2s;
  display:inline-flex;align-items:center;gap:10px;word-break:break-all;
}
.am-root .am-footer-col > a:hover{color:var(--cyan);transform:translateX(4px)}
.am-root .am-footer-col > a.am-active{color:var(--cyan)}
.am-root .am-footer-socials{margin-top:6px}
.am-root .am-footer-socials a{
  width:40px;height:40px;border-radius:50%;border:1px solid var(--line);
  display:flex;align-items:center;justify-content:center;background:var(--card);
}
.am-root .am-footer-socials a:hover{border-color:var(--cyan);box-shadow:0 0 16px rgba(0,198,238,.3)}
.am-root .am-footer-bottom{
  display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;
  padding-top:22px;font-size:12px;color:var(--muted);
}
.am-root .am-totop{
  display:inline-flex;align-items:center;gap:8px;color:var(--cyan);font-weight:600;
  border:1px solid var(--cyan);border-radius:999px;padding:8px 16px;transition:.2s;
}
.am-root .am-totop:hover{background:var(--cyan);color:#03121c}
.am-root .am-heart{color:#ff3b4e}

/* ---------- Scroll & mouse animations ---------- */
.am-root .am-progress,.am-root .am-glow{display:none}
.am-root.am-js .am-progress{
  display:block;position:fixed;top:0;left:0;right:0;height:3px;z-index:200;pointer-events:none;
  transform-origin:left center;transform:scaleX(0);
  background:linear-gradient(90deg,var(--cyan),#8aeeff);
  box-shadow:0 0 12px rgba(0,198,238,.7);
}
.am-root.am-js .am-glow{
  display:block;position:fixed;top:0;left:0;width:420px;height:420px;border-radius:50%;
  pointer-events:none;z-index:1;mix-blend-mode:screen;
  background:radial-gradient(circle,rgba(0,198,238,.14),transparent 65%);
  transform:translate3d(-999px,-999px,0);transition:transform .18s ease-out;
}
@media (hover:none){.am-root.am-js .am-glow{display:none}}

/* scroll reveal */
.am-root.am-js .am-reveal{
  opacity:0;transform:translate3d(0,36px,0);will-change:opacity,transform;
  transition:opacity .85s cubic-bezier(.2,.7,.2,1) var(--d,0ms),transform .85s cubic-bezier(.2,.7,.2,1) var(--d,0ms);
}
.am-root.am-js .am-reveal.am-left{transform:translate3d(-56px,0,0)}
.am-root.am-js .am-reveal.am-right{transform:translate3d(56px,0,0)}
.am-root.am-js .am-reveal.am-in{opacity:1;transform:none;will-change:auto}

/* navbar entrance */
@keyframes am-drop{from{transform:translateY(-100%);opacity:0}to{transform:none;opacity:1}}
.am-root.am-js .am-nav{animation:am-drop .7s cubic-bezier(.2,.7,.2,1) backwards}

/* hero: mouse + scroll parallax */
.am-root .am-hero{--mx:0;--my:0;--sy:0;overflow:hidden}
.am-root .am-hero-img{
  transform:translate3d(calc(var(--mx) * -14px),calc(var(--sy) * 0.06px),0) scale(1.04);
  transform-origin:50% 100%;transition:transform .3s ease-out;
}
.am-root .am-shape-a{
  transform:translate3d(calc(var(--mx) * 24px),calc(var(--my) * 12px - var(--sy) * 0.08px),0);
  transition:transform .35s ease-out;
}
.am-root .am-shape-b{
  transform:translate3d(calc(var(--mx) * -28px),calc(var(--my) * -10px),0);
  transition:transform .35s ease-out;
}
.am-root .am-script{
  transform:rotate(-8deg) translate3d(calc(var(--mx) * 10px),calc(var(--my) * 8px),0);
  transition:transform .3s ease-out;
}

/* project cards: 3D tilt following the mouse */
.am-root .am-proj-wrap{display:flex}
.am-root .am-proj-wrap .am-project{flex:1;min-width:0}
.am-root .am-tilt{
  transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
  transition:transform .25s ease-out,border-color .2s;
}

@media (prefers-reduced-motion:reduce){
  .am-root .am-hero-img,.am-root .am-shape-a,.am-root .am-shape-b{transform:none}
  .am-root .am-script{transform:rotate(-8deg)}
  .am-root .am-tilt{transform:none}
}

/* ---------- Project video ---------- */
.am-root .am-project-img{position:relative}
.am-root .am-play{
  position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  width:54px;height:54px;border-radius:50%;border:0;cursor:pointer;
  background:rgba(0,198,238,.92);color:#03121c;
  display:flex;align-items:center;justify-content:center;padding-left:3px;
  box-shadow:0 0 0 8px rgba(0,198,238,.22);transition:transform .2s,box-shadow .2s;
}
.am-root .am-play:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 0 0 12px rgba(0,198,238,.25)}
.am-root .am-video-btn{
  display:inline-flex;align-items:center;gap:6px;background:none;border:0;padding:0;
  color:var(--cyan);font-family:inherit;font-size:12px;cursor:pointer;
}
.am-root .am-video-btn:hover{text-decoration:underline}

.am-root .am-modal{
  position:fixed;inset:0;z-index:300;padding:20px;
  display:flex;align-items:center;justify-content:center;
  background:rgba(2,8,14,.88);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
  animation:am-fade .25s ease;
}
@keyframes am-fade{from{opacity:0}to{opacity:1}}
.am-root .am-modal-box{position:relative;width:min(960px,100%)}
.am-root .am-modal-video{
  display:block;width:100%;max-height:78vh;background:#000;
  border:1px solid var(--line);border-radius:12px;
}
.am-root .am-modal-title{margin-top:12px;font-size:13px;color:var(--muted)}
.am-root .am-modal-close{
  position:absolute;top:-48px;right:0;width:38px;height:38px;border-radius:50%;
  background:transparent;border:1px solid var(--line);color:#fff;cursor:pointer;
  display:flex;align-items:center;justify-content:center;transition:.2s;
}
.am-root .am-modal-close:hover{border-color:var(--cyan);color:var(--cyan)}

/* ---------- Project links: Live Demo + Watch Demo (same animation) ---------- */
.am-root .am-project-links{align-items:center}
.am-root .am-project-links a,
.am-root .am-video-btn{
  position:relative;display:inline-flex;align-items:center;gap:6px;
  color:#e7eef5;font-family:inherit;font-size:12px;transition:color .25s;
}
.am-root .am-project-links a::after,
.am-root .am-video-btn::after{
  content:"";position:absolute;left:0;bottom:-4px;width:100%;height:1px;background:var(--cyan);
  transform:scaleX(0);transform-origin:left;transition:transform .3s ease;
}
.am-root .am-project-links a:hover,
.am-root .am-video-btn:hover{color:var(--cyan);text-decoration:none}
.am-root .am-project-links a:hover::after,
.am-root .am-video-btn:hover::after{transform:scaleX(1)}
.am-root .am-project-links svg,
.am-root .am-video-btn svg{transition:transform .25s ease}
.am-root .am-project-links a:hover svg{transform:translate(3px,-3px)}
.am-root .am-video-btn:hover svg{transform:scale(1.3)}

/* ---------- Footer website links ---------- */
.am-root .am-footer-brand{display:flex;flex-direction:column;align-items:flex-start;gap:18px}
.am-root .am-footer-sites{display:flex;flex-wrap:wrap;gap:10px}
.am-root .am-site-pill{
  display:inline-flex;align-items:center;gap:8px;padding:10px 18px;
  border:1.5px solid var(--cyan);border-radius:999px;
  color:var(--cyan);font-size:14px;font-weight:600;transition:.2s;
}
.am-root .am-site-pill:hover{background:var(--cyan);color:#03121c;box-shadow:0 0 18px rgba(0,198,238,.4)}

/* ---------- Responsive ---------- */
@media (max-width:1000px){
  .am-root .am-projects-grid{grid-template-columns:1fr 1fr}
  .am-root .am-why,.am-root .am-contact,.am-root .am-about{grid-template-columns:1fr;gap:34px}
  .am-root .am-footer-main{grid-template-columns:1fr 1fr}
  .am-root .am-footer-brand{grid-column:1 / -1}
}
@media (max-width:760px){
  .am-root{--pad:20px}
  .am-root .am-hero{padding-top:30px;padding-bottom:0}
  .am-root .am-nav-links,.am-root .am-nav-cta{display:none}
  .am-root .am-burger{display:inline-flex}
  .am-root .am-hero{grid-template-columns:1fr}
  .am-root .am-hero-visual{min-height:380px}
  .am-root .am-hero-img{max-height:380px}
  .am-root .am-projects-grid{grid-template-columns:1fr}
  .am-root .am-why-grid,.am-root .am-contact-grid{grid-template-columns:1fr}
  .am-root .am-section-head{flex-direction:column;align-items:flex-start}
  .am-root .am-footer-main{grid-template-columns:1fr;gap:34px}
  .am-root .am-footer-bottom{flex-direction:column;align-items:flex-start}
}
`;

/* ================= PAGE ================= */
function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState(null);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null); // { name, viaMail } jab message bhej diya jaye
  const barRef = useRef(null);
  const glowRef = useRef(null);
  const heroRef = useRef(null);

  /* ---- Scroll reveal: elements scroll karte hi animate hote hain ---- */
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    setReady(true);
    const els = document.querySelectorAll(".am-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("am-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ---- Scroll progress bar, hero parallax, mouse glow ---- */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canHover = window.matchMedia("(hover: hover)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      if (heroRef.current) heroRef.current.style.setProperty("--sy", Math.min(y, 700));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 210}px, ${e.clientY - 210}px, 0)`;
      }
      if (heroRef.current) {
        heroRef.current.style.setProperty("--mx", ((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
        heroRef.current.style.setProperty("--my", ((e.clientY / window.innerHeight - 0.5) * 2).toFixed(3));
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (canHover) window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* Project card 3D tilt */
  const onTilt = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
  };
  const onTiltEnd = (e) => {
    e.currentTarget.style.setProperty("--ry", "0deg");
    e.currentTarget.style.setProperty("--rx", "0deg");
  };

  /* ---- Scroll-spy: jis section pe ho wohi nav me highlight hoga ---- */
  useEffect(() => {
    const ids = NAV.map((n) => n.toLowerCase());

    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      // Page ke bilkul neeche pohanch gaye to Contact highlight ho
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = "contact";
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Mobile menu: Escape se band, bada screen hone par band */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 760 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* Video modal: Escape se band, page scroll lock */
  useEffect(() => {
    if (!video) return;
    const onKey = (e) => e.key === "Escape" && setVideo(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [video]);

  const goTo = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Jis field ko user theek kar raha hai uska error hata do
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = (f) => {
    const er = {};
    const name = f.name.trim();
    const email = f.email.trim();
    const subject = f.subject.trim();
    const message = f.message.trim();

    if (!name) er.name = "Please enter your name.";
    else if (name.length < 2) er.name = "Name must be at least 2 characters.";
    else if (name.length > 60) er.name = "Name is too long (max 60 characters).";

    if (!email) er.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) er.email = "Please enter a valid email, e.g. name@example.com.";

    if (subject.length > 100) er.subject = "Subject is too long (max 100 characters).";

    if (!message) er.message = "Please write your message.";
    else if (message.length < 10) er.message = `Message is too short (${message.length}/10 characters minimum).`;
    else if (message.length > 2000) er.message = "Message is too long (max 2000 characters).";

    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    // Pehle validation
    const er = validate(form);
    setErrors(er);
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0];
      const el = e.currentTarget.elements[first];
      if (el && el.focus) el.focus();
      return;
    }

    const clean = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    // Formspree set nahi hai to mail app khol do
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(clean.subject || `Portfolio message from ${clean.name}`);
      const body = encodeURIComponent(`Name: ${clean.name}\nEmail: ${clean.email}\n\n${clean.message}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setSent({ name: clean.name, viaMail: true });
      setForm({ name: "", email: "", subject: "", message: "" });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(clean),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent({ name: clean.name, viaMail: false });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        type: "err",
        text: `Message could not be sent. Please email me at ${EMAIL}.`,
      });
    } finally {
      setSending(false);
    }
  };

  const linkClass = (id, base = "") =>
    `${base}${active === id ? (base ? " " : "") + "am-active" : ""}`;

  return (
    <div className={`am-root${ready ? " am-js" : ""}`}>
      <style>{CSS}</style>
      <div className="am-progress" ref={barRef} aria-hidden="true" />
      <div className="am-glow" ref={glowRef} aria-hidden="true" />

      <div className="am-container">
        {/* NAVBAR */}
        <header className="am-nav">
          <Logo />
          <nav className="am-nav-links" aria-label="Main">
            {NAV.map((n) => {
              const id = n.toLowerCase();
              return (
                <a
                  key={n}
                  href={`#${id}`}
                  onClick={() => goTo(id)}
                  className={linkClass(id)}
                  aria-current={active === id ? "page" : undefined}
                >
                  {n}
                </a>
              );
            })}
          </nav>
          <a
            href={cv}
            download="Abdullah_Musharraf.pdf"
            className="am-btn am-btn-outline am-nav-cta"
          >
            Download CV <Icon name="download" size={15} />
          </a>
          <button
            type="button"
            className="am-burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </header>

        {/* MOBILE MENU */}
        <div className={`am-mobile-menu${menuOpen ? " am-open" : ""}`}>
          {NAV.map((n) => {
            const id = n.toLowerCase();
            return (
              <a
                key={n}
                href={`#${id}`}
                onClick={() => goTo(id)}
                className={linkClass(id, "am-mlink")}
              >
                {n}
              </a>
            );
          })}
          <a
            href={cv}
            download="Abdullah_Musharraf.pdf"
            className="am-btn am-btn-outline"
          >
            Download CV <Icon name="download" size={15} />
          </a>
        </div>

        {/* HERO */}
        <section id="home" className="am-hero" ref={heroRef}>
          <div className="am-hero-text">
            <p className="am-hello am-reveal" style={d(0)}>Hello, I'm</p>
            <h1 className="am-reveal" style={d(100)}>
              Abdullah <span className="am-cyan">Musharraf</span>
            </h1>
            <h2 className="am-reveal" style={d(200)}>Web & Application  Developer</h2>
            <p className="am-hero-desc am-reveal" style={d(300)}>
              I build modern web and mobile applications with clean code, user-friendly design,
              and a focus on real-world solutions. Turning ideas into functional products.
            </p>
            <div className="am-hero-btns am-reveal" style={d(400)}>
              <a href="#projects" onClick={() => goTo("projects")} className="am-btn am-btn-fill">
                View My Projects <Icon name="arrow" size={15} />
              </a>
              <a href="#contact" onClick={() => goTo("contact")} className="am-btn am-btn-outline">
                Contact Me <Icon name="mail" size={15} />
              </a>
            </div>
            <div className="am-socials am-reveal" style={d(500)}>
              <Socials size={24} xSize={22} />
            </div>
          </div>

          <div className="am-hero-visual am-reveal am-right" style={d(200)}>
            <span className="am-shape am-shape-a" />
            <span className="am-shape am-shape-b" />
            <img src={IMAGES.profile} alt="Abdullah Musharraf" className="am-hero-img" />
            {/* <div className="am-script">
              Clean Code <br /> Better Web
            </div> */}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="am-section am-about">
          <div className="am-about-text am-reveal am-left">
            <SectionLabel>About Me</SectionLabel>
            <h3 className="am-title">
              Passionate Web & Application  Developer <br /> Based in <span className="am-cyan">Pakistan</span>
            </h3>
            <p className="am-muted">
              I'm a passionate web and app developer with experience in building responsive
              websites and mobile applications. I enjoy solving problems, learning new
              technologies and creating projects that make an impact.
            </p>
            <div className="am-info-row">
              <div className="am-info">
                <Icon name="pin" size={22} className="am-cyan" />
                <div>
                  <small>Location</small>
                  <b>Pakistan</b>
                </div>
              </div>
              <div className="am-info">
                <Icon name="mail" size={22} className="am-cyan" />
                <div>
                  <small>Email</small>
                  <b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></b>
                </div>
              </div>
              <div className="am-info">
                <Icon name="briefcase" size={22} className="am-cyan" />
                <div>
                  <small>Available For</small>
                  <b>Freelance / Remote / Full-time</b>
                </div>
              </div>
            </div>
          </div>
          <div className="am-about-img am-reveal am-right" style={d(150)}>
            <img src={IMAGES.about} alt="Workspace" loading="lazy" />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="am-section">
          <div className="am-reveal">
          <SectionLabel>My Skills</SectionLabel>
          <h3 className="am-title">
            Technologies <span className="am-cyan">&amp; Tools</span>
          </h3>
          <p className="am-muted">
            I work with modern technologies to build fast, responsive and scalable applications.
          </p>
          </div>
          <div className="am-marquee am-reveal" style={d(150)}>
            <div className="am-track">
              {[...SKILLS, ...SKILLS].map((s, i) => (
                <div
                  key={`${s.name}-${i}`}
                  className="am-skill"
                  aria-hidden={i >= SKILLS.length ? "true" : undefined}
                >
                  <div className="am-skill-icons">
                    {s.imgs.map((src, j) => (
                      <img key={`${src}-${j}`} src={src} alt={s.name} loading="lazy" />
                    ))}
                  </div>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="am-section">
          <div className="am-section-head am-reveal">
            <div>
              <SectionLabel>My Projects</SectionLabel>
              <h3 className="am-title">
                Featured <span className="am-cyan">Projects</span>
              </h3>
              <p className="am-muted">
                Here are some of the projects I've built. Each project helped me grow and
                explore new technologies.
              </p>
            </div>
            {LINKS.github && (
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="am-view-all">
                More on GitHub <Icon name="arrow" size={14} />
              </a>
            )}
          </div>

          <div className="am-projects-grid">
            {PROJECTS.map((p, i) => (
              <article key={p.title} className="am-proj-wrap am-reveal" style={d(i * 130)}>
              <div className="am-project am-tilt" onMouseMove={onTilt} onMouseLeave={onTiltEnd}>
                <div className="am-project-img">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  {p.video && (
                    <button
                      type="button"
                      className="am-play"
                      onClick={() => setVideo({ src: p.video, title: p.title })}
                      aria-label={`Play ${p.title} demo video`}
                    >
                      <Icon name="play" size={22} />
                    </button>
                  )}
                </div>
                <div className="am-project-title">
                  <h4>{p.title}</h4>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="am-round-arrow"
                    aria-label={`Open ${p.title}`}
                  >
                    <Icon name="arrow" size={15} />
                  </a>
                </div>
                <div className="am-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <p className="am-project-desc">{p.desc}</p>
                <div className="am-project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live Demo <Icon name="external" size={14} />
                    </a>
                  )}
                  {p.video && (
                    <button
                      type="button"
                      className="am-video-btn"
                      onClick={() => setVideo({ src: p.video, title: p.title })}
                    >
                      Watch Demo <Icon name="play" size={12} />
                    </button>
                  )}
                </div>
              </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHY WORK WITH ME */}
        <section id="why" className="am-section am-why">
          <div className="am-why-text am-reveal am-left">
            <SectionLabel>Why Work With Me</SectionLabel>
            <h3 className="am-title">
              I Build Solutions <br />
              <span className="am-cyan">That Matter</span>
            </h3>
            <p className="am-muted">
              I focus on clean code, great user experience and continuous learning. I'm always
              open to new opportunities, collaborations and challenging projects.
            </p>
            <a href="#contact" onClick={() => goTo("contact")} className="am-btn am-btn-fill am-btn-sm">
              Let's Work Together <Icon name="arrow" size={15} />
            </a>
          </div>
          <div className="am-why-grid">
            {WHY.map((w, i) => (
              <div key={w.title} className="am-why-item am-reveal" style={d(i * 120)}>
                <span className="am-why-icon">
                  <Icon name={w.icon} size={26} />
                </span>
                <div>
                  <h5>{w.title}</h5>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="am-section am-contact">
          <div className="am-contact-text am-reveal am-left">
            <SectionLabel>Get In Touch</SectionLabel>
            <h3 className="am-title">
              Let's Build Something <span className="am-cyan">Great</span>
            </h3>
            <p className="am-muted">
              Have a project in mind, a question or just want to say hi? Feel free to reach out!
            </p>
            <div className="am-contact-grid">
              <div className="am-info">
                <Icon name="mail" size={22} className="am-cyan" />
                <b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></b>
              </div>
              <div className="am-info">
                <Icon name="linkedin" size={22} className="am-cyan" />
                <b>
                  <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/abdullah-musharraf-4a0454326
                  </a>
                </b>
              </div>
              <div className="am-info">
                <Icon name="pin" size={22} className="am-cyan" />
                <b>Pakistan</b>
              </div>
              <div className="am-info">
                <Icon name="github" size={22} className="am-cyan" />
                <b>
                  <a href={LINKS.github} target="_blank" rel="noreferrer">
                    github.com/abdullahboss-art
                  </a>
                </b>
              </div>
              <div className="am-info">
                <Icon name="globe" size={22} className="am-cyan" />
                <b>
                  <a href={WEBSITE} target="_blank" rel="noreferrer">
                    alrmanadvertising.com
                  </a>
                </b>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="am-form am-thanks" role="status" aria-live="polite">
              <span className="am-thanks-icon">
                <Icon name="check" size={34} />
              </span>
              <h4>
                Thank You{sent.name ? `, ${sent.name.split(" ")[0]}` : ""}!
              </h4>
              <p>
                {sent.viaMail
                  ? "Your email app has opened with your message ready. Just press Send there and it will reach me."
                  : "Your message has been sent successfully."}
              </p>
              <p>I really appreciate you reaching out. I'll get back to you as soon as possible.</p>
              <button
                type="button"
                className="am-btn am-btn-outline am-btn-sm"
                onClick={() => setSent(null)}
              >
                Send another message <Icon name="arrow" size={14} />
              </button>
            </div>
          ) : (
            <form className="am-form am-reveal am-right" style={d(150)} onSubmit={onSubmit} noValidate>
              <div className="am-fgroup">
                <label className={`am-field${errors.name ? " am-field-err" : ""}`}>
                  <Icon name="user" size={16} />
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your Name"
                    maxLength={80}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                </label>
                {errors.name && (
                  <p id="err-name" className="am-err" role="alert">
                    <Icon name="alert" size={13} /> {errors.name}
                  </p>
                )}
              </div>

              <div className="am-fgroup">
                <label className={`am-field${errors.email ? " am-field-err" : ""}`}>
                  <Icon name="mail" size={16} />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Your Email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                </label>
                {errors.email && (
                  <p id="err-email" className="am-err" role="alert">
                    <Icon name="alert" size={13} /> {errors.email}
                  </p>
                )}
              </div>

              <div className="am-fgroup">
                <label className={`am-field${errors.subject ? " am-field-err" : ""}`}>
                  <Icon name="tag" size={16} />
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Subject (optional)"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "err-subject" : undefined}
                  />
                </label>
                {errors.subject && (
                  <p id="err-subject" className="am-err" role="alert">
                    <Icon name="alert" size={13} /> {errors.subject}
                  </p>
                )}
              </div>

              <div className="am-fgroup">
                <label className={`am-field am-field-area${errors.message ? " am-field-err" : ""}`}>
                  <Icon name="message" size={16} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Your Message"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "err-message" : undefined}
                  />
                </label>
                {errors.message && (
                  <p id="err-message" className="am-err" role="alert">
                    <Icon name="alert" size={13} /> {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="am-btn am-btn-fill am-btn-block" disabled={sending}>
                {sending ? "Sending..." : "Send Message"} <Icon name="send" size={15} />
              </button>
              {status.text && (
                <p
                  role="status"
                  className={`am-status ${status.type === "ok" ? "am-status-ok" : "am-status-err"}`}
                >
                  {status.text}
                </p>
              )}
            </form>
          )}
        </section>

        {/* FOOTER */}
        <footer className="am-footer">
          <div className="am-footer-main am-reveal">
            <div className="am-footer-brand">
              <Logo />
              <p className="am-footer-about">
                Building modern web and mobile applications with clean code and real-world solutions.
              </p>
              <div className="am-footer-sites">
                {SITES.map((site) => (
                  <a key={site.url} href={site.url} target="_blank" rel="noreferrer" className="am-site-pill">
                    <Icon name="globe" size={16} />
                    {site.label}
                    <Icon name="external" size={13} />
                  </a>
                ))}
              </div>
            </div>

            <nav className="am-footer-col" aria-label="Footer">
              <h6>Quick Links</h6>
              {NAV.map((n) => {
                const id = n.toLowerCase();
                return (
                  <a key={n} href={`#${id}`} onClick={() => goTo(id)} className={linkClass(id)}>
                    {n}
                  </a>
                );
              })}
            </nav>

            <div className="am-footer-col">
              <h6>Get In Touch</h6>
              <a href={`mailto:${EMAIL}`} className="am-footer-contact">
                <Icon name="mail" size={16} className="am-cyan" /> {EMAIL}
              </a>
              <span className="am-footer-contact">
                <Icon name="pin" size={16} className="am-cyan" /> Pakistan
              </span>
              <div className="am-socials am-socials-sm am-footer-socials">
                <Socials size={20} xSize={18} />
              </div>
            </div>
          </div>

          <div className="am-footer-bottom">
            <span>© {new Date().getFullYear()} Abdullah Musharraf. All rights reserved.</span>
            <span>
              Made with <span className="am-heart">♥</span> using React
            </span>
            <a href="#home" onClick={() => goTo("home")} className="am-totop">
              Back to top <Icon name="up" size={14} />
            </a>
          </div>
        </footer>
      </div>

      {/* VIDEO MODAL */}
      {video && (
        <div
          className="am-modal"
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onClick={() => setVideo(null)}
        >
          <div className="am-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="am-modal-close"
              onClick={() => setVideo(null)}
              aria-label="Close video"
            >
              <Icon name="close" size={20} />
            </button>
            <video className="am-modal-video" src={video.src} controls autoPlay playsInline />
            <p className="am-modal-title">{video.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
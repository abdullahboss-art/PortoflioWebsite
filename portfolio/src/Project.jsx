import "./Project.css";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
// 👇 Apni project images yahan se aayengi (file ka naam alag ho to sirf path badlo)
import quickbite from "./assets/quickbite.jpg";
import hotel from "./assets/HotelManagement.jpg";
import atm from "./assets/Alrman-Advertising.png";

const GITHUB = "https://github.com/abdullahboss-art";

const projects = [
  {
    title: "QuickBite – Food Delivery App",
    img: quickbite,
    tags: ["Flutter", "Firebase", "AI Chatbot"],
    desc: "A complete food delivery app with AI chatbot, Firebase integration, voice support and modern UI.",
    demo: "https://lnkd.in/dRXPeTug",
    // github: GITHUB,
  },
  {
    title: "Hotel Management System",
    img: hotel,
    tags: ["React", "Node.js", "MongoDB", "Vercel"],
    desc: "A complete hotel management system with booking, rooms, guests, payments and admin panel.",
    demo: "https://hotelmanagment-website.netlify.app/",
    // github: GITHUB,
  },
  {
    title: "Alrman Advertising",
    img: atm,
    tags: ["Python", "Tkinter", "JSON"],
    desc: "A simple ATM prototype with secure PIN, mini statement, transfer and multi-language support.",
      demo: "https://alrmanapp.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="projects__head">
          <div>
            <p className="projects__eyebrow">
              <span className="projects__line" />
              MY PROJECTS
            </p>
            <h2 className="projects__title">
              Featured <span className="projects__accent">Projects</span>
            </h2>
            <p className="projects__sub">
              Here are some of the projects I've built. Each project helped me
              grow and explore new technologies.
            </p>
          </div>
          <a className="projects__all" href={GITHUB} target="_blank" rel="noreferrer">
            View All Projects <FiArrowRight />
          </a>
        </div>

        <ul className="projects__grid">
          {projects.map((p) => (
            <li className="projects__card" key={p.title}>
              <img className="projects__img" src={p.img} alt={p.title} />
              <div className="projects__body">
                <div className="projects__row">
                  <h3 className="projects__name">{p.title}</h3>
                  <a className="projects__go" href={p.demo || p.github} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                    <FiArrowRight />
                  </a>
                </div>
                <ul className="projects__tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p className="projects__desc">{p.desc}</p>
                <div className="projects__links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="projects__demo">
                      Live Demo <FiArrowUpRight />
                    </a>
                  )}
                  {/* <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub <FaGithub />
                  </a> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;

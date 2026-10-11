import "./Home.css";
// 👇 Apni image yahan se aayegi. File ka naam alag ho to sirf ye path badlo.
import heroImg from "./assets/Hero.png";
import cv from "./assets/Abdullah_Musharraf.pdf";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-musharraf-4a0454326/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3V9.75zM9.75 9.75h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21h-4V9.75z" />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/abdullahboss-art",
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    ),
  },
];

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__hello">Hello, I'm</p>
          <h1 className="hero__name">
            <span>Abdullah</span>
            <span className="hero__name--accent">Musharraf</span>
          </h1>
          <h2 className="hero__role">Web Developer</h2>
          <p className="hero__bio">
            I build modern web and mobile applications with clean code,
            user-friendly design, and a focus on real-world solutions. Turning
            ideas into functional products.
          </p>

          <div className="hero__actions">
           <a
  className="btn btn--solid"
  href="#projects"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  View My Projects
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
</a>
            <a className="btn btn--outline" href={cv} download="Abdullah_Musharraf_CV (6).pdf">
              Download CV
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentCWx`x`olor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="M7 11l5 5 5-5" />
                <path d="M5 20h14" />
              </svg>
            </a>
          </div>

          <ul className="hero__socials">
            {socials.map(({ label, href, icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                    {icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <span className="hero__shape hero__shape--a" />
          <span className="hero__shape hero__shape--b" />
          <span className="hero__shape hero__shape--c" />
          <img className="hero__photo" src={heroImg} alt="Abdullah Musharraf" />
          {/* <p className="hero__tagline">
            Clean Code
            <br />
            Better Web
          </p> */}
        </div>
      </div>
    </section>
  );
}
export default Home;
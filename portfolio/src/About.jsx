import "./About.css";
// 👇 Apni image yahan se aayegi. File ka naam alag ho to sirf ye path badlo.
import aboutImg from "./assets/about.jpg";

const info = [
  {
    label: "Location",
    value: "Pakistan",
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
  {
    label: "Email",
    value: "abdullahmusharraf576@gmail.com",
    href: "mailto:abdullahmusharraf576@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: "Available For",
    value: "Freelance / Remote / Full-time",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
        <path d="M3 13h18" />
      </>
    ),
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__text">
          <p className="about__eyebrow">
            <span className="about__line" />
            ABOUT ME
          </p>

          <h2 className="about__title">
            Passionate Web Developer
            <br />
            Based in <span className="about__accent">Pakistan</span>
          </h2>

          <p className="about__bio">
            I'm a passionate web and app developer with experience in building
            responsive websites and mobile applications. I enjoy solving
            problems, learning new technologies and creating projects that make
            an impact.
          </p>

          <ul className="about__info">
            {info.map(({ label, value, href, icon }) => (
              <li className="about__item" key={label}>
                <svg
                  className="about__icon"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
                <div>
                  <span className="about__label">{label}</span>
                  {href ? (
                    <a className="about__value" href={href}>
                      {value}
                    </a>
                  ) : (
                    <span className="about__value">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__visual">
          <img className="about__img" src={aboutImg} alt="About Abdullah Musharraf" />
        </div>
      </div>
    </section>
  );
}

export default About;

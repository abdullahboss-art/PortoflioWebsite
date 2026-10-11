import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "HTML", icons: [{ Icon: FaHtml5, color: "#e44d26" }] },
  { name: "CSS", icons: [{ Icon: FaCss3Alt, color: "#2d9cdb" }] },
  { name: "JavaScript", icons: [{ Icon: SiJavascript, color: "#f7df1e" }] },
  { name: "React", icons: [{ Icon: FaReact, color: "#61dafb" }] },
  { name: "Next.js", icons: [{ Icon: SiNextdotjs, color: "#ffffff" }] },
  { name: "Tailwind CSS", icons: [{ Icon: SiTailwindcss, color: "#38bdf8" }] },
  { name: "Node.js", icons: [{ Icon: FaNodeJs, color: "#6cc24a" }] },
  { name: "MongoDB", icons: [{ Icon: SiMongodb, color: "#47a248" }] },
  { name: "Express.js", icons: [{ Icon: SiExpress, color: "#ffffff" }] },
  { name: "Firebase", icons: [{ Icon: SiFirebase, color: "#ffca28" }] },
  { name: "Python", icons: [{ Icon: FaPython, color: "#4b8bbe" }] },
  {
    name: "Git & GitHub",
    icons: [
      { Icon: FaGitAlt, color: "#f05133" },
      { Icon: FaGithub, color: "#ffffff" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <p className="skills__eyebrow">
          <span className="skills__line" />
          MY SKILLS
          <span className="skills__line" />
        </p>

        <h2 className="skills__title">
          Technologies &amp; <span className="skills__accent">Tools</span>
        </h2>
        <p className="skills__sub">
          I work with modern technologies to build fast, responsive and scalable
          applications.
        </p>

        <ul className="skills__grid">
          {skills.map(({ name, icons }) => (
            <li className="skills__card" key={name}>
              <span className="skills__icons">
                {icons.map(({ Icon, color }, i) => (
                  <Icon key={i} size={34} color={color} aria-hidden="true" />
                ))}
              </span>
              <span className="skills__name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;

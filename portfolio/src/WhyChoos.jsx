import "./Whychoos.css";
import { FiCode, FiMonitor, FiClock, FiArrowRight } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const features = [
  { Icon: FiCode, title: "Clean & Maintainable Code", text: "Well-structured and scalable solutions." },
  { Icon: FiMonitor, title: "Responsive Design", text: "Works perfectly on all devices." },
  { Icon: FiClock, title: "On-time Delivery", text: "Committed to deadlines and quality." },
  { Icon: FaGraduationCap, title: "Always Learning", text: "Exploring new technologies every day." },
];

function WhyMe() {
  return (
    <section className="why" id="why">
      <div className="why__inner">
        <div className="why__text">
          <p className="why__eyebrow">
            <span className="why__line" />
            WHY WORK WITH ME
          </p>
          <h2 className="why__title">
            I Build Solutions
            <br />
            <span className="why__accent">That Matter</span>
          </h2>
          <p className="why__bio">
            I focus on clean code, great user experience and continuous learning.
            I'm always open to new opportunities, collaborations and challenging
            projects.
          </p>
          <a className="why__btn" href="#contact">
            Let's Work Together <FiArrowRight />
          </a>
        </div>

        <ul className="why__grid">
          {features.map(({ Icon, title, text }) => (
            <li className="why__item" key={title}>
              <span className="why__icon">
                <Icon size={22} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyMe;

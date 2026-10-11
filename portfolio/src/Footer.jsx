import "./Footer.css";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import logo from "./assets/logo.png";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

const socials = [
  { label: "LinkedIn", Icon: FaLinkedin, href: "https://linkedin.com/in/abdullah-musharraf-4a0454326/" },
  { label: "GitHub", Icon: FaGithub, href: "https://github.com/abdullahboss-art" },
 
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__brand" href="#home">
          <img src={logo} alt="AM logo" />
          <span>
            <strong>Abdullah Musharraf</strong>
            <small>Web Developer</small>
          </span>
        </a>

        <nav className="footer__nav" aria-label="Footer">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </nav>

        <ul className="footer__socials">
          {socials.map(({ label, Icon, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Abdullah Musharraf. All rights reserved.</p>
        <p>Built with ❤️ using React</p>
      </div> */}
    </footer>
  );
}

export default Footer;

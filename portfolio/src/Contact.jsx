import { useState, useEffect } from "react";
import "./Contact.css";
import {
  FiMail,
  FiMapPin,
  FiUser,
  FiTag,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const EMAIL = "abdullahmusharraf576@gmail.com";

// 👇 Form seedha email par bhejne ke liye (free): formspree.io par form banao,
// phir uska link yahan lagao, e.g. "https://formspree.io/f/abcdwxyz"
// Khaali rakhoge to email app (mailto) khulega aur Thank you message phir bhi aayega.
const FORM_ENDPOINT = "";

const details = [
  { Icon: FiMail, text: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: FaLinkedin, text: "linkedin.com/in/abdullah-musharraf-4a0454326/", href: "https://linkedin.com/in/abdullah-musharraf-4a0454326/" },
  { Icon: FiMapPin, text: "Pakistan" },
  { Icon: FaGithub, text: "github.com/abdullahboss-art", href: "https://github.com/abdullahboss-art" },
];

const MAX_MESSAGE = 500;
const EMPTY = { name: "", email: "", subject: "", message: "" };

function validateField(name, value) {
  const v = value.trim();
  switch (name) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      if (!/^[\p{L}\s.'-]+$/u.test(v)) return "Name can only contain letters.";
      return "";
    case "email":
      if (!v) return "Please enter your email.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Please enter a valid email address.";
      return "";
    case "subject":
      if (!v) return "Please enter a subject.";
      if (v.length < 3) return "Subject must be at least 3 characters.";
      return "";
    case "message":
      if (!v) return "Please write your message.";
      if (v.length < 10) return "Message must be at least 10 characters.";
      return "";
    default:
      return "";
  }
}

function validateAll(values) {
  const errors = {};
  Object.keys(EMPTY).forEach((key) => {
    const msg = validateField(key, values[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [sentName, setSentName] = useState("");

  // Thank you message kuch der baad khud chhup jaye
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => setStatus("idle"), 9000);
    return () => clearTimeout(t);
  }, [status]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (status === "success" || status === "error") setStatus("idle");
    if (touched[name]) setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // Spam bots ka chhupa hua field
    if (e.target.elements.company?.value) return;

    const found = validateAll(form);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });

    const firstBad = Object.keys(found)[0];
    if (firstBad) {
      document.querySelector(`.contact__form [name="${firstBad}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
          }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        const body = `${form.message.trim()}\n\nFrom: ${form.name.trim()} (${form.email.trim()})`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
          form.subject.trim()
        )}&body=${encodeURIComponent(body)}`;
      }
      setSentName(form.name.trim().split(" ")[0]);
      setForm(EMPTY);
      setErrors({});
      setTouched({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    { name: "name", Icon: FiUser, placeholder: "Your Name", type: "text", autoComplete: "name" },
    { name: "email", Icon: FiMail, placeholder: "Your Email", type: "email", autoComplete: "email" },
    { name: "subject", Icon: FiTag, placeholder: "Subject", type: "text", autoComplete: "off" },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__text">
          <p className="contact__eyebrow">
            <span className="contact__line" />
            GET IN TOUCH
          </p>
          <h2 className="contact__title">
            Let's Build Something <span className="contact__accent">Great</span>
          </h2>
          <p className="contact__sub">
            Have a project in mind, a question or just want to say hi? Feel free to reach out!
          </p>
          <ul className="contact__list">
            {details.map(({ Icon, text, href }) => (
              <li key={text}>
                <Icon size={20} className="contact__icon" />
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer">{text}</a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form className="contact__form" onSubmit={onSubmit} noValidate>
          {fields.map(({ name, Icon, placeholder, type, autoComplete }) => (
            <div className="contact__group" key={name}>
              <label className={`contact__field ${errors[name] ? "has-error" : ""}`}>
                <Icon />
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  aria-label={placeholder}
                  aria-invalid={errors[name] ? "true" : "false"}
                  aria-describedby={errors[name] ? `${name}-error` : undefined}
                />
              </label>
              {errors[name] && (
                <p className="contact__error" id={`${name}-error`} role="alert">
                  {errors[name]}
                </p>
              )}
            </div>
          ))}

          <div className="contact__group">
            <label className={`contact__field contact__field--area ${errors.message ? "has-error" : ""}`}>
              <FiMessageSquare />
              <textarea
                name="message"
                rows="4"
                maxLength={MAX_MESSAGE}
                value={form.message}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Your Message"
                aria-label="Your Message"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
            </label>
            <div className="contact__meta">
              {errors.message ? (
                <p className="contact__error" id="message-error" role="alert">
                  {errors.message}
                </p>
              ) : (
                <span />
              )}
              <span className="contact__count">
                {form.message.length}/{MAX_MESSAGE}
              </span>
            </div>
          </div>

          {/* Bots ke liye chhupa hua field, insaan ko nazar nahi aata */}
          <input type="text" name="company" tabIndex="-1" autoComplete="off" className="contact__hp" aria-hidden="true" />

          <button type="submit" className="contact__btn" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <span className="contact__spinner" aria-hidden="true" /> Sending...
              </>
            ) : (
              <>
                Send Message <FiSend />
              </>
            )}
          </button>

          {status === "success" && (
            <div className="contact__notice contact__notice--ok" role="status" aria-live="polite">
              <FiCheckCircle size={26} className="contact__notice-icon" />
              <div>
                <strong>Thank you{sentName ? `, ${sentName}` : ""}!</strong>
                <p>Your message has been sent. I'll get back to you as soon as possible.</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="contact__notice contact__notice--bad" role="alert">
              <FiAlertCircle size={26} className="contact__notice-icon" />
              <div>
                <strong>Something went wrong.</strong>
                <p>
                  Your message could not be sent. Please try again or email me at{" "}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

import { useState, useEffect } from "react";
import "./Floating.css";
// 👇 Apni WhatsApp image yahan se aayegi. File ka naam alag ho to sirf path badlo.
import whatsappImg from "./assets/Whatsepp.png";
import { FiArrowUp } from "react-icons/fi";

// 👇 Apna WhatsApp number yahan likho: country code ke saath, bina + ya space ke
// Pakistan example: 0300 1234567 -> "923001234567"
const WHATSAPP_NUMBER = "923152635232";
const MESSAGE = "Hello Abdullah, I saw your portfolio and would like to talk.";

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // Thoda neeche scroll karne par hi arrow dikhe
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <a
        className="float float--wa"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img className="float__img" src={whatsappImg} alt="WhatsApp" />
      </a>

      <button
        type="button"
        className={`float float--top ${showTop ? "is-visible" : ""}`}
        onClick={goTop}
        aria-label="Back to top"
      >
        <FiArrowUp size={24} />
      </button>
    </>
  );
}

export default FloatingButtons;

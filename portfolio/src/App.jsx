import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Project";   // file ke naam ke mutabiq
import WhyMe from "./WhyChoos";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingButtons from "./Floating";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
import Navbar from "./components/Navbar/Navbar";
import Intro from "../src/components/INTRO/Intro";
import Services from "../src/components/services/Services.jsx";
import "./App.css";
import Experience from "../src/components/Experience/Experience";
import Works from "../src/components/Works/Works";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Testimonial from "./components/Testimonials/Testimonial";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
      >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial></Testimonial>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
   
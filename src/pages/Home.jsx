import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

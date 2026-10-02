import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Sports from "./components/Sports";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Sports />
        <Campus />
        <Testimonials />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Elevate from './components/Elevate';
import Certifications from './components/Certifications';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Elevate />
        <Certifications />
        <CareerObjective />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

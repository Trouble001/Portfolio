import Navigation from './components/Navigation';
import AboutSection from './layouts/AboutSection';
import HeroSection from './layouts/HeroSection';
import './index.css';
import ServiceSection from './layouts/ServicelSection';
import ThemeToggle from './components/ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Projects from './layouts/Projects';
import ContactSection from './layouts/ContactSection';

const App = () => {
  const { setIsOpen } = useContext(ThemeContext);

  return (
    <div className='w-full h-full bg-white/100 dark:bg-black/100 transition-all'>
      <Navigation />
      <ThemeToggle />
      <div className='w-11/12 sm:w-11/12 md:w-10/12 lg:w-10/12 mx-auto' onClick={() => setIsOpen(false)}>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <Projects />
        <ContactSection />
      </div>
    </div>
  )
}

export default App;

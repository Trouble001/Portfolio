import Navigation from './components/Navigation';
import AboutSection from './layouts/AboutSection';
import HeroSection from './layouts/HeroSection';
import Skills from './layouts/Skills';
import SkillSection from './layouts/SkillSection';

const App = () => {

  return (
    <div className='w-full bg-white dark:bg-black/100 transition-all'>
      <Navigation />
      <div className='w-11/12 sm:w-11/12 md:w-10/12 lg:w-10/12 mx-auto'>
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  )
}

export default App;

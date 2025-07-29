import Navbar from '../components/Navbar';
import Intro from '../components/Intro'
import Services from '../pages/Serives'
import Designs from '../pages/Designs'
import '../styles/Home.css';
import Stats from '../components/stats';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import Footer from '../components/Footer';
import Works from '../pages/Works';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollTo = (e) => {
      const target = e.target.getAttribute('data-scrollto');
      if (target) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleScrollTo);
    return () => document.removeEventListener('click', handleScrollTo);
  }, []);

  return (
    <div className="home-container">
      <video className="bg-video" autoPlay loop muted>
        <source src="/Intro-video.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <Intro />
      <Stats />
      <Services />
      <Designs navigate={navigate} />
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
};
export default Home;

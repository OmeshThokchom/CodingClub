import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Orientation from './components/Orientation';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <main>
      {/* gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />

      {/* blur part */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]"></div>
      <div className="h-0 w-[50rem] absolute top-[30%] right-[-10%] shadow-[0_0_900px_20px_#e99b63] -rotate-[45deg]"></div>
      <div className="h-0 w-[60rem] absolute top-[40%] right-[-15%] shadow-[0_0_900px_20px_#e99b63] -rotate-[55deg]"></div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orientation" element={<Orientation />} />
      </Routes>
      <Footer />
    </main>
  );
}
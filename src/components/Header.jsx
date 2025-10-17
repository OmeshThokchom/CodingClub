import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 lg:px-20 transition-all duration-500 ${
        isScrolled ? 'py-2 bg-black bg-opacity-50 backdrop-blur-sm' : 'py-4'
      }`}>
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
      >
        CodeHive
      </h1>

      {/* Nav bar */}
      <nav className="hidden md:flex item-center gap-12">
        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-white z-50"
          to="/"
        >
          {' '}
          Home
        </Link>
                  <Link
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="text-base tracking-wider transition-colors hover:text-white z-50"
                    to="/about"
                  >
                    {' '}
                    About Us
                  </Link>
                  <Link
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="text-base tracking-wider transition-colors hover:text-white z-50"
                    to="/orientation"
                  >
                    {' '}
                    Orientation
                  </Link>      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        Community{' '}
      </button>

      {/* mobile view menu */}

      <button onClick={toggleMobileMenu} className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50">
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* mobile menu hidden by default */}

      <div
        id="mobileMenu"
        className={`fixed top-0 bottom-0 right-0 w-64 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 items-center mt-16">
          <Link
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/"
          >
            {' '}
            Home
          </Link>
          <Link
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/about"
          >
            {' '}
            About Us
          </Link>
          <Link
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/orientation"
          >
            {' '}
            Orientation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  // simple function to toggle the mobile menu
  const toggleMobileMenu = () => {
    const mibileMenu = document.getElementById('mobileMenu');

    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
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
        className="text-3x1 md:text-4x1 lg:texxt-5x1 font-light m-0"
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

      <button onClick={toggleMobileMenu} className="md:hidden text-3x1 p-2 z-50">
        <i class="bx bx-menu"></i>
      </button>

      {/* mobile menu hidden by default */}

      <div
        id="mobileMenu"
        className="hidden fixed top-0 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center">
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

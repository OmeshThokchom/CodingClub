import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-white pt-16 pb-8 mt-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">CodeHive Developer’s Club</h3>
            <p className="text-gray-400">
              Our Motto: “Learn, Build, Evolve, Together”
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className='bx bxl-linkedin-square text-2xl'></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className='bx bxl-github text-2xl'></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className='bx bxl-instagram-alt text-2xl'></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className='bx bxl-twitter text-2xl'></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {year} CodeHive Developer’s Club. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

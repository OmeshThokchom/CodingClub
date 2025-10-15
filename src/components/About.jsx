import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/500"
              alt="Our Team"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget
              aliquet nisl nisl sit amet nisl.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget
              aliquet nisl nisl sit amet nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

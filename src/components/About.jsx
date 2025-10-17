import React from 'react';
import 'boxicons/css/boxicons.min.css';
import LaserFlow from './laserFlow';
import DecryptedText from './decripted_text';
import './Timeline.css';

const teamMembers = [
  {
    name: 'Prince Gupta',
    role: 'President + Public Relations Head',
    bio: 'Leads the club, sets the vision, and manages public relations.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Abhinish Musahary',
    role: 'Vice President + Technical Head',
    bio: 'Supports the president and oversees all technical initiatives.',
    imageUrl: 'src/assets/members/Abinish.png',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Jeu Machahary',
    role: 'Secretary + Events & Logistics Head',
    bio: 'Manages records, communication, and coordinates club events.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Sujoy Singha',
    role: 'Associate Secretary',
    bio: 'Assists the secretary in communication, coordination, and follow-ups.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Dayananda Thokchom',
    role: 'Project Manager',
    bio: 'Manages and oversees various club projects.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Souman Dey',
    role: 'Design And Media Head',
    bio: 'Responsible for the club\'s design and media content.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Janvi O Kashyap',
    role: 'Treasurer',
    bio: 'Handles finances, budgeting, and maintains transparent accounts.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
];

const About = () => {
  return (
    <main className="flex pt-20 flex-col items-center justify-between min-h-[calc(90vh-6rem)]">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.3 }}>
        <LaserFlow />
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="max-w-6xl mx-auto px-4 z-10">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-center'>
          CodeHive Developer’s Club
        </h1>
        <p className='text-base sm:text-lg tracking-wider text-gray-400 text-center'>
          Our Motto: “Learn, Build, Evolve, Together”
        </p>

        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider my-4">Vision</h2>
          <p className="text-base sm:text-lg tracking-wider text-gray-400">
            Our vision is to build a community where every student who wants to code can code, empowered with the right guidance, mentorship, and opportunities. From helping freshers overcome their first coding challenges to supporting seniors in choosing the right competitions and preparing effectively, we aim to make coding accessible, collaborative, and inspiring for all at Royal Global University.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider my-4 text-center">Meet the Team</h2>
          <div className="timeline" data-aos="fade-in">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos="fade-up"
              >
                <div className="timeline-content">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4">
                      <img src={member.imageUrl} alt={member.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      <DecryptedText text={member.name} animateOn="view" />
                    </h3>
                    <p className="text-gray-400 text-center">
                      <DecryptedText text={member.role} animateOn="view" />
                    </p>
                    <p className="text-gray-500 mt-2 text-center">
                      <DecryptedText text={member.bio} animateOn="view" />
                    </p>
                    <div className="flex mt-4 space-x-4">
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className='bx bxl-linkedin-square text-2xl'></i>
                      </a>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className='bx bxl-github text-2xl'></i>
                      </a>
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className='bx bxl-instagram-alt text-2xl'></i>
                      </a>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className='bx bxl-twitter text-2xl'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider my-4">Objectives</h2>
          <ul className="list-disc list-inside text-base sm:text-lg tracking-wider text-gray-400">
            <li>Improve members coding, development, and problem-solving skills.</li>
            <li>Conduct workshops and sessions on current technologies.</li>
            <li>Encourage participation in coding contests and hackathons.</li>
            <li>Facilitate open-source contributions and tech projects.</li>
            <li>Build a community that shares resources and supports peer learning.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
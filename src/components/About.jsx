import React from 'react';
import 'boxicons/css/boxicons.min.css';
import LaserFlow from './laserFlow';
import DecryptedText from './decripted_text';
import './Timeline.css';

const teamMembers = [
  {
    name: 'Prince Gupta',
    role: 'President (B.Tech CSE 3rd Year)',
    bio: 'Leads the club, sets the vision, and oversees all activities.',
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
    role: 'Vice President (B.Tech CSE 3rd Year)',
    bio: 'Supports the president, coordinates teams, and ensures smooth functioning.',
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
    role: 'Secretary (B.Tech CSE 3rd Year)',
    bio: 'Manages records, communication, and scheduling for the club.',
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
    role: 'Joint Secretary (B.Tech CSE 3rd Year)',
    bio: 'Assists the secretary in communication, coordination, and follow-ups.',
    imageUrl: 'src/assets/members/Abinish.png',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Janvi O Kashyap',
    role: 'Treasurer (B.Tech CSE 2nd Year)',
    bio: 'Handles finances, budgeting, and maintains transparent accounts.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Jeu Machahary',
    role: 'Joint Treasurer (B.Tech CSE 2nd Year)',
    bio: 'Supports the treasurer in managing funds and tracking expenses.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
];

const mentors = [
  {
    name: 'Dr Rashel Sarkar',
    role: 'Mentor (Dept of CSE)',
    bio: 'Guides the club with his extensive experience in computer science.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Prof Spandan Barthakur',
    role: 'Mentor (Dept of CSE)',
    bio: 'Provides mentorship and support to the club members.',
    imageUrl: 'https://via.placeholder.com/150',
    social: {
      linkedin: '#',
      github: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    name: 'Bikash Baruah',
    role: 'Mentor (Dept of CSE)',
    bio: 'Helps students with their projects and technical skills.',
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
    <main className="flex lg:mt-20 flex-col items-center justify-between min-h-[calc(90vh-6rem)]">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.3 }}>
        <LaserFlow />
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="max-w-6xl mx-auto px-4 z-10 mt-[10%] md:mt-[5%] lg:mt-0">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-center'>
          Quantum Developer’s Club
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider my-4 text-center">Our Mentors</h2>
          <div className="timeline" data-aos="fade-in">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos="fade-up"
              >
                <div className="timeline-content">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4">
                      <img src={mentor.imageUrl} alt={mentor.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      <DecryptedText text={mentor.name} animateOn="view" />
                    </h3>
                    <p className="text-gray-400 text-center">
                      <DecryptedText text={mentor.role} animateOn="view" />
                    </p>
                    <p className="text-gray-500 mt-2 text-center">
                      <DecryptedText text={mentor.bio} animateOn="view" />
                    </p>
                    <div className="flex mt-4 space-x-4">
                      <a href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className='bx bxl-linkedin-square text-2xl'></i>
                      </a>
                      <a href={mentor.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className='bx bxl-github text-2xl'></i>
                      </a>
                      <a href={mentor.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className='bx bxl-instagram-alt text-2xl'></i>
                      </a>
                      <a href={mentor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
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
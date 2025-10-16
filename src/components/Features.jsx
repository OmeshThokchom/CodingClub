
import React from 'react';
import './Features.css';
import 'boxicons/css/boxicons.min.css';

const features = [
  {
    icon: 'bx bx-laptop',
    title: 'Workshops',
    description: 'Hands-on workshops on Web Dev, App Dev, Python, Git, AI/ML, and more.',
  },
  {
    icon: 'bx bx-trophy',
    title: 'Contests',
    description: 'Weekly coding contests on platforms like Codeforces and LeetCode.',
  },
  {
    icon: 'bx bx-code-alt',
    title: 'Hackathons',
    description: 'Participate in internal and external hackathons to build cool projects.',
  },
  {
    icon: 'bx bx-git-branch',
    title: 'Projects',
    description: 'Collaborate on open-source projects and contribute to the community.',
  },
  {
    icon: 'bx bx-group',
    title: 'Peer Learning',
    description: 'Weekly coding sessions and study groups to learn and grow together.',
  },
  {
    icon: 'bx bx-microphone',
    title: 'Tech Talks',
    description: 'Guest lectures from industry experts, alumni, and faculty.',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">What We Do</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <i className={feature.icon}></i>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

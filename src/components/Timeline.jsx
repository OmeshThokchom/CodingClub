import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    time: '10:00 - 10:10 AM',
    mission: 'Kickstart the Hive',
    description: 'Opening Address by the President - Vision Untacken !!',
    xp: '+10',
    color: '#e99b63', // Orange
    icon: 'bx bx-play-circle',
  },
  {
    time: '10:10 - 10:40 AM',
    mission: 'The Open House Talks',
    description: 'Three speakers - Three perspectives, One conversation on tech and creativity',
    xp: '+25',
    color: '#e99b63', // Orange
    icon: 'bx bx-group',
  },
  {
    time: '10:40 - 10:50 AM',
    mission: 'Meet the Core Team',
    description: 'Discover the minds behind the hive and their roles.',
    xp: '+10',
    color: '#e99b63', // Orange
    icon: 'bx bx-user-pin',
  },
  {
    time: '10:50 - 11:10 AM',
    mission: 'Official Launch Reveal',
    description: "Lights music & the moment we'll rememberl",
    xp: '+30',
    color: '#e99b63', // Orange
    icon: 'bx bx-rocket',
  },
  {
    time: '11:10 - 11:30 AM',
    mission: 'Future Buzz',
    description: 'Expiore our roadimap - workshops. hackarnons. and coding times.',
    xp: '+30',
    color: '#e99b63', // Orange
    icon: 'bx bx-bulb',
  },
  {
    time: '11:50 - 12:00 PM',
    mission: 'Networking Arena',
    description: 'Talis- Connect - Ask - Collaborate.',
    xp: '+15',
    color: '#e99b63', // Orange
    icon: 'bx bx-network-chart',
  },
];

const Timeline = () => {
  return (
    <section className="timeline" id="timeline">
      <h2 className="section-title">Quest Map: The Agenda</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index} data-aos="fade-up">
            <div className="timeline-node">
              <i className={item.icon}></i>
            </div>
            <div className="timeline-content-wrapper">
              <span className="timeline-time">{item.time}</span>
              <h3 className="timeline-mission">{item.mission}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
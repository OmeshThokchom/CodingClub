
import React from 'react';
import './Orientation.css'; // Assuming you'll create this CSS file

const Orientation = () => {
  return (
    <section className="orientation-day" id="orientation-day">
      <div className="orientation-content">
        <h2 className="event-title" data-aos="fade-down">ORIENTATION DAY 2025</h2>
        <p className="event-details" data-aos="fade-right">
          <i class='bx bx-calendar'></i> 4 November 2025
        </p>
        <p className="event-details" data-aos="fade-left">
          <i class='bx bx-time-five'></i> 10 AM - 12 PM
        </p>
        <p className="event-details" data-aos="fade-right">
          <i class='bx bx-map'></i> Royal Global University
        </p>
        <p className="event-slogan" data-aos="fade-up">
          Step into the hive - where code meets creativity and ideas come alive.
        </p>

        {/* Event Features */}
        <div className="event-features grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="feature-item" data-aos="zoom-in">
            <i class='bx bx-microphone text-4xl'></i>
            <p>Live Speakers</p>
          </div>
          <div className="feature-item" data-aos="zoom-in" data-aos-delay="100">
            <i class='bx bx-conversation text-4xl'></i>
            <p>Open House Discussion</p>
          </div>
          <div className="feature-item" data-aos="zoom-in" data-aos-delay="200">
            <i class='bx bx-rocket text-4xl'></i>
            <p>Launch Reveal</p>
          </div>
          <div className="feature-item" data-aos="zoom-in" data-aos-delay="300">
            <i class='bx bx-network-chart text-4xl'></i>
            <p>Networking Arena</p>
          </div>
        </div>

        <div className="rewards-section my-8 text-center">
          <p className="text-xl" data-aos="fade-right">
            <i class='bx bx-plus-medical'></i> +100 for showing up
          </p>
          <p className="text-xl" data-aos="fade-left">
            <i class='bx bx-award'></i> Achievement: Joined The Hive
          </p>
        </div>

        {/* Timeline Infographic */}
        <div className="timeline-infographic my-12">
          <h3 className="text-3xl font-semibold text-center mb-12" data-aos="fade-down">
            CLUB JOURNEY
          </h3>
          <div className="timeline-container">
            {[
              {
                year: '2025',
                time: '10:00 - 10:10 AM',
                title: 'Kickstart the Hive',
                description: 'Opening Address by the President - Vision Unlocked!',
                icon: 'bx bx-rocket',
                xp: '+10',
              },
              {
                year: '2025',
                time: '10:10 - 10:40 AM',
                title: 'The Open House Talks',
                description: 'Three speakers - Three perspectives, One conversation on tech and creativity',
                icon: 'bx bx-group',
                xp: '+25',
              },
              {
                year: '2025',
                time: '10:40 - 10:50 AM',
                title: 'Meet the Core Team',
                description: 'Discover the minds behind the hive and their roles.',
                icon: 'bx bx-user-voice',
                xp: '+10',
              },
              {
                year: '2025',
                time: '10:50 - 11:10 AM',
                title: 'Official Launch Reveal',
                description: 'Lights, music & the moment we\'ll remember!',
                icon: 'bx bx-trophy',
                xp: '+30',
              },
              {
                year: '2025',
                time: '11:10 - 11:30 AM',
                title: 'Future Buzz',
                description: 'Explore our roadmap - workshops, hackathons, and coding times.',
                icon: 'bx bx-bulb',
                xp: '+30',
              },
              {
                year: '2025',
                time: '11:50 - 12:00 PM',
                title: 'Networking Arena',
                description: 'Talks - Connect - Ask - Collaborate.',
                icon: 'bx bx-network-chart',
                xp: '+15',
              },
            ].map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content" data-aos="fade-up">
                  <div className="timeline-year-time">
                    <span className="timeline-year">{event.year}</span>
                    <span className="timeline-time">{event.time}</span>
                  </div>
                  <div className="timeline-icon"><i className={event.icon}></i></div>
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-description">{event.description}</p>
                  <div className="timeline-xp">{event.xp} XP</div>
                </div>
              </div>
            ))}
          </div>
          <div className="total-xp-section text-center mt-6 text-xl font-semibold" data-aos="fade-up" data-aos-delay="600">
            <p>Total XP: 110 — Level Up UNLOCKED! <i class='bx bx-trophy'></i> Build Unlocked!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orientation;

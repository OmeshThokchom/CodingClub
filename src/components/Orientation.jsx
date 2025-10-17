
import React from 'react';
import './Orientation.css'; // Assuming you'll create this CSS file

const Orientation = () => {
  return (
    <section className="orientation-day pt-20" id="orientation-day">
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

        {/* Quest Map: The Agenda */}
        <div className="quest-map-agenda my-12 w-full max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-6" data-aos="fade-down">
            QUEST MAP: THE AGENDA
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-700 text-left text-gray-300 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">Time</th>
                  <th className="py-3 px-6">Mission</th>
                  <th className="py-3 px-6">Description</th>
                  <th className="py-3 px-6">XP</th>
                </tr>
              </thead>
              <tbody className="text-gray-200 text-sm font-light">
                <tr className="border-b border-gray-700 hover:bg-gray-900" data-aos="fade-up">
                  <td className="py-3 px-6 whitespace-nowrap">10:00 - 10:10 AM</td>
                  <td className="py-3 px-6"><i class='bx bx-chevrons-right'></i> Kickstart the Hive</td>
                  <td className="py-3 px-6">Opening Address by the President - Vision Unlocked!</td>
                  <td className="py-3 px-6">+10 XP</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-900" data-aos="fade-up" data-aos-delay="100">
                  <td className="py-3 px-6 whitespace-nowrap">10:10 - 10:40 AM</td>
                  <td className="py-3 px-6"><i class='bx bx-group'></i> The Open House Talks</td>
                  <td className="py-3 px-6">Three speakers - Three perspectives, One conversation on tech and creativity</td>
                  <td className="py-3 px-6">+25 XP</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-900" data-aos="fade-up" data-aos-delay="200">
                  <td className="py-3 px-6 whitespace-nowrap">10:40 - 10:50 AM</td>
                  <td className="py-3 px-6"><i class='bx bx-user-voice'></i> Meet the Core Team</td>
                  <td className="py-3 px-6">Discover the minds behind the hive and their roles.</td>
                  <td className="py-3 px-6">+10 XP</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-900" data-aos="fade-up" data-aos-delay="300">
                  <td className="py-3 px-6 whitespace-nowrap">10:50 - 11:10 AM</td>
                  <td className="py-3 px-6"><i class='bx bx-rocket'></i> Official Launch Reveal</td>
                  <td className="py-3 px-6">Lights, music & the moment we\'ll remember!</td>
                  <td className="py-3 px-6">+30 XP</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-900" data-aos="fade-up" data-aos-delay="400">
                  <td className="py-3 px-6 whitespace-nowrap">11:10 - 11:30 AM</td>
                  <td className="py-3 px-6"><i class='bx bx-bulb'></i> Future Buzz</td>
                  <td className="py-3 px-6">Explore our roadmap - workshops, hackathons, and coding times.</td>
                  <td className="py-3 px-6">+30 XP</td>
                </tr>
                <tr className="hover:bg-gray-900" data-aos="fade-up" data-aos-delay="500">
                  <td className="py-3 px-6 whitespace-nowrap">11:50 - 12:00 PM</td>
                  <td className="py-3 px-6"><i class='bx bx-network-chart'></i> Networking Arena</td>
                  <td className="py-3 px-6">Talks - Connect - Ask - Collaborate.</td>
                  <td className="py-3 px-6">+15 XP</td>
                </tr>
              </tbody>
            </table>
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

import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <motion.div 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About Pooja Real Estate</h1>
        <p>Your Trusted Partner in Finding the Perfect Home</p>
      </motion.div>


      {/* Stats Section */}
      <motion.div 
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="stat-item">
          <h3>10+</h3>
          <p>Properties Listed</p>
        </div>
        <div className="stat-item">
          <h3>12+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>2+</h3>
          <p>Cities Covered</p>
        </div>
        {/* <div className="stat-item">
          <h3>100+</h3>
          <p>Expert Agents</p>
        </div> */}
      </motion.div>

      {/* Team Section */}
      <motion.div 
        className="team-section"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Web Developer Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="team-member"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        className="values-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <i className="fas fa-heart"></i>
            <h3>Trust</h3>
            <p>Building lasting relationships through transparency and integrity</p>
          </div>
          <div className="value-item">
            <i className="fas fa-star"></i>
            <h3>Excellence</h3>
            <p>Delivering exceptional service and results</p>
          </div>
          <div className="value-item">
            <i className="fas fa-handshake"></i>
            <h3>Commitment</h3>
            <p>Dedicated to your success in finding the perfect property</p>
          </div>
          <div className="value-item">
            <i className="fas fa-users"></i>
            <h3>Community</h3>
            <p>Creating positive impact in the communities we serve</p>
          </div>
        </div>
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div 
        className="cta-section"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Find Your Dream Home?</h2>
        <p>Let us help you navigate your next real estate journey</p>
        <button onClick={() => window.location.href='/contact'}>Contact Us Today</button>
      </motion.div>
    </div>
  );
};

// Team members data
const teamMembers = [
  {
    name: "Dev Patel",
    position: "Frontend & Backend Developer",
    image: "/dev.jpg"
  },
  {
    name: "Jash Parekh",
    position: "Backend & AIML Developer",
    image: "/Jash.jpg"
  },
  {
    name: "Darsh Patel",
    position: "Frontend Developer",
    image: "/darsh.jpg"
  }
];

export default About;

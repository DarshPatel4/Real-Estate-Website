import { motion } from "framer-motion";
import "./agents.scss";

const Agents = () => {
  return (
    <div className="agents-page">
      {/* Hero Section */}
      <motion.div 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Our Expert Agents</h1>
        <p>Meet the professionals who make dreams come true</p>
      </motion.div>

      {/* Agents Grid */}
      <div className="agents-container">
        {agents.map((agent, index) => (
          <motion.div 
            className="agent-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="agent-image">
              <img src={agent.image} alt={agent.name} />
              <div className="social-links">
                <a href={agent.social.linkedin}><i className="fab fa-linkedin"></i></a>
                <a href={agent.social.twitter}><i className="fab fa-twitter"></i></a>
                <a href={`mailto:${agent.email}`}><i className="fas fa-envelope"></i></a>
              </div>
            </div>
            <div className="agent-info">
              <h3>{agent.name}</h3>
              <p className="position">{agent.position}</p>
              <p className="experience">{agent.experience} Years Experience</p>
              <div className="stats">
                <div className="stat">
                  <span>{agent.properties}</span>
                  <p>Properties</p>
                </div>
                <div className="stat">
                  <span>{agent.deals}</span>
                  <p>Deals Closed</p>
                </div>
              </div>
              <div className="contact-info">
                <p><i className="fas fa-phone"></i> {agent.phone}</p>
                <p><i className="fas fa-envelope"></i> {agent.email}</p>
              </div>
              <button className="contact-btn">Contact Agent</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const agents = [
  {
    name: "Ayush Rupani",
    position: "Senior Property Consultant",
    experience: 8,
    properties: 150,
    deals: 120,
    phone: "+91 98765 43210",
    email: "ayushrupani@gmail.com",
    image: "/prof1.jpeg",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jay",
    position: "Luxury Property Specialist",
    experience: 6,
    properties: 90,
    deals: 75,
    phone: "+91 98765 43211",
    email: "jayrupani@gmail.com",
    image: "/prof2.jpeg",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default Agents; 
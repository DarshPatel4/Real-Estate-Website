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
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          {[
            "Welcome to our platform! We are dedicated to providing the best services to our users by leveraging cutting-edge technology and innovative design.",
            "Our mission is to enhance user experience, ensure seamless interactions, and continuously improve our offerings.",
            "We value your feedback and are always open to suggestions. Feel free to reach out to us for any inquiries or collaborations. Let's build something amazing together!",
          ].map((text, index) => (
            <motion.p
              key={index}
              custom={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {text}
            </motion.p>
          ))}
        </div>
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/public/about_img.webp" alt="About Us" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

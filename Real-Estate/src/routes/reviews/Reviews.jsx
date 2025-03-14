import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './reviews.scss';

const Reviews = () => {
  const [activeTab, setActiveTab] = useState('Societies');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const navigate = useNavigate();

  const societies = [
    {
      name: "Runwal Bliss",
      location: "Kanjurmarg East, Mumbai",
      rating: 4.0,
      reviews: 1,
      positives: [
        {
          text: "Strong & Sturdy Construction Quality",
          score: "+3"
        }
      ],
      negatives: [
        {
          text: "Non-functional or Unusable Amenities",
          score: null
        }
      ]
    },
    {
      name: "Omkar Alta Monte",
      location: "Malad East, Mumbai",
      rating: 4.7,
      reviews: 9,
      positives: [
        {
          text: "Timely Project Delivery",
          score: "+10"
        }
      ],
      negatives: [
        {
          text: "Non-functional or Unusable Amenities",
          score: "+3"
        }
      ]
    },
    // Add more societies as needed
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < Math.floor(rating) ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="reviews-page">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'Societies' ? 'active' : ''}`}
          onClick={() => setActiveTab('Societies')}
        >
          <i className="fas fa-building"></i>
          Societies
        </button>
        <button 
          className={`tab ${activeTab === 'Localities' ? 'active' : ''}`}
          onClick={() => setActiveTab('Localities')}
        >
          <i className="fas fa-map-marker-alt"></i>
          Localities
        </button>
      </div>

      <div className="filter-section">
        <h2>Showing {societies.length} of 622 Societies in {selectedCity}</h2>
        <select 
          value={selectedCity} 
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      <div className="societies-list">
        {societies.map((society, index) => (
          <motion.div 
            key={index}
            className="society-card"
            onClick={() => navigate(`/reviews/${society.name.toLowerCase().replace(/\s+/g, '-')}`)}
            style={{ cursor: 'pointer' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="society-info">
              <div className="header">
                <h3>{society.name} <i className="fas fa-external-link-alt"></i></h3>
                <p className="location">{society.location}</p>
              </div>
              
              <div className="rating-section">
                <div className="rating">
                  <span className="rating-number">{society.rating}</span>
                  <div className="stars">
                    {renderStars(society.rating)}
                  </div>
                </div>
                <a href="#" className="reviews-link">
                  {society.reviews} Reviews for {society.name}
                </a>
              </div>
            </div>

            <div className="feedback-section">
              <div className="good-points">
                <h4>What's good</h4>
                {society.positives.map((point, idx) => (
                  <div key={idx} className="point positive">
                    <span>{point.text}</span>
                    {point.score && <span className="score">{point.score}</span>}
                  </div>
                ))}
              </div>

              <div className="bad-points">
                <h4>What's Bad</h4>
                {society.negatives.map((point, idx) => (
                  <div key={idx} className="point negative">
                    <span>{point.text}</span>
                    {point.score && <span className="score">{point.score}</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews; 
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './reviewDetail.scss';

const ReviewDetail = () => {
  const { id } = useParams();
  
  // Example data - you should fetch this based on the id
  const propertyData = {
    name: "Runwal Bliss",
    location: "Kanjurmarg East, Mumbai",
    rating: 4.0,
    totalRatings: 1,
    price: "₹ 29,141 Per Sq. Ft Onwards",
    image: "/property/runwal-bliss.jpg",
    ratings: {
      5: 0,
      4: 1,
      3: 0,
      2: 0,
      1: 0
    },
    positives: [
      "Strong & Sturdy Construction Quality",
      "Spacious & Large Room Sizes",
      "Good Safety & Security Protocols",
      "Lots of Green & Open Areas"
    ],
    negatives: [
      "Non-functional or Unusable Amenities"
    ],
    videos: [
      {
        thumbnail: "/property/video-thumb.jpg",
        url: "#",
        rating: 4
      }
    ]
  };

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
    <div className="review-detail-page">
      <motion.div 
        className="property-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="property-image">
          <img src={propertyData.image} alt={propertyData.name} />
        </div>
        <div className="property-info">
          <h1>{propertyData.name}</h1>
          <p className="location">{propertyData.location}</p>
          <p className="price">{propertyData.price}</p>
          <div className="buttons">
            <button className="details-btn">Details</button>
            <button className="call-btn">Get a Call Back</button>
          </div>
        </div>
      </motion.div>

      <div className="review-content">
        <motion.div 
          className="rating-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Ratings & Reviews of {propertyData.name}</h2>
          <div className="rating-distribution">
            <div className="overall-rating">
              <span className="rating-number">{propertyData.rating}</span>
              <div className="stars">{renderStars(propertyData.rating)}</div>
              <span className="total-ratings">{propertyData.totalRatings} Rating</span>
            </div>
            <div className="rating-bars">
              {Object.entries(propertyData.ratings).reverse().map(([stars, count]) => (
                <div key={stars} className="rating-bar">
                  <span className="star-label">{stars} Star</span>
                  <div className="bar-container">
                    <div 
                      className="bar" 
                      style={{ 
                        width: `${(count / propertyData.totalRatings) * 100}%`,
                        backgroundColor: stars >= 4 ? '#fece51' : '#ddd'
                      }}
                    ></div>
                  </div>
                  <span className="count">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="feedback-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="good-points">
            <h3>
              <i className="fas fa-thumbs-up"></i>
              What's good
            </h3>
            {propertyData.positives.map((point, index) => (
              <div key={index} className="point positive">
                {point}
              </div>
            ))}
          </div>

          <div className="bad-points">
            <h3>
              <i className="fas fa-thumbs-down"></i>
              What's Bad
            </h3>
            {propertyData.negatives.map((point, index) => (
              <div key={index} className="point negative">
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="media-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Video</h3>
          <div className="videos-grid">
            {propertyData.videos.map((video, index) => (
              <div key={index} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt="Video thumbnail" />
                  <div className="play-button">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <div className="video-rating">
                  {renderStars(video.rating)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewDetail; 
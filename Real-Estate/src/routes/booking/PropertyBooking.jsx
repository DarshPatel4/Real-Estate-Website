import React, { useState } from "react";
import "./PropertyBooking.scss";
import BookingConfirmation from "../../components/bookingConfirmation/BookingConfirmation";
import emailjs from '@emailjs/browser';

const PropertyBooking = () => {
  const [selectedDate, setSelectedDate] = useState("Mon 29");
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const propertyImages = [
    "/public/property/prop1.webp",
    "/public/property/prop2.jpg",
    "/public/property/prop3.jpg",
  ];

  const dates = ["Mon 29", "Tue 30", "Wed 31", "Thu 1", "Fri 2", "Sat 3", "Sun 4"];
  const morningSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];
  const afternoonSlots = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

    // Image slider functionality
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % propertyImages.length);
      };
    
      const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
      };

  const sendConfirmationEmail = () => {
    const templateParams = {
      to_email: "darshpatel2531@gmail.com",
      booking_date: selectedDate,
      booking_time: selectedTime,
      property_name: "Luxury Villa",
      property_address: "1234 Beverly Hills, CA 90210",
      contact_number: "(555) 123-4567",
      booking_reference: `BOOK-${Date.now().toString(36)}`,
    };

    emailjs.send(
      'service_7jv2zon', // Replace with your EmailJS service ID
      'template_6kvaict', // Replace with your EmailJS template ID
      templateParams,
      '4WiDtRhJy787_BBld' // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }
    
    // Send confirmation email
    sendConfirmationEmail();
    
    // Show confirmation popup
    setShowConfirmation(true);
  };

  return (
    <div className="property-booking-container">
      {/* Booking Form */}
      <div className="booking-section">
        <h2>Book a Property Visit</h2>
        
        {/* Date Selection */}
        <h4>Select Date</h4>
        <div className="date-selection">
          {dates.map((date, index) => (
            <button 
              key={index} 
              className={selectedDate === date ? "selected" : ""}
              onClick={() => setSelectedDate(date)}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Time Selection */}
        <h4>Select Time</h4>
        <div className="time-section">
          <div className="time-group">
            <h5>Morning</h5>
            <div className="time-selection">
              {morningSlots.map((time, index) => (
                <button 
                  key={index} 
                  className={selectedTime === time ? "selected" : ""}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="time-group">
            <h5>Afternoon</h5>
            <div className="time-selection">
              {afternoonSlots.map((time, index) => (
                <button 
                  key={index} 
                  className={selectedTime === time ? "selected" : ""}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <button type="submit" className="book-button">Confirm Booking</button>
        </form>
      </div>

      {/* Property Details */}
      <div className="property-details">
        {/* <img className="property-image" src="/assets/property.jpg" alt="Property" /> */}
                {/* Image Slider */}
                <div className="image-slider">
          <button onClick={prevImage} className="slider-btn">❮</button>
          <img src={propertyImages[currentImage]} alt="Property" />
          <button onClick={nextImage} className="slider-btn">❯</button>
        </div>

        <h3>Luxury Villa</h3>
        <p>1234 Beverly Hills, CA 90210</p>
        <p><strong>Contact:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> contact@eliterealty.com</p>
      </div>

      {/* Add the confirmation popup */}
      <BookingConfirmation 
        isOpen={showConfirmation} 
        onClose={() => setShowConfirmation(false)}
      />
    </div>
  );
};

export default PropertyBooking;

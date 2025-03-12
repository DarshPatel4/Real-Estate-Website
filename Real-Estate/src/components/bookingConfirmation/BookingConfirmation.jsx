import { motion } from "framer-motion";
import "./bookingConfirmation.scss";

const BookingConfirmation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="booking-confirmation-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="confirmation-modal"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <h2>Booking Confirmed!</h2>
        <p>Your property viewing has been successfully scheduled.</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default BookingConfirmation; 
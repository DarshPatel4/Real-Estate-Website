import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCards.scss';

const ContactCards = () => {
  const contacts = [
    { id: 1, name: 'Customer Support', path: '/customer-support' },
    { id: 2, name: 'Frequently Asked Questions', path: '/faqs' },
    // Add more contacts as needed
  ];

  return (
    <div className="contact-cards">
      {contacts.map(contact => (
        <Link to={contact.path} key={contact.id} className="contact-card">
          <div className="card-content">
            <h3>{contact.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactCards;
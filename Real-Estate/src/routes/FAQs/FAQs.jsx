import React from 'react';
import './FAQs.scss';

const FAQs = () => {
  const faqs = [
    { question: 'What is the return policy?', answer: 'Our return policy is 30 days.' },
    { question: 'How do I track my order?', answer: 'You can track your order using the tracking number provided in the confirmation email.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faqs">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
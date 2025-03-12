import { useState } from 'react';
import { motion } from 'framer-motion';
import './emiCalculator.scss';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const ratePerMonth = parseFloat(interestRate) / 12 / 100;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const emiAmount = principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments) / (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);
    const totalPayment = emiAmount * numberOfPayments;
    const totalInterestPayment = totalPayment - principal;

    setEmi(emiAmount);
    setTotalInterest(totalInterestPayment);
    setTotalAmount(totalPayment);
  };

  return (
    <div className="emi-calculator">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>EMI Calculator</h1>
        <p>Plan your home loan with our easy EMI calculator</p>
      </motion.div>

      <div className="calculator-container">
        <div className="input-section">
          <div className="input-group">
            <label>Loan Amount (₹)</label>
            <input
              type="range"
              min="100000"
              max="10000000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Interest Rate (%)</label>
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Loan Term (Years)</label>
            <input
              type="range"
              min="1"
              max="30"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>

          <button onClick={calculateEMI}>Calculate EMI</button>
        </div>

        <div className="results-section">
          <div className="result-card">
            <h3>Monthly EMI</h3>
            <p>₹ {emi.toFixed(2)}</p>
          </div>

          <div className="result-card">
            <h3>Total Interest</h3>
            <p>₹ {totalInterest.toFixed(2)}</p>
          </div>

          <div className="result-card">
            <h3>Total Amount</h3>
            <p>₹ {totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator; 
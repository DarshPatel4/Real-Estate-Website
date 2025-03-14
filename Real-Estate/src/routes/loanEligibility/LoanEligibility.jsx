import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './loanEligibility.scss';

const LoanEligibility = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(20000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [eligibleAmount, setEligibleAmount] = useState(0);

  const calculateEligibility = () => {
    const netIncome = monthlyIncome - monthlyExpenses - existingEMI;
    const maxEMI = netIncome * 0.5; // 50% of net income
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;

    // EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
    // Solving for P (Principal)
    const eligible = (maxEMI * (Math.pow(1 + ratePerMonth, numberOfPayments) - 1)) / 
                    (ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments));
    
    setEligibleAmount(Math.round(eligible));
  };

  const pieData = [
    { name: 'Monthly Income', value: parseInt(monthlyIncome) },
    { name: 'Monthly Expenses', value: parseInt(monthlyExpenses) },
    { name: 'Existing EMI', value: parseInt(existingEMI) }
  ];

  const COLORS = ['#fece51', '#ff7676', '#36b9cc'];

  return (
    <div className="loan-eligibility">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Loan Eligibility Calculator</h1>
        <p>Find out how much home loan you can get</p>
      </motion.div>

      <div className="calculator-container">
        <div className="input-section">
          <div className="input-group">
            <label>Monthly Income (₹)</label>
            <input
              type="range"
              min="10000"
              max="1000000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
            />
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Monthly Expenses (₹)</label>
            <input
              type="range"
              min="0"
              max={monthlyIncome}
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(e.target.value)}
            />
            <input
              type="number"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Existing EMI (₹)</label>
            <input
              type="range"
              min="0"
              max={monthlyIncome - monthlyExpenses}
              value={existingEMI}
              onChange={(e) => setExistingEMI(e.target.value)}
            />
            <input
              type="number"
              value={existingEMI}
              onChange={(e) => setExistingEMI(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Loan Term (Years)</label>
            <input
              type="range"
              min="5"
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

          <button onClick={calculateEligibility}>Calculate Eligibility</button>
        </div>

        <div className="results-section">
          <div className="chart-container">
            <h3>Income Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="eligibility-result">
            <h3>Eligible Loan Amount</h3>
            <p className="amount">₹ {eligibleAmount.toLocaleString()}</p>
            <div className="info-grid">
              <div className="info-item">
                <span>Maximum EMI</span>
                <p>₹ {Math.round((monthlyIncome - monthlyExpenses - existingEMI) * 0.5).toLocaleString()}</p>
              </div>
              <div className="info-item">
                <span>Net Income</span>
                <p>₹ {(monthlyIncome - monthlyExpenses - existingEMI).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibility; 
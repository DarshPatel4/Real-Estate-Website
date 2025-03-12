import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './areaConverter.scss';

const AreaConverter = () => {
  const [value, setValue] = useState(100);
  const [fromUnit, setFromUnit] = useState('sqft');
  const [toUnit, setToUnit] = useState('sqm');

  const conversionRates = {
    sqft: {
      sqft: 1,
      sqm: 0.092903,
      sqyd: 0.111111,
      acre: 0.0000229568,
      hectare: 0.00000929,
      bigha: 0.0000459136
    },
    sqm: {
      sqft: 10.7639,
      sqm: 1,
      sqyd: 1.19599,
      acre: 0.000247105,
      hectare: 0.0001,
      bigha: 0.000494228
    },
    // Add other conversion rates
  };

  const units = [
    { value: 'sqft', label: 'Square Feet (sq ft)' },
    { value: 'sqm', label: 'Square Meter (sq m)' },
    { value: 'sqyd', label: 'Square Yard (sq yd)' },
    { value: 'acre', label: 'Acre' },
    { value: 'hectare', label: 'Hectare' },
    { value: 'bigha', label: 'Bigha' }
  ];

  const convert = (value, from, to) => {
    return value * conversionRates[from][to];
  };

  const getComparisonData = () => {
    return units.map(unit => ({
      name: unit.value,
      value: convert(value, fromUnit, unit.value)
    }));
  };

  return (
    <div className="area-converter">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Area Converter</h1>
        <p>Convert property areas between different units</p>
      </motion.div>

      <div className="converter-container">
        <div className="input-section">
          <div className="input-group">
            <label>Enter Value</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              min="0"
            />
          </div>

          <div className="unit-selectors">
            <div className="select-group">
              <label>From</label>
              <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                {units.map(unit => (
                  <option key={unit.value} value={unit.value}>{unit.label}</option>
                ))}
              </select>
            </div>

            <div className="select-group">
              <label>To</label>
              <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                {units.map(unit => (
                  <option key={unit.value} value={unit.value}>{unit.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="result">
            <h3>Result</h3>
            <p className="converted-value">
              {convert(value, fromUnit, toUnit).toFixed(4)} {toUnit}
            </p>
          </div>
        </div>

        <div className="visualization-section">
          <h3>Comparison Chart</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={getComparisonData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#fece51" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter; 
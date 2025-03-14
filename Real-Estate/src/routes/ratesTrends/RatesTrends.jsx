import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ratesTrends.scss';

const RatesTrends = () => {
  const [selectedCity, setSelectedCity] = useState('Ahmedabad');
  const [propertyType, setPropertyType] = useState('Residential');

  const trendData = {
    Ahmedabad: {
      Residential: {
        currentRate: "₹5,500/sqft",
        yearlyGrowth: "7.2%",
        prediction: "Expected to rise by 8% in 2025",
        hotAreas: ["Bopal", "SG Highway", "Satellite"],
        priceRange: "₹45L - ₹2.5Cr",
        historicalData: [
          { year: 2019, price: 4800 },
          { year: 2020, price: 4950 },
          { year: 2021, price: 5100 },
          { year: 2022, price: 5300 },
          { year: 2023, price: 5500 },
          { year: 2024, price: 5940 },
          { year: 2025, price: 6415 },
        ]
      },
      Commercial: {
        currentRate: "₹7,800/sqft",
        yearlyGrowth: "6.5%",
        prediction: "Stable growth expected",
        hotAreas: ["CG Road", "Prahlad Nagar", "GIFT City"],
        priceRange: "₹1Cr - ₹10Cr",
        historicalData: [
          { year: 2019, price: 6500 },
          { year: 2020, price: 6800 },
          { year: 2021, price: 7100 },
          { year: 2022, price: 7500 },
          { year: 2023, price: 7800 },
          { year: 2024, price: 8300 },
          { year: 2025, price: 8820 },
        ]
      }
    },
    Surat: {
      Residential: {
        currentRate: "₹4,800/sqft",
        yearlyGrowth: "6.8%",
        prediction: "Expected to rise by 7.5% in 2025",
        hotAreas: ["Vesu", "Adajan", "Pal"],
        priceRange: "₹35L - ₹1.8Cr",
        historicalData: [
          { year: 2019, price: 4000 },
          { year: 2020, price: 4200 },
          { year: 2021, price: 4400 },
          { year: 2022, price: 4600 },
          { year: 2023, price: 4800 },
          { year: 2024, price: 5160 },
          { year: 2025, price: 5547 },
        ]
      },
      Commercial: {
        currentRate: "₹6,500/sqft",
        yearlyGrowth: "6.0%",
        prediction: "Moderate growth expected",
        hotAreas: ["Ring Road", "Ghod Dod Road", "Piplod"],
        priceRange: "₹80L - ₹7Cr",
        historicalData: [
          { year: 2019, price: 5500 },
          { year: 2020, price: 5800 },
          { year: 2021, price: 6000 },
          { year: 2022, price: 6200 },
          { year: 2023, price: 6500 },
          { year: 2024, price: 6890 },
          { year: 2025, price: 7300 },
        ]
      }
    },
    Vadodara: {
      Residential: {
        currentRate: "₹4,200/sqft",
        yearlyGrowth: "5.8%",
        prediction: "Expected to rise by 6.5% in 2025",
        hotAreas: ["Alkapuri", "Gotri", "Vasna Road"],
        priceRange: "₹30L - ₹1.5Cr",
        historicalData: [
          { year: 2019, price: 3600 },
          { year: 2020, price: 3750 },
          { year: 2021, price: 3900 },
          { year: 2022, price: 4050 },
          { year: 2023, price: 4200 },
          { year: 2024, price: 4473 },
          { year: 2025, price: 4757 },
        ]
      },
      Commercial: {
        currentRate: "₹5,800/sqft",
        yearlyGrowth: "5.5%",
        prediction: "Stable growth expected",
        hotAreas: ["Race Course", "Old Padra Road", "Akota"],
        priceRange: "₹70L - ₹6Cr",
        historicalData: [
          { year: 2019, price: 5000 },
          { year: 2020, price: 5200 },
          { year: 2021, price: 5400 },
          { year: 2022, price: 5600 },
          { year: 2023, price: 5800 },
          { year: 2024, price: 6119 },
          { year: 2025, price: 6450 },
        ]
      }
    },
    Rajkot: {
      Residential: {
        currentRate: "₹4,300/sqft",
        yearlyGrowth: "6.0%",
        prediction: "Expected to rise by 6.8% in 2025",
        hotAreas: ["Kalawad Road", "Mavdi", "150 Feet Ring Road"],
        priceRange: "₹35L - ₹1.7Cr",
        historicalData: [
          { year: 2019, price: 3700 },
          { year: 2020, price: 3900 },
          { year: 2021, price: 4100 },
          { year: 2022, price: 4300 },
          { year: 2023, price: 4500 },
          { year: 2024, price: 4797 },
          { year: 2025, price: 5125 },
        ]
      },
      Commercial: {
        currentRate: "₹6,200/sqft",
        yearlyGrowth: "5.7%",
        prediction: "Moderate growth expected",
        hotAreas: ["Yagnik Road", "Jubilee Garden", "Greenland Circle"],
        priceRange: "₹85L - ₹7.5Cr",
        historicalData: [
          { year: 2019, price: 5500 },
          { year: 2020, price: 5700 },
          { year: 2021, price: 5900 },
          { year: 2022, price: 6100 },
          { year: 2023, price: 6200 },
          { year: 2024, price: 6540 },
          { year: 2025, price: 6895 },
        ]
      }
    },
    Gandhinagar: {
      Residential: {
        currentRate: "₹5,100/sqft",
        yearlyGrowth: "7.0%",
        prediction: "Expected to rise by 7.6% in 2025",
        hotAreas: ["Sector 1", "Infocity", "Sector 21"],
        priceRange: "₹40L - ₹2.3Cr",
        historicalData: [
          { year: 2019, price: 4600 },
          { year: 2020, price: 4800 },
          { year: 2021, price: 5000 },
          { year: 2022, price: 5200 },
          { year: 2023, price: 5400 },
          { year: 2024, price: 5800 },
          { year: 2025, price: 6220 },
        ]
      },
      Commercial: {
        currentRate: "₹6,700/sqft",
        yearlyGrowth: "6.2%",
        prediction: "Steady growth anticipated",
        hotAreas: ["Gandhinagar GIDC", "Kudasan", "Ch Road"],
        priceRange: "₹90L - ₹8Cr",
        historicalData: [
          { year: 2019, price: 5900 },
          { year: 2020, price: 6100 },
          { year: 2021, price: 6300 },
          { year: 2022, price: 6500 },
          { year: 2023, price: 6700 },
          { year: 2024, price: 7100 },
          { year: 2025, price: 7532 },
        ]
      }
    }
  };

  return (
    <div className="rates-trends">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Property Rates & Market Trends</h1>
        <p>Stay updated with the latest real estate market insights in Gujarat</p>
      </motion.div>

      <div className="filters">
        <div className="filter-group">
          <label>Select City</label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Gandhinagar">Gandhinagar</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Property Type</label>
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>

      <div className="price-trend-chart">
        <h2>Price Trends (₹/sqft)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={trendData[selectedCity][propertyType].historicalData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#fece51"
              strokeWidth={2}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
              name="Price per sqft"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="trends-grid">
        <motion.div 
          className="trend-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Current Rate</h3>
          <p className="highlight">{trendData[selectedCity][propertyType].currentRate}</p>
        </motion.div>

        <motion.div 
          className="trend-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Yearly Growth</h3>
          <p className="highlight">{trendData[selectedCity][propertyType].yearlyGrowth}</p>
        </motion.div>

        <motion.div 
          className="trend-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Price Range</h3>
          <p className="highlight">{trendData[selectedCity][propertyType].priceRange}</p>
        </motion.div>
      </div>

      <div className="market-insights">
        <h2>Market Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <h3>Future Prediction</h3>
            <p>{trendData[selectedCity][propertyType].prediction}</p>
          </div>
          <div className="insight-card">
            <h3>Hot Areas</h3>
            <ul>
              {trendData[selectedCity][propertyType].hotAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesTrends; 
// export const getPredictedTrends = async (req, res) => {
//   try {
//       // Example response (Replace with actual logic)
//       res.json({ message: "Trend prediction working!" });
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// };


import axios from "axios";
export const getPredictedTrends = async (req, res) => {
    try {
        const { location, features } = req.body;
        if (!location || !features) {
            return res.status(400).json({ error: "Missing location or features." });
        }

        const flaskResponse = await axios.post("http://127.0.0.1:5001/predict", { location, features });
        res.json(flaskResponse.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Allow CORS so frontend can call API

# Load future predictions CSV once when app starts
future_predictions = pd.read_csv('future_predictions.csv')

# Extract available locations (excluding 'years' column)
locations = [col for col in future_predictions.columns if col != 'years']

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        location = data.get("location")

        if not location or location not in locations:
            return jsonify({"error": "Invalid location"}), 400

        years = future_predictions['years'].tolist()
        predicted_prices = future_predictions[location].tolist()

        return jsonify({
            "years": years,
            "predicted_prices": predicted_prices
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

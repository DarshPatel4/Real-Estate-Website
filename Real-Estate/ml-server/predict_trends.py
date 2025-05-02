import numpy as np
import pandas as pd
import tensorflow as tf
import pickle

# Load trained scalers
with open('scalers.pkl', 'rb') as f:
    scalers = pickle.load(f)

locations = ['Adajan', 'Vesu', 'Pal', 'Katargam', 'Varachha', 'Dumas']
models = {loc: tf.keras.models.load_model(f'lstm_price_model_{loc}.h5') for loc in locations}

# Load dataset for reference
df = pd.read_csv('surat_price_trends_2000_2024_sorted.csv')
sequence_length = 5
years_to_predict = 10

future_predictions = {}

for location in locations:
    recent_data = df[location].values[-sequence_length:].reshape(1, sequence_length, 1)

    # Predict future prices
    future_prices = []
    for _ in range(years_to_predict):
        predicted_price = models[location].predict(recent_data)
        future_prices.append(predicted_price[0][0])

        # Append new predicted value and shift window
        recent_data = np.append(recent_data[:, 1:, :], [[[predicted_price[0][0]]]], axis=1)

    # Convert predictions back to actual prices
    future_prices = scalers[location].inverse_transform(np.array(future_prices).reshape(-1, 1))

    # Store results
    future_predictions[location] = future_prices.flatten().tolist()

# Prepare response
future_years = list(range(df['Year'].max() + 1, df['Year'].max() + 1 + years_to_predict))

predictions = {'years': future_years}
for location in locations:
    predictions[location] = future_predictions[location]

# Save predictions to CSV
pd.DataFrame(predictions).to_csv('future_predictions.csv', index=False)
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from sklearn.preprocessing import MinMaxScaler
import pickle

# Load the dataset
df = pd.read_csv('surat_price_trends_2000_2024_sorted.csv')

# Select relevant columns
locations = ['Adajan', 'Vesu', 'Pal', 'Katargam', 'Varachha', 'Dumas']
scalers = {}

# Dictionary to store trained models
models = {}

for location in locations:
    data = df[['Year', location]].copy()

    # Normalize prices using MinMaxScaler
    scaler = MinMaxScaler(feature_range=(0, 1))
    data[location] = scaler.fit_transform(data[[location]])
    scalers[location] = scaler

    sequence_length = 5
    X, y = [], []

    for i in range(len(data) - sequence_length):
        X.append(data[location].values[i:i + sequence_length])
        y.append(data[location].values[i + sequence_length])

    X, y = np.array(X), np.array(y)
    X = np.reshape(X, (X.shape[0], X.shape[1], 1))

    model = Sequential([
        LSTM(50, return_sequences=True, input_shape=(sequence_length, 1)),
        Dropout(0.2),
        LSTM(50, return_sequences=False),
        Dropout(0.2),
        Dense(25),
        Dense(1)
    ])

    model.compile(optimizer='adam', loss='mean_squared_error')

    model.fit(X, y, epochs=50, batch_size=16, verbose=1)

    model.save(f'lstm_price_model_{location}.h5')
    models[location] = model

with open('scalers.pkl', 'wb') as f:
    pickle.dump(scalers, f)
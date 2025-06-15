import React, { useState, useEffect } from 'react';
import styles from './LiveData.module.css';

function LiveData() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        console.log('Fetching weather data...'); // Debug log
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        
        if (!apiKey) {
          throw new Error('Weather API key is missing');
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=Gaya,in&units=metric&appid=${apiKey}`;
        console.log('Fetching from URL:', url); // Debug log

        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch weather data');
        }
        
        const data = await response.json();
        console.log('Weather data received:', data); // Debug log
        setWeather(data);
        setLoading(false);
      } catch (err) {
        console.error('Weather fetching error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // Debug render
  console.log('Render state:', { loading, error, weather });

  if (loading) {
    return (
      <section className={styles.liveData}>
        <h2>Live Weather Information</h2>
        <div className={styles.loading}>
          <p>Loading weather data...</p>
          <p>Please wait while we fetch the latest information.</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.liveData}>
        <h2>Live Weather Information</h2>
        <div className={styles.error}>
          <p>Unable to load weather data.</p>
          <p>Error: {error}</p>
          <p>Please try again later or contact support if the problem persists.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.liveData}>
      <h2>Live Weather Information</h2>
      {weather && weather.main && (
        <div className={styles.weatherCard}>
          <h3>Current Weather in Bodh Gaya</h3>
          <div className={styles.weatherInfo}>
            <p>Temperature: {Math.round(weather.main.temp)}°C</p>
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Description: {weather.weather[0].description}</p>
          </div>
          <div className={styles.weatherUpdate}>
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      )}
    </section>
  );
}

export default LiveData;
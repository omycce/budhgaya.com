import React, { useState, useEffect } from 'react';
import styles from './LiveData.module.css';

function LiveData() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        if (!apiKey) throw new Error('Weather API key is missing');

        const url = `https://api.openweathermap.org/data/2.5/weather?q=Gaya,in&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch weather data');

        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <section className={styles.liveData}>
        <h2>Live Weather</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.liveData}>
        <h2>Live Weather</h2>
        <p>Error: {error}</p>
      </section>
    );
  }

  return (
    <section className={styles.liveData}>
      <h2>Live Weather</h2>
      {weather && weather.main && (
        <div className={styles.weatherCard}>
          <p><strong>{Math.round(weather.main.temp)}°C</strong> - {weather.weather[0].main}</p>
          <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
        </div>
      )}
    </section>
  );
}

export default LiveData;
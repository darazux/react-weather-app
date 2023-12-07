// App.js
import { useState } from 'react';
import axios from 'axios';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const getWeather = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5080/weather-data?${city}`)
      .then((res) => console.log(res));
  };
  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;

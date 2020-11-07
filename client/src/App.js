import React, { useState } from 'react';
import './App.css';
import Weather from './components/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Contact from './components/contact';
import MyNavbar from './components/navbar';
import Forecast from './components/forecast';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

const App = () => {
  const [cityName, setCityName] = useState('');
  const [coords, setCoords] = useState();

  return (
    <div className="App">
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <MyNavbar />

      <div>
        {/* 이렇게 props값으로 hook state의 setState를 사용하게 되면 자식으로 부터 전달을 받을 수가 있다. */}
        <Weather setCityName={setCityName} setCoords={setCoords} />
        <hr />
      </div>
      <div>

        <Forecast cityName={cityName} coords={coords} />
        <hr />
      </div>
      <Contact />

    </div>
  );
}

export default App;

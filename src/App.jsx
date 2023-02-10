import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useEffect } from "react";
import "./assets/css/WeatherApp.css";
import WeatherApp from "./components/WeatherApp";

const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
};

export default App;

import { useState } from "react";
import Form from "./Form";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

    console.log(process.env.REACT_APP_BASE_URL);

  const LoadInfo = async (city) => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}&key=${process.env.REACT_APP_BASE_URL}$q=${city}`
      );
      const JSON = await request.json();
      console.log(JSON);
    } catch (err) {}
  };

  const HandleChangeCity = (city) => {
    setWeather(null);
    LoadInfo(city);
  };
  return <Form onChangeCity={HandleChangeCity}/>;
};

export default WeatherApp;

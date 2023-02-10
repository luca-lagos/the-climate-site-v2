import { useState } from "react";

const Form = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const HandleChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!city || city !== "") {
      onChangeCity(city);
    }
  };
  return (
    <>
      <form action="" onSubmit={HandleSubmit}>
        <input type="text" value={city} onChange={HandleChange} />
      </form>
    </>
  );
};

export default Form;

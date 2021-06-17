import React, { useState } from "react";
import axios from "axios";

import payload from "../../main/payload";
import Display from "./display";
import "./form.css";
const initialState = {
  cidade: "",
  estado: "",
  temperatura: 0,
  sensacao_termica: 0,
  temp_min: 0,
  temp_max: 0,
  umidade: 0,
  clima: "",
};
const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "&appid=ff11aed0754ea3a5e0af28fbcc5fda21";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [state, setState] = useState(initialState);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  async function getAPI(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${baseUrl}/weather?q=${state.cidade},${state.estado}${apiKey}&units=metric&lang=pt_br`
      );
      console.log(data)
      setState(payload(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={getAPI}>
        <h4>Selecione a sua Cidade:</h4>
        <input
          name="cidade"
          type="text"
          onChange={handleChange}
          value={state.city}
        />
        <h4>Selecione o seu Estado:</h4>
        <input
          name="estado"
          type="text"
          onChange={handleChange}
          value={state.state}
        />
        <button type="submit">Enviar</button>
      </form>
      <Display
        temperatura={state.temperatura}
        sensacao_termica={state.sensacao_termica}
        temp_max={state.temp_max}
        temp_min={state.temp_min}
        umidade={state.umidade}
        clima={state.clima}
      />
    </div>
  );
};

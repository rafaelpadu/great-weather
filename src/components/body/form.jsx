import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import payload from "../../main/payload";
import Display from "./display";
import { ClimaContext } from "../themes/ClimaContext";
import { FaSearch } from "react-icons/fa";

import "./form.css";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  cidade: "",
  temperatura: 0,
  sensacao_termica: 0,
  temp_min: 0,
  temp_max: 0,
  umidade: 0,
  clima: "",
  clima_main: "",
  name: "",
  dataAgora: "",
};

const toastMsg = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
}

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "&appid=ff11aed0754ea3a5e0af28fbcc5fda21";
const iconsClima = "https://openweathermap.org/img/wn/";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [state, setState] = useState(initialState);
  const { setMainClima } = useContext(ClimaContext);
  const { setMainTemp } = useContext(ClimaContext);
  const [img, setImg] = useState("");

  useEffect(() => {
    setMainClima(state.clima_main);
    setMainTemp(Math.round(state.temperatura));
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  const prev = usePrevious(state.cidade);
  async function getAPI(e) {
    e.preventDefault();
    console.log(state.cidade);
    console.log(prev);
    if (state.cidade === prev) {
      return toast.warn("Cidade já pesquisada!", toastMsg);
    }else if(state.cidade.length === 0){
      return toast.warn("Digite alguma cidade antes", toastMsg)
    }else {
      try {
        const { data } = await axios.get(
          `${baseUrl}/weather?q=${state.cidade}${apiKey}&units=metric&lang=pt_br`
        );
        setImg(`${iconsClima}${data.weather[0].icon}@2x.png`);
        console.log(state)
        setState(payload(data));
      } catch (err) {
        toast.error("Cidade não encontrada!", toastMsg);
      }
    }
  }

  function usePrevious(value){
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    })
    return ref.current;
  }

  return (
    <div>
      <form onSubmit={getAPI}>
        <div className="searchBox">
          <input
            className="inputSearch"
            name="cidade"
            type="text"
            onChange={handleChange}
            value={state.city}
            placeholder="Digite a Cidade..."
          />
          <button className="buttonSearch" type="submit">
            <FaSearch className="iconSearch" />
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </form>
      <Display
        location={state.name}
        dataAgora={state.dataAgora}
        temperatura={state.temperatura}
        sensacao_termica={state.sensacao_termica}
        temp_max={state.temp_max}
        temp_min={state.temp_min}
        umidade={state.umidade}
        clima={state.clima}
        icone={img}
      />
    </div>
  );
};

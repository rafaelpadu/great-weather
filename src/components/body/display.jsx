import React from "react";

import "./form.css"
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div>
    <h5 className="location">{props.location}</h5>
    <h4 className="dateNow">{props.dataAgora}</h4>
    <p className="temp">{Math.round(props.temperatura)}°C</p>
    {/* <h5>Sensação Térmica: </h5>
    <p>{Math.round(props.sensacao_termica)}°C</p>
    <h5>Temperatura Máxima: </h5>
    <p>{Math.round(props.temp_min)}°C</p>
    <h5>Temperatura Mínima: </h5>
    <p>{Math.round(props.temp_max)}°C</p> */}
    <p className="payloadClima">{props.clima}</p>
    {/* <h5>Umidade: </h5>
    <p>{props.umidade}%</p> */}
    <img src={props.icone} style={{width: 120}}></img>
  </div>
);

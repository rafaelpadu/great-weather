import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div>
    <h4>Clima da sua Cidade: </h4>
    <h5>Temperatura: </h5>
    <p>{Math.round(props.temperatura)}°C</p>
    <h5>Sensação Térmica: </h5>
    <p>{Math.round(props.sensacao_termica)}°C</p>
    <h5>Temperatura Máxima: </h5>
    <p>{Math.round(props.temp_min)}°C</p>
    <h5>Temperatura Mínima: </h5>
    <p>{Math.round(props.temp_max)}°C</p>
    <h5>Umidade: </h5>
    <p>{props.umidade}%</p>
    <h5>Clima: </h5>
    <p className="payloadClima">{props.clima}</p>
  </div>
);

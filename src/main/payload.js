let date = String(new Date());
    date = date.slice(3, 15);

const payload = (data) => ({
    temperatura: data.main.temp,
    sensacao_termica: data.main.feels_like,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    umidade: data.main.humidity,
    clima: data.weather[0].description,
    clima_main: data.weather[0].main,
    name: data.name + ", " + data.sys.country,
    dataAgora: date
  });

module.exports = payload
import "./App.css";

import Form from "../components/body/form";
import { ClimaContext } from "../components/themes/ClimaContext";
import { useState, useEffect } from "react";

function App() {
  const [mainTemp, setMainTemp] = useState(0);
  const [mainClima, setMainClima] = useState("");
  const [climaCss, setClimaCss] = useState("");
  useEffect(() => {
    if(mainClima === "Rain" || mainClima === "Drizzle" || mainClima === "Thunderstorm") setClimaCss("App Rainy") 
    else{
      if(mainTemp >= 24) setClimaCss("App Hot");
      else setClimaCss("App Night");
    }
  });
  return (
    <ClimaContext.Provider value={{ mainClima, setMainClima, mainTemp, setMainTemp }}>
      <div className={climaCss}>
        <main className="Main">
          <Form />
          {/* <Footer /> */}
        </main>
      </div>
    </ClimaContext.Provider>
  );
}

export default App;

import { useEffect } from "react";
import "./App.css";
import Summary from "./Summary";

import Aos from "aos";
import "aos/dist/aos.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Summary />
    </div>
  );
}

export default App;

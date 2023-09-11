import { useState } from "react";
import "./Nav.css";
import Like from "../logo/Logo";


function Nav(prosp) {
  const [input1, setinput1] = useState("");

  function getData1(e) {
    setinput1(e.target.value);
  }

  const [input2, setinput2] = useState("");
  function getData2(ev) {
    setinput2(ev.target.value);
  console.log(input2);
  }

  return (
    <div className="buscador">
      <img src="logo.png" className="wind" />

      <div>
      <nav className="seccionBuscar">

          <input type="text" id="inputData1" onChange={getData1} />
          <input type="text" id="inputData2" onChange={getData2} />
          <button
            className="botonBuscar"
            onClick={() => prosp.actualizarData(input1, input2)}
          >
            <Like></Like>
          </button>
         
        </nav>  
      
        
      </div>
    </div>
  );
}

export default Nav;

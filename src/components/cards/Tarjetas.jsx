import React from "react";
import "./Tarjetas.css";

function Tarjetas(prosp) {
  const sHost = prosp.superHost;
  const numBeds = prosp.beds;

  return (
    <div className="principalCard">
      <img className="fotos" src={prosp.photo} />
      <div className="totalInfoCard">
        <div className="info-card">
          <div className="info1">
            {sHost === true ? <p className="botonSuperHost">Super Host</p> : ""}
            <div className="colorGrey">
              <p className="items">{prosp.type}</p>
              {numBeds === "null beds" ? "" : numBeds}
            </div>
          </div>
          <div className="info2">
            <i class="fa-solid fa-star" id="star"></i>
            <p className="items">{prosp.rating}</p>
          </div>
        </div>
        <div>
          <p className="itemTitle">{prosp.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Tarjetas;

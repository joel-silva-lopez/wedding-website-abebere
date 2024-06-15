import { useState } from "react";
import "./Historia.css";
import JD from "/JD_logo.png";

export const Historia = ({ imagen }) => {
  const [desplegado, setDesplegado] = useState(false);

  return (
    <>
      <div className="container-historia">
          <img
            className="imagen-historia"
            src={imagen}
            alt="Imagen Para contar una historia"
          />

        <div className={`historia ${desplegado ? "desplegado" : ""}`}>
          <div
            className={`desplegar-historia ${desplegado ? "desplegado" : ""}`}
            onClick={() => {
              setDesplegado(!desplegado);
            }}
          >
              <img
                id="flecha"
                className={`${desplegado ? "desplegado" : ""}`}
                src="/flecha.png"
              />
          </div>

          <p style={{color: 'red'}}><strong>¡Advertencia!</strong> </p>

          <p>
            Nuestra boda puede contener excesivas cantidades de
            amor, risas y baile. Les rogamos asistir bajo su propio riesgo y
            diversión garantizada.
          </p>

          <p>Abelardo y Berenice</p>
        </div>
      </div>
    </>
  );
};

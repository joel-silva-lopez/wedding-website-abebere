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
          <img src={JD} alt="logo" />
          <p>
            En el trayecto de la vida descubrimos un capítulo que nos ha llenado
            de alegría y amor. A través de los de esta travesia, hemos tejido
            juntos una historia que nos llena de sonrisas cada vez que
            recordamos.
          </p>
          <p>
            A ti, querido invitado, te extendemos nuestro agradecimiento por ser
            parte de esta historia. Tu interés nos alegra y nos inspira a seguir
            escribiendo nuevos capítulos de felicidad.
          </p>
          <p>Con amor y gratitud,</p>
          <p>Joel y Dayana</p>
        </div>
      </div>
    </>
  );
};

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
            El amor es lo que nos une, la felicidad es lo que nos mantiene
            juntos. ¡Únanse a nosotros en nuestra boda y celebremos el amor!
          </p>
          
          <p>Con amor y gratitud,</p>
          <p>Abelardo y Berenice</p>
        </div>
      </div>
    </>
  );
};

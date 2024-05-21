import { useEffect } from "react";

export const SeleccionNombres = ({
  invitados,
  invitadosSeleccionados,
  setinvitadosSeleccionados,
  avanzarFase,
}) => {

  const handleCheckboxChange = (invitado) => {
    if (invitadosSeleccionados.find((inv) => inv._id == invitado._id)) {
      // Si el nombre ya está seleccionado, quitarlo del arreglo
      setinvitadosSeleccionados(
        invitadosSeleccionados.filter(
          (inv) => inv._id !== invitado._id
          )
          );
        } else {
          // Si el nombre no está seleccionado, agregarlo al arreglo
          setinvitadosSeleccionados([...invitadosSeleccionados, invitado]);
        }
  };

  return (
    <>
      <p className="texto-formulario">
        Selecciona la casilla a lado del nombre de aquellos invitados que desees
        confirmar. Los invitados con casillas sin seleccionar se cancelarán en
        automático.
      </p>
      <p className="texto-formulario"><b>Los pases son intranferibles</b></p>
      <ul>
        {invitados.map(({_id, nombre}) => (
          <li
            key={_id}
            className={`texto-formulario nombres ${
              invitadosSeleccionados.find((inv) => inv._id == _id) ? "dorado" : ""
            }`}
          >
            <label>
              <input
                type="checkbox"
                checked={invitadosSeleccionados.find((inv) => inv._id == _id)}
                onChange={() => handleCheckboxChange({_id, nombre})}
              />
              {nombre}
            </label>
          </li>
        ))}
      </ul>
      <button className="btn primary" onClick={avanzarFase}>
        Avanzar
      </button>
    </>
  );
};

import React, { useState } from "react";

export const IngresarNumeroCelular = ({
  setTelefono,
  avanzarFase,
  retrocederFase,
}) => {
  const [numeroCelular, setNumeroCelular] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Filtra solo dígitos
    const formattedValue = inputValue
      .slice(0, 10) // Limitamos la longitud a 10 caracteres
      .replace(/(\d{2})(?=\d{2})/g, "$1 - ") // Agrupamos de dos en dos con guiones
      .trim(); // Eliminamos el espacio adicional al final si existe

    setNumeroCelular(formattedValue);
  };

  const handleIngresarNumero = () => {
    // Puedes realizar alguna acción si es necesario antes de avanzar de fase
    setTelefono(+numeroCelular.replace(/\D/g, ""));
    avanzarFase();
  };

  return (
    <>
      <span className="texto-formulario">
        Numero de celular para enviar pase:
      </span>
      <input
        id="celular-formulario"
        type="text"
        maxLength="20"
        placeholder="66 - 72 - 24 - 66 - 80"
        value={numeroCelular}
        onChange={handleInputChange}
      />
      <button className="btn primary" onClick={handleIngresarNumero} disabled={numeroCelular.replace(/[^0-9]/g, "").length !== 10}
>
        Enviar
      </button>
      <button className="btn" onClick={retrocederFase}>
        Regresar
      </button>
    </>
  );
};

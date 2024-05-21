import { useEffect, useState } from "react";
import "./FormularioConfirmacion.css";
import { PasesInfo } from "./PasesInfo";
import { SeleccionNombres } from "./SeleccionNombres";
import { ConfirmacionNombres } from "./ConfirmacionNombres";
import { IngresarNumeroCelular } from "./IngresarNumeroCelular";

export const FormularioConfirmacion = ({
  setConfirmacionInfo,
  confirmacionInfo,
  sendConfirmacionInfo,
}) => {

  if (!confirmacionInfo.invitadosConfirmados) {
    confirmacionInfo['invitadosConfirmados'] = []
  }

  const { invitados, invitadosConfirmados } = confirmacionInfo;
  const [animate, setAnimate] = useState(false);
  const [ fase, setFase] = useState(1)

  const avanzarFase = () => {
    setAnimate(true);
    setTimeout(() => {
      setFase(fase + 1 );
      setAnimate(false);
    }, 1500);
  };

  const retrocederFase = () => {
    setAnimate(true);
    setTimeout(() => {
      setFase(fase - 1 );
      setAnimate(false);
    }, 1500);
  };

  const setTelefono = (celularConfirmado) => {
    setConfirmacionInfo((prev) => ({ ...prev, celularConfirmado }));
  };

  useEffect(() => {
    /* if (fase === 4 && invitadosConfirmados.length === 0) {
      avanzarFase(); // Cambia automáticamente a la fase 5 si no hay nombres seleccionados
    } else if (fase === 5) {
      sendConfirmacionInfo(); // Envía la información cuando se alcanza la fase 5
    } */
    if (fase === 4) {
      sendConfirmacionInfo(); // Envía la información cuando se alcanza la fase 5
    }
  }, [fase]);

  const phaseComponents = {
    1: (
      <PasesInfo
        numeroDePases={invitados?.length || 0}
        iniciarConfirmacion={avanzarFase}
      />
    ),
    2: (
      <SeleccionNombres
        invitados={invitados}
        invitadosSeleccionados={invitadosConfirmados}
        setinvitadosSeleccionados={(nombres) =>
          setConfirmacionInfo((prev) => ({
            ...prev,
            invitadosConfirmados: nombres,
          }))
        }
        avanzarFase={avanzarFase}
      />
    ),
    3: (
      <ConfirmacionNombres
        invitadosSeleccionados={invitadosConfirmados}
        confirmarFase={avanzarFase}
        retrocederFase={retrocederFase}
      />
    ),
    /* 4: (
      <IngresarNumeroCelular
        setTelefono={setTelefono}
        avanzarFase={avanzarFase}
        retrocederFase={retrocederFase}
      />
    ),
    5: (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ), */
    4: (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ),
  };

  return (
    <div id="formulario" className={animate ? "transicion-formulario" : ""}>
      {phaseComponents[fase]}
    </div>
  );
};

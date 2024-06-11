import "./Contenedor.css";
import { Confirmado } from "./components/Formularios/Confirmado";
import { FormularioConfirmacion } from "./components/Formularios/FormularioConfirmacion";
import { Cronometro } from "./components/Portada/Cronometro";
import { Historia } from "./components/Saludos/Historia";
import { useEffect, useState, useRef } from "react";
import { apiwedding } from "./hooks/WeddingHook";

export const Contenedor = ({ confirmacionInfo, setConfirmacionInfo }) => {
  return (
    <>
      <div className="container">
        <div className="background-image"></div>

        <div className="main-container">
          <img src="/portada.jpeg" alt="Imagen de portada" />

          <div id="bienvenida">
            <img src="/bienvenida.png" alt="Bienvenida" />
          </div>

          <div id="cronometro-container" style={{ zIndex: -1 }}>
            <img src="/cronometro.png" alt="Foto aninos" />
            <Cronometro targetDate={new Date("2024-10-25 16:00:00")} />
          </div>

          <Saludos
            strSaludos={confirmacionInfo?.saludo}
            strTitulo={confirmacionInfo?.titulo}
          />

          <img src="/separacion.png" alt="Separacion" />

          <Padres />

          <Historia imagen="/foto-juntos.jpeg" />

          <Salones />

          <img src="/itinerario.jpg" alt="Itinerario" />

          <Vestimenta />

          <Mensaje />

          <Regalos />

          <Anuncio />

          <Formulario
            confirmacionInfo={confirmacionInfo}
            setConfirmacionInfo={setConfirmacionInfo}
          />

          <Redes />

          <div className="webshoot">
            <img
            style={{ backgroundColor: "#fff", width: '60%' }}
            src="/webshoot.jpg"
            alt=""
          />

          </div>
          
          <img src="/nosotros.jpg" alt="Fotos de los novios" />

          <div id="footer">
            <h2>GRACIAS POR ASISTIR ❤</h2>
            <img id="logo-footer" src="/JD_logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

const Formulario = ({ confirmacionInfo, setConfirmacionInfo }) => {
  const sendConfirmacionInfo = () => {
    console.log("Enviando informacion...");
    console.log(confirmacionInfo);
    /* const response = apiwedding.confirmarInvitacion(confirmacionInfo._id, {
      celularConfirmado: confirmacionInfo.celularConfirmado,
      invitadosConfirmados: confirmacionInfo.invitadosConfirmados.map(
        (invitado) => invitado._id
      ),
    });

    response
      .then((res) => {
        if (!res.ok) {
          alert(
            `Error al confirmar la invitación - Código: ${response.status}`
          );
        } else {
          setConfirmacionInfo((prev) => ({ ...prev, confirmado: true }));
        }
      })
      .catch((error) => {
        alert(`Error al confirmar la invitación - error: ${error}`);
      }); */

      setConfirmacionInfo((prev) => ({ ...prev, confirmado: true }));
  };

  return (
    <div className="contenedor-formulario">
      <img src="/formulario.png" alt="Bienvenida" />
      {!confirmacionInfo.confirmado ? (
        <FormularioConfirmacion
          setConfirmacionInfo={setConfirmacionInfo}
          confirmacionInfo={confirmacionInfo}
          sendConfirmacionInfo={sendConfirmacionInfo}
        />
      ) : (
        <Confirmado
          invitadosSeleccionados={confirmacionInfo.invitadosConfirmados}
          family_id={confirmacionInfo["_id"]}
        />
      )}
    </div>
  );
};

const Saludos = ({ strTitulo, strSaludos }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [visible, setVisible] = useState(false);
  const saludo = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(saludo.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting && !visible) {
      saludo.current.querySelectorAll("span").forEach((element) => {
        element.classList.add("visible");
      });
      setVisible(true);
    }
  }, [isIntersecting]);

  return (
    <div className="contenedor-imagen" ref={saludo}>
      <img src="/invitado.png" alt="Saludos a Invitado" />
      <div>
        <span className="texto-invitado titulo-invitado">{strTitulo}</span>
        <span className="texto-invitado saludo-invitado">{strSaludos}</span>
      </div>
    </div>
  );
};

const Salones = () => {
  return (
    <div className="contenedor-salones">
      <img src="/Salon.jpg" alt="Localizacion de Salones de eventos" />
      <a
        href="https://maps.app.goo.gl/kbN5UVQw9cFBhdZF8"
        target="_blank"
        className="direccion"
        id="salon1"
      >
        ¿CÓMO LLEGAR?
      </a>
    </div>
  );
};

const Mensaje = () => {
  return (
    <div className="container-mensaje">
      <img src="/mensaje-marco.png" alt="" />
      <div className="container-texto-mensaje">
        <img src="/ramas.png" alt="ramas bontias" />
        <div className="texto-mensaje">
          <p>¡Que nos acompañes es lo más importante!</p>
          <p style={{ marginTop: "15px" }}>
            Pero si deseas hacernos un regalo, agradeceremos que sea efectivo,
            ya que radicaremos en otro estado.
          </p>
        </div>
        <img
          src="/ramas.png"
          alt="ramas bontias"
          style={{ transform: "scaleY(-1)" }}
        />
      </div>
    </div>
  );
};

const Regalos = () => {
  return (
    <div className="container-regalos">
      <div className="img-regalos">
        <img src="/regalo.png" alt="Imagen de regalo" />
      </div>
      <div className="text-regalos">
        <p style={{ fontWeight: "bold" }}>Banco Azteca</p>
        <p>
          Número de cuenta:{" "}
          <span style={{ fontWeight: "bold" }}>61151305500541</span>
        </p>
        <p>
          Número de tarjeta:{" "}
          <span style={{ fontWeight: "bold" }}>4027666116275792</span>
        </p>
        <p>Berenice García García.</p>
      </div>
    </div>
  );
};

const Padres = () => {
  return (
    <div className="container-padres">
      <p>Con la bendición de Jehová y en presencia de nuestros padres</p>
      <img src="/division.png" alt="" style={{ transform: "scaleY(-1)" }} />
      <span>Francisco Jiménez Luna</span>
      <span>Maria Isabel moreno longoria</span>
      <span>Gloria María García Cabrera</span>
      <img src="/division.png" alt="" />
    </div>
  );
};

const Vestimenta = () => {
  return (
    <div className="container-vestimenta">
      <span>Código de Vestimenta</span>
      <img src="/division.png" alt="" style={{ transform: "scaleY(-1)" }} />
      <img id="img-vestimenta" src="/formal.jpg" alt="" />
      <span>Formal</span>
      <span>(1 Timoteo 2:9)</span>
      <img src="/division.png" alt="" />
    </div>
  );
};

const Anuncio = () => {
  return (
    <div className="container-anuncio">
      <img src="/division.png" alt="" style={{ transform: "scaleY(-1)" }} />
      <p>
        Nos encantaría contar con su presencia en nuestra boda, que será una
        ocasión especial solo para adultos. <strong>NO</strong> contaremos con
        asientos para niños ni algún programa, le agradecemos de antemano su
        comprensión.
      </p>
      <img src="/division.png" alt="" />
    </div>
  );
};

const Redes = () => {
  return (
    <div className="container-redes">
      <div className="card">
        <img src="/camera.webp" alt="" />
        <span className="texto-redes">
          Comparte con nosotros todas tus fotografías del evento usando la
          siguiente aplicación.
        </span>
      </div>
    </div>
  );
};

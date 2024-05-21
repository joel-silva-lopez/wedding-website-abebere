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
          <img src="/portada.png" alt="Imagen de portada" />

          <div id="bienvenida">
            <img src="/bienvenida.png" alt="Bienvenida" />
            <Cronometro targetDate={new Date("2024-02-10 19:00:00")} />
          </div>

          <Saludos strSaludos={confirmacionInfo?.saludo} strTitulo={confirmacionInfo?.titulo}/>

          <Historia imagen="/foto-juntos.png" />

          <Salones />

          <img src="/itinerario.png" alt="Itinerario" />

          <Vestimenta />

          <Mensaje />

          <Anuncio />

          <Formulario
            confirmacionInfo={confirmacionInfo}
            setConfirmacionInfo={setConfirmacionInfo}
          />

          <Redes />

          <img src="/fotos-novios.png" alt="Fotos de los novios" />

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
    const response = apiwedding.confirmarInvitacion(confirmacionInfo._id, { celularConfirmado: confirmacionInfo.celularConfirmado, invitadosConfirmados: confirmacionInfo.invitadosConfirmados.map(invitado => invitado._id) });


    response.then((res) => {
      if (!res.ok) {
        alert(`Error al confirmar la invitación - Código: ${response.status}`);
      }else {
        setConfirmacionInfo((prev) => ({ ...prev, confirmado: true }));
      }
      
    }).catch((error) => {
      alert(`Error al confirmar la invitación - error: ${error}`);
    })
    

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
          family_id={confirmacionInfo['_id']}
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
        <span className="texto-invitado saludo-invitado">
          {strSaludos}
        </span>
      </div>
    </div>
  );
};

const Salones = () => {
  return (
    <div className="contenedor-salones">
      <img src="/salones.png" alt="Localizacion de Salones de eventos" />
      <a
        href="https://maps.app.goo.gl/yqSpVif9kiDVh1EFA"
        target="_blank"
        className="direccion"
        id="salon1"
      >
        ¿CÓMO LLEGAR?
      </a>
      <a
        href="https://maps.app.goo.gl/rK1vutkuJr1v8PtV9"
        target="_blank"
        className="direccion"
        id="salon2"
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
            Sí está en tu disposición realizar una muestra de cariño estaremos
            muy agradecidos.
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

const Vestimenta = () => {
  return (
    <div className="container-vestimenta">
      <span>Código de Vestimenta</span>
      <img src="/division.png" alt="" style={{ transform: "scaleY(-1)" }} />
      <img id="img-vestimenta" src="/formal.jpg" alt="" />
      <span>Formal</span>
      <img src="/division.png" alt="" />
    </div>
  );
};

const Anuncio = () => {
  return (
    <div className="container-anuncio">
      <img src="/division.png" alt="" style={{ transform: "scaleY(-1)" }} />
      <p>
        PARA PERMITIR QUE TODOS LOS INVITADOS INCLUIDOS LOS PADRES LA PASEN BIEN
        EN EL EVENTO, HEMOS ELEGIDO QUE EL DÍA DE NUESTRO MATRIMONIO SEA
        <strong> SOLO PARA ADULTOS</strong>.
      </p>
      <p>
        RESPETUOSAMENTE
        <strong> NO NIÑOS</strong>.
      </p>
      <img src="/division.png" alt="" />
    </div>
  );
};

const Redes = () => {
  return (
    <div className="container-redes">
      <div className="card">
        <span className="texto-redes hashtag">
          #JoelyDayana
        </span>
        <img src="/camera.webp" alt="" />
        <span className="texto-redes">
          Comparte con nosotros todas tus fotografías del evento usando el
          siguiente #hashtag
        </span>
      </div>
    </div>
  );
};

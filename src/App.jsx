import { useState, useEffect } from "react";
import "./App.css";
import { Contenedor } from "./Contenedor";
import { apiwedding } from "./hooks/WeddingHook";
import { Error404 } from "./components/Errores/Error404";

function App() {
  const handleDragStart = (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  };

  const [bienvenida, setBienvenida] = useState(true);
  const [familyId, setFamilyId] = useState('')
  const [confirmacionInfo, setConfirmacionInfo] = useState({});

  useEffect(() => {
    setTimeout(() => {
      if (bienvenida) setBienvenida(!bienvenida);
    }, 3000);

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    console.log('ID:', id);

    setFamilyId(id)

    apiwedding.obtenerFamiliaInfo(id).then((result) => {
      if (!result.ok) {
        setFamilyId('')
        throw new Error(`Error al obtener información de la familia - Código: ${result.status}`);
      } else {
        result.json().then(json => {
          setConfirmacionInfo(json)
        });
      }
    }).catch((error) => {
      console.error("Error al obtener datos del backend:", error);
    })


  }, []);

  const [imagenesCargadas, setImagenesCargadas] = useState(false);

  useEffect(() => {
    const imagenes = Array.from(document.images); // Obtiene todas las imágenes

    const promesasCarga = imagenes.map((imagen) => {
      return new Promise((resolve) => {
        if (imagen.complete) {
          resolve();
        } else {
          imagen.addEventListener("load", resolve, { once: true });
        }
      });
    });

    Promise.all(promesasCarga)
      .then(() => setImagenesCargadas(true))
      .catch((error) => {console.error("Error al cargar imágenes:", error); setImagenesCargadas(true);});

    // Limpia los eventos al desmontar el componente
    return () => {
      imagenes.forEach((imagen) => {
        imagen.removeEventListener("load", () => {}, { once: true });
      });
    };
  }, []); // El efecto se ejecuta solo al montar el componente



  return (
    <div onDragStart={handleDragStart}>
      
        <div className={`container-logo ${!(bienvenida && imagenesCargadas) ? 'oculto':''}`}>
          <img
            src="/JD_logo.png"
            className="logo-carga"
            // onClick={() => {
            //   setBienvenida(!bienvenida);
            // }}
          ></img>
        </div>
      
        <div className={`container-general ${bienvenida && imagenesCargadas ? 'oculto':''}`}>
          {familyId ? (<>
            <Contenedor Contenedor confirmacionInfo={confirmacionInfo} setConfirmacionInfo={setConfirmacionInfo}></Contenedor></>) : (<Error404 />)}

        </div>
      
    </div >
  );
}



export default App;

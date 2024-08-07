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

  // const [bienvenida, setBienvenida] = useState(true);
  const [familyId, setFamilyId] = useState('')
  const [confirmacionInfo, setConfirmacionInfo] = useState({});

  useEffect(() => {
    /* setTimeout(() => {
      if (bienvenida) setBienvenida(!bienvenida);
    }, 3000); */

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
          console.log(json);
          setConfirmacionInfo(json)
        });
      }
    }).catch((error) => {
      console.error("Error al obtener datos del backend:", error);
    })

   /*  let json = {
      "_id": "656cbb982282d89a901cdc44",
      "titulo": "Fam. Silva Ruiz",
      "saludo": "Nos encantaria verlos en esta noche especial",
      "celular": 6672246499,
      "confirmado": false,
      "invitados": [
        {
            "_id": "1",
            "nombre": "Joel Silva",
            "asiste": true,
            "enEvento": true,
            "mesa": "novios"
        },
        {
          "_id": "2",
          "nombre": "Dayana de Silva",
          "asiste": true,
          "enEvento": true,
          "mesa": "novios"
      }
    ],
      "invitadosConfirmados": [
         
      ]
  } 

  setConfirmacionInfo(json);
  */


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
      .catch((error) => {alert("Hay elementos que no se pudieron cargar"); setImagenesCargadas(true);});

    // Limpia los eventos al desmontar el componente
    return () => {
      imagenes.forEach((imagen) => {
        imagen.removeEventListener("load", () => {}, { once: true });
      });
    };
  }, []); // El efecto se ejecuta solo al montar el componente



  return (
    <div onDragStart={handleDragStart}>
            
        <div className={`${!imagenesCargadas ? 'oculto':''}`}>
            <Contenedor  Contenedor confirmacionInfo={confirmacionInfo} setConfirmacionInfo={setConfirmacionInfo}></Contenedor>
        </div>
      
    </div >
  );
}



export default App;

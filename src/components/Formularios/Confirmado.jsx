import {QrCode} from '../../components/QR/QrCode'
export const Confirmado = ({ invitadosSeleccionados, family_id }) => {
  return (
    <div id="confirmado">
      {invitadosSeleccionados.length ? (
        <>
          <span className="texto-formulario">
            Se confirmó la asistencia de:
          </span>
          <div className="marco-formulario">
            {invitadosSeleccionados.map(({nombre}) => (
              <li key={nombre} className="texto-formulario nombres dorado">
                <label>{nombre}</label>
              </li>
            ))}
          </div>

          <QrCode family_id={family_id}/>
        </>
      ) : (
        <>
          <span className="texto-formulario">
            No selecciono ningun nombre cuando se confirmo el formulario, se
            cancelaron todas las invitaciones
          </span>
        </>
      )}
      
        <hr />
      <span className="texto-formulario" >
        ¿Tiene problemas en su confirmación?
      </span>
      <span className="texto-formulario">
        Comuniquese con atencion a clientes
      </span>
      <a className="atencion-clientes" href="https://wa.me/+5216672672868/?text=Buenas%20tardes,%20tengo%20un%20problema%20con%20mi%20invitacion.">
        Enviar mensaje
      </a>
    </div>
  );
};

export const ConfirmacionNombres = ({
  invitadosSeleccionados = [],
  confirmarFase,
  retrocederFase,
}) => (
  <>
    {invitadosSeleccionados.length ? (
      <>
        <h2 className="texto-formulario">Lista de Nombres Seleccionados:</h2>
        <div className="marco-formulario">
          {invitadosSeleccionados.map(({nombre}) => (
            <li key={nombre} className="texto-formulario nombres dorado">
              <label>{nombre}</label>
            </li>
          ))}
        </div>
      </>
    ) : (
      <>
        <span className="texto-formulario">
          No selecciono ningun nombre, se cancelaran todas las invitaciones
        </span>
        <span className="texto-formulario">¿Seguro de ello?</span>
      </>
    )}
    <button className="btn primary" onClick={confirmarFase}>
      Confirmar
    </button>
    <button className="btn" onClick={retrocederFase}>
      Regresar
    </button>
  </>
);

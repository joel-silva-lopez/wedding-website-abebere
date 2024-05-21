export const PasesInfo = ({ numeroDePases, iniciarConfirmacion }) => (
  <>
    <span className="titulo-pases">Usted tiene</span>
    <span id="numeroPases" className="titulo-pases">
      {numeroDePases}
    </span>
    <span className="titulo-pases">{numeroDePases === 1 ? " pase" : " pases"}</span>
    {numeroDePases && (
      <button className="btn inicio primary" onClick={iniciarConfirmacion}>
        Iniciar Confirmación
      </button>
    )}
  </>
);

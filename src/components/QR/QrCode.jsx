import { QRCode } from 'react-qrcode-logo';
import './QrCode.css'

export const QrCode = ({ family_id }) => {

  const downloadCode = () => {
    const canvas = document.getElementById("qrinvite");
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl
      downloadLink.download = `your_name.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }



  return (!family_id ||
    <>
      <p className='texto-formulario'>Al llegar, simplemente muestra este código para agilizar su entrada.
      </p>
      <p className='texto-formulario'><b>¡Nos vemos allí!</b></p>
      <QRCode
        value={family_id}            // here you should keep the link/value(string) for which you are generation promocode
        size={500}              // the dimension of the QR code (number)
        logoImage="/JD_logo.png"  // URL of the logo you want to use, make sure it is a dynamic url
        logoHeight={500 * 0.6}
        logoWidth={500 * 0.6}
        logoOpacity={0.15}
        fgColor={"#aa9b6d"}
        enableCORS={true}       // enabling CORS, this is the thing that will bypass that DOM check
        qrStyle="dots"          // type of qr code, wether you want dotted ones or the square ones
        eyeRadius={[
          [10, 50, 0, 50], // top/right eye
          [50, 10, 50, 0], // top/right eye
          [50, 0, 50, 10], // bottom/left
        ]}          // radius of the promocode eye
        id={"qrinvite"}
      />
      <div className='atencion-clientes' onClick={() => downloadCode()}>
        Descargar QR
      </div>
    </>
  )
}
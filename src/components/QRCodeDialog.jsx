import { Dialog } from 'primereact/dialog';
import QRCode from 'react-qr-code';

export const QRCodeDialog = ({ show, onHide }) => {
  const header = <h1 className="text-center">QR de la encuesta</h1>;
  return (
    <Dialog header={header} visible={show} onHide={onHide}>
      <div className="flex justify-content-center">
        <QRCode
          value="https://angelord9011.github.io/encuestita"
          bgColor="#ffffff"
          fgColor="#000000"
          style={{ width: '80%', height: 'auto' }}
        />
      </div>
    </Dialog>
  );
};

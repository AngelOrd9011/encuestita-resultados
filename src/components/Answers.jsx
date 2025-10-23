import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { QRCodeDialog } from './QRCodeDialog';
import { TextAnswer } from './TextAnswer';

const Answers = ({ respuestas, preguntas }) => {
  const [answers, setAnswers] = useState(null);
  const [dialog, setDialog] = useState(false);
  let chartsObj = {};

  useEffect(() => {
    respuestas?.forEach((r) => {
      for (let q in r) {
        if (typeof r[q] === 'boolean') {
          if (!chartsObj.hasOwnProperty(q)) {
            chartsObj[q] = { verdadero: r[q] ? 1 : 0, falso: !r[q] ? 1 : 0 };
          } else {
            if (r[q]) chartsObj[q].verdadero += 1;
            else chartsObj[q].falso += 1;
          }
        } else if (typeof r[q] === 'string') {
          if (!chartsObj.hasOwnProperty(q)) {
            chartsObj[q] = { [r[q]]: 1 };
          } else {
            if (!chartsObj[q].hasOwnProperty(r[q])) {
              chartsObj[q][r[q]] = 1;
            } else {
              chartsObj[q][r[q]] += 1;
            }
          }
        }
      }
    });
    setAnswers(chartsObj);
  }, [respuestas]);

  const onHide = () => {
    setDialog(false);
  };

  return (
    <div className="grid">
      <Button
        label="Código QR"
        icon="pi pi-qrcode"
        onClick={() => setDialog(true)}
      />
      <div className="col-12 md:col-12">
        <h1 className="text-center">Resultados</h1>
        {answers && (
          <div className="grid">
            {preguntas?.map((p) => {
              return (
                <div className="col-12 md:col-6" style={{ display: 'block' }}>
                  <h4>{p.title}</h4>
                  <TextAnswer
                    answers={answers[p?.name]}
                    total={respuestas?.length}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <QRCodeDialog show={dialog} onHide={onHide} />
    </div>
  );
};

export default Answers;

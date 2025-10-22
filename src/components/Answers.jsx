import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import ChartAnswer from './ChartAnswer';

const Answers = ({ respuestas, preguntas }) => {
  const [answers, setAnswers] = useState(null);
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

  return (
    <div className="grid">
      <div className="col-12 md:col-4">
        <h1 className="text-center">QR de la encuesta</h1>
        <div className="flex justify-content-center">
          <QRCode
            value="https://angelord9011.github.io/encuestita"
            bgColor="#ffffff"
            fgColor="#000000"
            style={{ width: '80%', height: 'auto' }}
          />
        </div>
      </div>
      <div className="col-12 md:col-8">
        <h1 className="text-center">Gráficas de resultados</h1>
        {answers && (
          <div className="grid">
            {preguntas?.map((p) => {
              return (
                <div className="col-12 md:col-6" key={p?.name}>
                  <h4>{p.title}</h4>
                  <ChartAnswer
                    answers={answers[p?.name]}
                    total={respuestas.length}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Answers;

import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import ChartAnswer from './ChartAnswer';

const Answers = ({ respuestas, preguntas }) => {
  const [answers, setAnswers] = useState(null);
  let chartsObj = {
    question1: { verdadero: 0, falso: 0, correcta: '<b>Falso.</b> Aumentó de 35.0% en 2010 a 45.3% en 2025' },
    question2: { verdadero: 0, falso: 0, correcta: '<b>Verdadero.</b> Va de enlace (P) hasta K' },
    question3: { verdadero: 0, falso: 0, correcta: '<b>Falso.</b> Les aplica a todas las instituciones' },
    question4: { verdadero: 0, falso: 0, correcta: '<b>Verdadero.</b>' },
    question5: { verdadero: 0, falso: 0, correcta: '<b>Falso.</b> Es TrabajaEn' },
  };

  useEffect(() => {
    respuestas?.forEach((r) => {
      for (let q in r) {
        if (r[q]) chartsObj[q].verdadero += 1;
        else chartsObj[q].falso += 1;
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
                <div className="col-12 md:col-6" key={p.name}>
                  <h4>{p.title}</h4>
                  <span>{answers[p.name]?.correcta}</span>
                  <ChartAnswer
                    verdadero={answers[p.name].verdadero}
                    falso={answers[p.name].falso}
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

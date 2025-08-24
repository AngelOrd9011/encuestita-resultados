import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import ChartAnswer from "./ChartAnswer";

const Answers = ({ respuestas, preguntas }) => {
  const [answers, setAnswers] = useState(null);
  let chartsObj = {
    question1: { verdadero: 0, falso: 0 },
    question2: { verdadero: 0, falso: 0 },
    question3: { verdadero: 0, falso: 0 },
    question4: { verdadero: 0, falso: 0 },
    question5: { verdadero: 0, falso: 0 },
    question6: { verdadero: 0, falso: 0 },
    question7: { verdadero: 0, falso: 0 },
    question8: { verdadero: 0, falso: 0 },
    question9: { verdadero: 0, falso: 0 },
    question10: { verdadero: 0, falso: 0 },
  };

  useEffect(() => {
    respuestas.forEach((r) => {
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
        <h1>QR de la encuesta</h1>
      </div>
      <div className="col-12 md:col-8">
        <h1>Gráficas de resultados</h1>
      </div>
      <div className="col-12 md:col-4">
        <QRCode
          value="https://angelord9011.github.io/encuestita"
          bgColor="#ffffff"
          fgColor="#000000"
          style={{ width: "80%", height: "auto" }}
        />
      </div>
      <div className="col-12 md:col-8">
        {answers && (
          <div className="grid">
            {preguntas.map((p) => {
              return (
                <div className="col-12 md:col-6" key={p.name}>
                  <h4>{p.title}</h4>
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

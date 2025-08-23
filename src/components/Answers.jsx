import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const Answers = ({ respuestas }) => {
  const [answers, setAnswers] = useState();
  useEffect(() => {
    setAnswers(respuestas);
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
        <h3>{JSON.stringify(answers)}</h3>
      </div>
    </div>
  );
};

export default Answers;

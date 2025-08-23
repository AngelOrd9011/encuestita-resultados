import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const Answers = ({ respuestas }) => {
  const [answers, setAnswers] = useState();
  useEffect(() => {
    setAnswers(respuestas);
  }, [respuestas]);
  return (
    <div className="grid">
      <div className="col-12 md:col-1">
        {" "}
        <QRCode
          value="https://angelord9011.github.io/encuestita"
          size={256}
          bgColor="#ffffff"
          fgColor="#000000"
        />
      </div>
      <div className="col-12 md:col-11">
        <h3>{JSON.stringify(answers)}</h3>
      </div>
    </div>
  );
};

export default Answers;

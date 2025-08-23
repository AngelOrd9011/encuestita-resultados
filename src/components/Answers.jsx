import { useEffect, useState } from "react";

const Answers = ({ respuestas }) => {
  const [answers, setAnswers] = useState();
  useEffect(() => {
    setAnswers(respuestas);
  }, [respuestas]);
  return <h3>{JSON.stringify(answers)}</h3>;
};

export default Answers;

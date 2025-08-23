import { Model } from "survey-core";
import "survey-core/i18n/spanish";
import { Survey } from "survey-react-ui";
import useFetchData from "../hooks/useFetchData";
import useLocalStorage from "../hooks/useLocalStorage";

const SurveyApplication = ({ encuesta }) => {
  const survey = new Model(encuesta);
  survey.locale = "es";
  const [answers, setAnswers] = useLocalStorage("answers", {});
  const [anwered, setAnswered] = useLocalStorage("anwered", false);
  survey.data = answers;
  const { fetchData } = useFetchData();

  const onCompleteSurvey = async (result) => {
    await fetchData("/add-answer/", "POST", {
      id: "68a8f5c85e6b02b365661338",
      respuesta: { ...result.data },
    }).then((data) => {
      if (data.status && data.status === "success") {
        setAnswered(true);
        setAnswers({});
      }
    });
  };

  const onChange = (result) => {
    setAnswers(result.data);
  };

  return (
    <div className="grid">
      <div className="col-12">
        {anwered ? (
          <div className="flex justify-content-center flex-wrap">
            <h1 class="animate__animated animate__tada">
              ¡Gracias por contestar la encuesta!
            </h1>
          </div>
        ) : (
          <Survey
            model={survey}
            onComplete={onCompleteSurvey}
            onValueChanged={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default SurveyApplication;

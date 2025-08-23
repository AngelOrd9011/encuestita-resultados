import { useEffect, useState } from "react";
import useFetchData from "./hooks/useFetchData";
import Answers from "./components/Answers";

function App() {
  const [data, setData] = useState(null);
  const { fetchData } = useFetchData();

  const executeFetch = async () => {
    await fetchData("/survey/", "POST", {
      id: "68a8f5c85e6b02b365661338",
    }).then((_data) => setData(_data));
  };

  useEffect(() => {
    setInterval(() => {
      executeFetch();
    }, 3000);
  }, []);

  return (
    <main className="grid">
      <div className="col-12 md:col-10 md:col-offset-1">
        {data && <Answers respuestas={data.respuestas} />}
      </div>
    </main>
  );
}

export default App;

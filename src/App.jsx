import { useEffect, useState } from 'react';
import Answers from './components/Answers';
import useFetchData from './hooks/useFetchData';

function App() {
  const [data, setData] = useState(null);
  const { fetchData } = useFetchData();

  const executeFetch = async () => {
    await fetchData('/survey/', 'POST', {
      id: '68f6b8fe18ac1edb403d5b04',
    }).then((_data) => setData(_data));
  };

  useEffect(() => {
    setInterval(() => {
      executeFetch();
    }, 10000);
  }, []);

  return (
    <main className="grid">
      <div className="col-12 md:col-10 md:col-offset-1">
        {data && (
          <Answers
            respuestas={data.respuestas}
            preguntas={data?.encuesta?.pages?.[0]?.elements}
          />
        )}
      </div>
    </main>
  );
}

export default App;

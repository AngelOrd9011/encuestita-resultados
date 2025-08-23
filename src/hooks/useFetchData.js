import { useState } from 'react';

const useFetchData = () => {
  const api_uri = 'https://kong-estandarizacion.buengobierno.gob.mx/diep/encuesta';
  const [loadingData, setLoadingData] = useState(false);

  const fetchData = async (path, method, body) => {
    setLoadingData(true);
    let options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (method !== 'GET') options.body = JSON.stringify(body);

    let data = await fetch(`${api_uri}${path}`, options)
      .then((res) => res?.json())
      .catch((e) => {
        throw new Error(e);
      })
      .finally(() => setLoadingData(false));
    return data;
  };

  return { fetchData, loadingData };
};
export default useFetchData;

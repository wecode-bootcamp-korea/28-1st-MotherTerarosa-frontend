import { useState, useEffect } from 'react';
import { fetchData } from 'utils/fetchData';

const useFetch = opts => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    fetchData(opts.url).then(data => {
      setState({
        ...state,
        loading: false,
        data,
      });
    });
  }, [opts.queryString]);

  if (!opts.url) return;
  console.log(state);

  return { ...state };
};

export default useFetch;

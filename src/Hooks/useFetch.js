import { useState, useEffect } from 'react';
import { fetchData } from 'utils/fetchData';

const useFetch = opts => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    fetchData(opts.url)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, []);

  if (!opts.url) return;

  return { ...state };
};

export default useFetch;

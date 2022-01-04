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
    return () => {
      setState({ ...state, loading: true });
    };
  }, [opts.trigger]);

  if (!opts.url) return;

  return { ...state };
};

export default useFetch;

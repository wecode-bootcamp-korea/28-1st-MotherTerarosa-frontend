import { useState, useEffect } from 'react';

const useFetch = opts => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    fetch(opts.url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setState({
          ...state,
          loading: false,
          data: data.result,
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

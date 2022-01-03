import { useState, useEffect } from 'react';
import { fetchData } from 'utils/fetchData';

const useFetch = opts => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

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
  }, [trigger]);

  if (!opts.url) return;

  return { ...state, refetch };
};

export default useFetch;

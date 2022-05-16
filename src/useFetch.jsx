import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(false);
      setData(data);
    };

    getData();
  }, [url]);

  return { data, loading };
}

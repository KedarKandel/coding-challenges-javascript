const { useState, useEffect } = require("react");
type dataType = {
  id: Number;
  name: String;
  isMarried: boolean;
};

export const useApi = (endpoint: string) => {
  const [data, setData] = useState<dataType>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        const result: dataType = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const timeout = setTimeout(() => {
      fetchData();
    }, 5000); // Fetch data every 5 seconds

    return () => clearTimeout(timeout);
  }, [endpoint]);

  return { data, error, loading };
};

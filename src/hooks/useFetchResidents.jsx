import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchResidents = (residentsUrls) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        const residentPromises = residentsUrls.map(url => axios.get(url));
        const results = await Promise.all(residentPromises);
        setData(results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { data, isLoading, error };
};

export default useFetchResidents;
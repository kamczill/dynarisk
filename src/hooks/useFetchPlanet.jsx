import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPlanet = (planetId) => {
    const [planet, setPlanet] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 

    useEffect(() => {
        let isCancelled = false; 

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://swapi.dev/api/planets/${planetId}/`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (!isCancelled) {
                    setPlanet(response.data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err);
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, []);

    return { planet, isLoading, error };
};

export default useFetchPlanet;
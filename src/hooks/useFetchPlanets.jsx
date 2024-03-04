import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const useFetchPlanets = () => {
    const [planets, setPlanets] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 
    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get('page') || 1;

    useEffect(() => {
        let isCancelled = false; 

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://swapi.dev/api/planets/?page=${pageNumber}`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (!isCancelled) {
                    setPlanets(response.data);
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
    }, [pageNumber]);

    return { planets, isLoading, error};
};

export default useFetchPlanets;
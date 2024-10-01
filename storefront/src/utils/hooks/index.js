import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching multiple data sets concurrently.
 * @param {Array} requests - An array of API fetch functions.
 */
export const useFetchMultipleData = (requests) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all(requests)
            .then((results) => setData(results))
            .catch((error) => setError('Error fetching data'))
            .finally(() => setLoading(false));
    }, [requests]);

    return { data, loading, error };
};


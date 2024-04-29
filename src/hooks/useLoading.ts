import { useState, useEffect } from 'react';

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 100);
        return () => clearTimeout(timeoutId);
    }, []);

    return isLoading;
};
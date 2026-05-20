import { useEffect, useState } from "react";
import { getApod, getNeoObject } from "../../services/NASA-API.js";

export function useHomeData() {
    const [data, setData] = useState({ apod: null, neo: null });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isActive = true;

        async function loadHomeData() {
            try {
                const [apod, neo] = await Promise.all([getApod(), getNeoObject()]);

                if (isActive) {
                    setData({ apod, neo });
                }
            } catch (loadError) {
                if (isActive) {
                    setError(loadError);
                }
            } finally {
                if (isActive) {
                    setLoading(false);
                }
            }
        }

        loadHomeData();

        return () => {
            isActive = false;
        };
    }, []);

    return { ...data, loading, error };
}
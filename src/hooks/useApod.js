import { useEffect, useState } from "react";
import { getApod } from "../../services/NASA-API.js";

export function useApod() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isActive = true;

        async function loadApod() {
            try {
                const result = await getApod();

                if (isActive) {
                    setData(result);
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

        loadApod();

        return () => {
            isActive = false;
        };
    }, []);

    return { data, loading, error };
}
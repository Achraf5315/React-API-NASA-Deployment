import { useEffect, useState } from "react";
import { getNeoObject } from "../../services/NASA-API.js";

export function useNeoObject(objectId = "3542519") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    async function loadNeo() {
      try {
        const result = await getNeoObject(objectId);

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

    loadNeo();

    return () => {
      isActive = false;
    };
  }, [objectId]);

  return { data, loading, error };
}